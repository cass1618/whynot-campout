<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto" max-width="900">
      <v-img class="mb-4" height="150" src="@/assets/logo.png" />

      <div class="text-center">
        <div class="text-body-2 font-weight-light mb-n1">WHYNOT Campout</div>

        <h1 class="text-h2 font-weight-bold">Post Campout Survey</h1>
      </div>

      <div class="py-4" />

      <v-form @submit.prevent="submit">
        <v-card class="mb-4">
          <v-card-text>
            <v-text-field
              v-model="firstname.value.value"
              :counter="10"
              :error-messages="firstname.errorMessage.value"
              @blur="validateField('firstname')"
              label="First Name"
            ></v-text-field>
            <v-text-field
              v-model="lastname.value.value"
              :counter="10"
              :error-messages="lastname.errorMessage.value"
              @blur="validateField('lastname')"
              label="Last Name"
            ></v-text-field>
            <v-text-field
              v-model="email.value.value"
              :error-messages="email.errorMessage.value"
              @blur="validateField('email')"
              label="E-mail"
            ></v-text-field>
          </v-card-text>
        </v-card>
        <v-card class="mb-4">
          <v-card-title>
            Which amenities would you most like to have available at next year's
            campout?
          </v-card-title>
          <v-card-subtitle> Please select your top 3 choices. </v-card-subtitle>
          <v-card-text>
            <v-input
              :error-messages="showAmenitiesError ? amenitiesErrorMessage : []"
            >
              <v-row>
                <v-col
                  v-for="(amenity, index) in availableAmenities"
                  :key="amenity"
                  cols="12"
                  md="6"
                >
                  <RankedCheckboxes
                    :modelValue="selectedAmenities[index].checked"
                    :order="selectedAmenities[index].order"
                    :countSelectedAmenities="countSelectedAmenities"
                    :maxSelections="3"
                    @update:modelValue="(value) => updateChecked(index, value)"
                    @update:order="(order) => updateOrder(index, order)"
                    @change="validateField('amenities')"
                  >
                    <strong>{{ amenity }}</strong>
                  </RankedCheckboxes>
                </v-col>
              </v-row>
            </v-input>
          </v-card-text>
        </v-card>

        <v-btn class="me-4" type="submit" @click="attemptSubmit()">
          submit
        </v-btn>

        <v-btn @click="handleReset"> clear </v-btn>
      </v-form>
    </v-responsive>
  </v-container>
</template>

<script setup>
import { useFirestore } from "vuefire";
import { useField, useForm } from "vee-validate";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import RankedCheckboxes from "./RankedCheckboxes";

const db = useFirestore();
const formSubmitted = ref(false);

const { handleSubmit, handleReset, validateField, errors } = useForm({
  validationSchema: {
    firstname(value) {
      if (value?.length >= 2) return true;

      return "Name needs to be at least 2 characters.";
    },
    lastname(value) {
      if (value?.length >= 2) return true;

      return "Name needs to be at least 2 characters.";
    },
    email(value) {
      if (/^[a-z0-9.-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(value)) return true;

      return "Must be a valid e-mail.";
    },
    selectedAmenities(value) {
      if (countSelectedAmenities.value > 0) return true;

      return "Please select at least one amenity.";
    },
  },
  initialValues: {
    desiredAmenities: [],
  },
});
const availableAmenities = [
  "restrooms",
  "handwashing stations",
  "showers",
  "free water station",
  "picnic tables",
  "vendors",
  "RV hookups",
  "pre-fab tents",
  "free wifi",
  "charging stations",
  "beauty station",
];

const firstname = useField("firstname");
const lastname = useField("lastname");
const email = useField("email");
const selectedAmenities = ref(
  availableAmenities.map(() => ({ checked: false, order: 0 }))
);
const amenitiesErrorMessage = computed(() => errors.value.amenities);
const showAmenitiesError = computed(
  () => formSubmitted.value && amenitiesErrorMessage.value
);

const countSelectedAmenities = computed(() => {
  return selectedAmenities.value.filter((amenity) => amenity.checked).length;
});

const updateChecked = (index, value) => {
  if (value && countSelectedAmenities.value >= 3) {
    return; // Prevent selection if maxSelections is reached
  }
  selectedAmenities.value[index].checked = value;
};

const updateOrder = (index, value) => {
  if (value) {
    // Assign the next available order number to the newly checked item
    const nextOrder =
      Math.max(...selectedAmenities.value.map((a) => a.order)) + 1;
    selectedAmenities.value[index].order = nextOrder;
  } else {
    // Reset the order of the unchecked item and reassign orders to remaining checked items
    selectedAmenities.value[index].order = 0;
    let order = 1;
    selectedAmenities.value.forEach((amenity) => {
      if (amenity.checked) {
        amenity.order = order++;
      }
    });
  }
};

// determine docId by checking if document with name exists and appending index
const getDocId = async (docName) => {
  try {
    let docExists = true;
    let count = 0;

    // assign docId to next in sequence
    while (docExists) {
      // query db for current docId
      const currentDocId = count == 0 ? docName : docName + "-" + count;
      const docSnap = await getDoc(doc(db, "SurveyData", currentDocId));

      if (!docSnap.exists()) {
        docExists = false;
        return currentDocId;
      } else {
        // docId exists -> append next number
        count++;
      }
    }
  } catch (error) {
    console.error("Error in getDocId(): ", error);
  }
};

// handle submit button click
const attemptSubmit = (event) => {
  formSubmitted.value = true;
  submit(event);
};

const submit = handleSubmit(async (values) => {
  values.desiredAmenities = selectedAmenities.value
    .filter((amenity) => amenity.checked)
    .map((amenity) => availableAmenities[amenity.order - 1]);
  try {
    const docId = await getDocId(
      values.firstname.toLowerCase() + "-" + values.lastname.toLowerCase()
    );
    await setDoc(doc(collection(db, "SurveyData"), docId), values);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
});
</script>

<style scoped>
.v-card-title,
.v-card-subtitle {
  white-space: normal;
  hyphens: none;
}
</style>

<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto">
      <v-img class="mb-4" height="150" src="@/assets/logo.png" />

      <div class="text-center">
        <div><h2>WHYNOT Campout 2024</h2></div>

        <h1>Post Campout Survey</h1>
      </div>

      <div class="py-4" />

      <v-card class="mb-4">
        <v-card-subtitle>
          Thank you for attending the 2024 WHYNOT Campout! We want next year's
          campout to be bigger and better and we could really use your help to
          make that happen. Please take a few minutes to fill out this survey to
          help us understand what we did well and what we can do better. Upon
          completion of this survey, you will be eligible for a special
          discounted presale on WHYNOT's next ticket event as well as next
          year's campout! Note: we will need to verify that you attended in
          order for you to be eligible.
        </v-card-subtitle>
      </v-card>
      <v-form v-if="!formSuccessfullySubmitted" @submit.prevent="submit">
        <v-card class="mb-4">
          <v-card-text>
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="firstname.value.value"
                  :counter="10"
                  :error-messages="firstname.errorMessage.value"
                  @blur="validateField('firstname')"
                  label="First Name"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="lastname.value.value"
                  :counter="10"
                  :error-messages="lastname.errorMessage.value"
                  @blur="validateField('lastname')"
                  label="Last Name"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="email.value.value"
                  :error-messages="email.errorMessage.value"
                  @blur="validateField('email')"
                  label="E-mail"
                >
                </v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
        <v-card class="mb-4">
          <v-card-title
            >Overall, how would you rate this year's campout?
          </v-card-title>
          <v-card-text>
            <v-rating
              v-model="overallRating.value.value"
              hover
              :length="10"
              :size="52"
              active-color="#FAA0DB"
              empty-icon="mdi-heart-outline"
              half-icon="mdi-heart-half-full"
              full-icon="mdi-heart"
            />
          </v-card-text>
        </v-card>
        <v-card class="mb-4">
          <v-card-title> What did you like most about this year's campout?
          </v-card-title>
          <v-card-text>
            <v-text-field
                  v-model="likeMost.value.value"
                  :error-messages="likeMost.errorMessage.value"
                  @blur="validateField('likeMost')"
                >
                </v-text-field>
          </v-card-text>
        </v-card>
        <v-card class="mb-4">
          <v-card-title> What did you like least about this year's campout?
          </v-card-title>
          <v-card-text>
            <v-text-field
                  v-model="likeLeast.value.value"
                  :error-messages="likeLeast.errorMessage.value"
                  @blur="validateField('likeLeast')"
                >
                </v-text-field>
          </v-card-text>
        </v-card>
        <v-card class="mb-4">
          <v-card-title>How likely are you to attend next year's campout?
          </v-card-title>
          <v-card-text>
            <v-rating
              v-model="likelyToAttend.value.value"
              hover
              :length="10"
              :size="52"
              active-color="#FAA0DB"
              empty-icon="mdi-heart-outline"
              half-icon="mdi-heart-half-full"
              full-icon="mdi-heart"
            />
          </v-card-text>
        </v-card>
        <v-card class="mb-4">
          <v-card-title>How likely are you to invite additional friends to next year's campout?
          </v-card-title>
          <v-card-text>
            <v-rating
              v-model="likelyToReccomend.value.value"
              hover
              :length="10"
              :size="52"
              active-color="#FAA0DB"
              empty-icon="mdi-heart-outline"
              half-icon="mdi-heart-half-full"
              full-icon="mdi-heart"
            />
          </v-card-text>
        </v-card>
        <v-card class="mb-4">
          <v-card-title
          </v-card-title>
          <v-card-text>
          </v-card-text>
        </v-card>
        <v-card class="mb-4">
          <v-card-title
          </v-card-title>
          <v-card-text>
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

        <v-btn class="me-4" size="large" block type="submit" @click="attemptSubmit()" :ripple="true">
          submit
        </v-btn>

        <!-- <v-btn @click="handleReset"> clear </v-btn> -->
      </v-form>
      
      <v-card v-else>
        <v-card-title>Thank you for your submission! We will be reaching out to you about
          the presale when we schedule our next event!
        </v-card-title>
      </v-card>
      <v-snackbar
      v-model="errorbar"
      :timeout="6000"
    >
      Please correct the errors in the form before submitting.
    </v-snackbar>
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
const errorMessage = ref("");
const formSuccessfullySubmitted = ref(false);
const errorbar = ref(false);

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
    overallRating(value) {
      if (value > 0) return true;

      return "Please select a rating.";
    },
    likeMost(value) {
      if (value?.length >= 2) return true;

      return "LIKE MOST ERROR.";
    },
    likeLeast(value) {
      if (value?.length >= 2) return true;

      return "LIKE LEAST ERROR.";
    },
    likelyToAttend(value) {
      if (value > 0) return true;

      return "Please select a rating.";
    },
    likelyToReccomend(value) {
      if (value > 0) return true;

      return "Please select a rating.";
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
const overallRating = useField("overallRating");
const likeMost = useField("likeMost");
const likeLeast = useField("likeLeast");
const likelyToAttend = useField("likelyToAttend");
const likelyToReccomend = useField("likelyToReccomend");
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
const attemptSubmit = async (event) => {
  formSubmitted.value = true;
  const isValid = await submit(event);
  if (!isValid) {
    errorbar.value = true;
    errorMessage.value = "Please correct the errors in the form before submitting.";
  }
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
    formSuccessfullySubmitted.value = true;
    return true;
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

.v-card-title {
  font-family: 'Happy Monkey', system-ui;
  color: #00c2fa;
  font-weight: bold;
}

.v-card-subtitle {
  font-family: 'Happy Monkey', system-ui;
  color: #faa0db;
}

.v-card {
  border-radius: 16px;
}

.v-btn {
  font-family: 'Happy Monkey', system-ui;
  font-size: xx-large;
}

h1 {
  font-family: 'Happy Monkey', system-ui;
  color: #00c2fa;
}

h2 {
  font-family: 'Happy Monkey', system-ui;
  color: #faa0db;
}
</style>

<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto">
      <v-img class="mb-0" height="200" src="@/assets/logo.png" />

      <div class="text-center">
        <div><h2>WHYNOT Campout 2024</h2></div>

        <h1>Post Campout Survey</h1>
      </div>

      <div class="py-4" />

      <v-card class="mb-4 .card">
        <v-card-subtitle
          v-if="!formSuccessfullySubmitted"
          style="color: #ffffff"
        >
          Thank you for attending the 2024 WHYNOT Campout! We want next year's
          campout to be bigger and better and we could really use your help to
          make that happen. Please take a few minutes to fill out this survey to
          help us understand what we did well and what we can do better. Upon
          completion of this survey, you will be eligible for a special
          discounted presale on WHYNOT's next ticketed event as well as next
          year's campout! Note: we will need to verify that you attended in
          order for you to be eligible.
        </v-card-subtitle>
      </v-card>
      <v-form v-if="!formSuccessfullySubmitted" @submit.prevent="checkIfReady">
        <v-card class="mb-4 .card">
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6" class="pb-0">
                <v-text-field
                  v-model="firstname.value.value"
                  :counter="10"
                  :error-messages="firstname.errorMessage.value"
                  @blur="validateField('firstname')"
                  label="First Name"
                  autocomplete="off"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" md="6" class="pb-0">
                <v-text-field
                  v-model="lastname.value.value"
                  :counter="10"
                  :error-messages="lastname.errorMessage.value"
                  @blur="validateField('lastname')"
                  label="Last Name"
                  autocomplete="off"
                >
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-card-subtitle class="pl-1" style="color: #00c2fa">
                  Please provide at least one means of contact if you would like
                  to receive your presale code
                </v-card-subtitle>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="4" class="pb-0">
                <v-text-field
                  v-model="email.value.value"
                  :error-messages="email.errorMessage.value"
                  @blur="validateField('email')"
                  label="e-mail"
                  autocomplete="off"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" md="4" class="pb-0">
                <v-text-field
                  v-model="insta.value.value"
                  :error-messages="insta.errorMessage.value"
                  @blur="validateField('insta')"
                  label="instagram"
                  autocomplete="off"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" md="4" class="pb-0">
                <v-text-field
                  v-model="phone.value.value"
                  :error-messages="phone.errorMessage.value"
                  @blur="validateField('phone')"
                  label="phone"
                  autocomplete="off"
                >
                </v-text-field>
              </v-col>
            </v-row>
            <v-checkbox
              v-model="contact.value.value"
              label="please contact me about any future events and other announcements"
              class="pink"
            >
            </v-checkbox>
          </v-card-text>
        </v-card>
        <v-card class="mb-4 .card">
          <v-card-title
            >Overall, how would you rate this year's campout?
          </v-card-title>
          <v-card-text class="pb-0">
            <v-input
              :error-messages="
                overallRating.errorMessage.value !== 'undefined'
                  ? overallRating.errorMessage.value
                  : []
              "
            >
              <v-row>
                <v-col cols="12" class="d-flex align-center justify-center">
                  <v-rating
                    v-model="overallRating.value.value"
                    hover
                    half-increments
                    :length="5"
                    :size="52"
                    :error-messages="overallRating.errorMessage.value"
                    active-color="#FAA0DB"
                    empty-icon="mdi-heart-outline"
                    half-icon="mdi-heart-half-full"
                    full-icon="mdi-heart"
                  />
                </v-col>
              </v-row>
            </v-input>
          </v-card-text>
        </v-card>
        <v-card class="mb-4 .card">
          <v-card-title>
            What did you like most about this year's campout?
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
        <v-card class="mb-4 .card">
          <v-card-title>
            What did you like least about this year's campout?
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
        <v-card class="mb-4 .card">
          <v-card-title
            >How likely are you to attend next year's campout?
          </v-card-title>
          <v-card-text class="pb-0">
            <v-input
              ><v-row>
                <v-col cols="12" class="d-flex align-center justify-center">
                  <v-rating
                    v-model="likelyToAttend.value.value"
                    hover
                    half-increments
                    :length="5"
                    :size="52"
                    active-color="#FAA0DB"
                    empty-icon="mdi-heart-outline"
                    half-icon="mdi-heart-half-full"
                    full-icon="mdi-heart"
                  />
                </v-col>
              </v-row>
            </v-input>
          </v-card-text>
        </v-card>
        <v-card class="mb-4 .card">
          <v-card-title
            >How likely are you to invite additional friends to next year's
            campout?
          </v-card-title>
          <v-card-text class="pb-0">
            <v-input
              ><v-row>
                <v-col cols="12" class="d-flex align-center justify-center">
                  <v-rating
                    v-model="likelyToReccomend.value.value"
                    hover
                    half-increments
                    :length="5"
                    :size="52"
                    active-color="#FAA0DB"
                    empty-icon="mdi-heart-outline"
                    half-icon="mdi-heart-half-full"
                    full-icon="mdi-heart"
                  />
                </v-col>
              </v-row>
            </v-input>
          </v-card-text>
        </v-card>

        <v-card class="mb-4 .card">
          <v-card-title>
            Are you planning on attending any other festivals next summer?
          </v-card-title>
          <v-card-text class="pb-0">
            <v-row>
              <v-col
                v-for="item in availableFestivals"
                :key="item"
                cols="12"
                md="6"
              >
                <v-checkbox
                  class="mb-0"
                  v-model="selectedFestivals"
                  :value="item"
                  hide-details
                  light
                >
                  <template v-slot:label>
                    <strong>{{ item }}</strong>
                  </template>
                </v-checkbox>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-text class="pt-0">
            <v-row
              ><v-col cols="10">
                <v-text-field
                  v-model="otherFestivals.value.value"
                  label="Any other festivals?"
                >
                </v-text-field> </v-col
            ></v-row>
          </v-card-text>
        </v-card>

        <v-card class="mb-4">
          <v-card-title
            >How do you feel about not having a lineup?</v-card-title
          >
          <v-radio-group v-model="lineup.value.value">
            <v-radio
              class="radio"
              label="I'd rather know exactly who's playing and when."
              value="con"
            ></v-radio>
            <v-radio
              class="radio"
              label="I love the casual, play when you feel like it vibe!"
              value="pro"
            ></v-radio>
            <v-radio
              class="radio"
              label="I like that there isn't an official lineup but it would
            be nice to have a little more organization and ability to sign-up for time slots or a rotation."
              value="middle"
            ></v-radio>
            <v-radio class="radio-other" value="other">
              <template v-slot:label>
                <span>Other: </span>
                <v-text-field
                  class="ml-2 pt-0 radio-other"
                  v-model="otherLineup.value.value"
                  variant="underlined"
                  style="width: 50vw"
                ></v-text-field
              ></template>
            </v-radio>
          </v-radio-group>
        </v-card>

        <v-card class="mb-4 .card">
          <v-card-title>
            Which amenities would you most like to have available at next year's
            campout?
          </v-card-title>
          <v-card-subtitle> Please select up to 3 choices </v-card-subtitle>
          <v-card-text class="pb-0">
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
                    theme="dark"
                    :modelValue="selectedAmenities[index].checked"
                    :order="selectedAmenities[index].order"
                    :maxSelections="3"
                    @update:modelValue="
                      (value) => updateCheckedAmenities(index, value)
                    "
                  >
                    <strong dark>{{ amenity }}</strong>
                  </RankedCheckboxes>
                </v-col>
              </v-row>
            </v-input>
          </v-card-text>
          <v-card-text class="pt-0">
            <v-row
              ><v-col cols="10">
                <v-text-field
                  v-model="otherAmenities.value.value"
                  label="Any other suggestions?"
                >
                </v-text-field> </v-col
            ></v-row>
          </v-card-text>
        </v-card>

        <v-card class="mb-4 .card">
          <v-card-title>
            What kind of vendors would you be most interested in having?
          </v-card-title>
          <v-card-subtitle> Please select up to 3 choices </v-card-subtitle>
          <v-card-text class="pb-0">
            <v-row>
              <v-col
                v-for="(item, index) in availableVendors"
                :key="item"
                cols="12"
                md="6"
              >
                <RankedCheckboxes
                  theme="dark"
                  :modelValue="selectedVendors[index].checked"
                  :order="selectedVendors[index].order"
                  :maxSelections="3"
                  @update:modelValue="
                    (value) => updateCheckedVendors(index, value)
                  "
                >
                  <strong dark>{{ item }}</strong>
                </RankedCheckboxes>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-text class="pt-0">
            <v-row
              ><v-col cols="10">
                <v-text-field
                  v-model="otherVendors.value.value"
                  label="Any other suggestions?"
                >
                </v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <v-card class="mb-4">
          <v-card-title>
            What types of games or activities would you be interested in seeing
            at the next campout?</v-card-title
          ><v-card-text>
            <v-text-field v-model="activities.value.value"> </v-text-field
          ></v-card-text>
        </v-card>

        <v-card class="mb-4">
          <v-card-title> Are you a DJ? </v-card-title>
          <v-card-text>
            <v-btn-toggle v-model="isDj">
              <v-btn value="yes">Yes</v-btn>
              <v-btn value="no">No</v-btn>
            </v-btn-toggle>
          </v-card-text>
          <v-card-title v-if="isDj === 'yes'">
            Did you get a chance to play at some point during the campout?
          </v-card-title>
          <v-card-text v-if="isDj === 'yes'">
            <v-btn-toggle v-model="didPlay.value.value">
              <v-btn value="yes">Yes</v-btn>
              <v-btn value="no">No</v-btn>
            </v-btn-toggle>
          </v-card-text>
          <v-card-title v-if="isDj === 'yes'">
            Do you have any feedback on how to improve the experience for DJs?
          </v-card-title>
          <v-card-text v-if="isDj === 'yes'">
            <v-text-field v-model="djExperience.value.value"></v-text-field>
          </v-card-text>
        </v-card>

        <v-card class="mb-4">
          <v-card-title>
            Did you join the What's App chat prior to the event?
          </v-card-title>
          <v-card-text>
            <v-btn-toggle v-model="joinedWhatsApp">
              <v-btn value="yes">Yes</v-btn>
              <v-btn value="no">No</v-btn>
            </v-btn-toggle>
          </v-card-text>

          <v-card-title v-if="joinedWhatsApp === 'yes'">
            Did you find the information provided in the chat to be useful?
          </v-card-title>
          <v-card-text v-if="joinedWhatsApp === 'yes'">
            <v-btn-toggle v-model="whatsApp.value.value">
              <v-btn value="yes">Yes</v-btn>
              <v-btn value="no">No</v-btn>
            </v-btn-toggle>
          </v-card-text>

          <v-card-text v-if="joinedWhatsApp === 'yes'">
            <v-text-field
              v-model="whatsAppDetails.value.value"
              label="Provide any additional feedback on the chat"
            ></v-text-field>
          </v-card-text>
        </v-card>

        <v-card class="mb-4 .card">
          <v-card-title>
            What type of communication methods would you prefer for updates and
            discussions about future events?
          </v-card-title>
          <v-card-subtitle> Please select up to 3 choices </v-card-subtitle>
          <v-card-text class="pb-0">
            <v-input :error-messages="[]">
              <v-row>
                <v-col
                  v-for="(item, index) in availableCommunication"
                  :key="item"
                  cols="12"
                  md="6"
                >
                  <RankedCheckboxes
                    :modelValue="selectedCommunication[index].checked"
                    :order="selectedCommunication[index].order"
                    :maxSelections="3"
                    @update:modelValue="
                      (value) => updateCheckedCommunication(index, value)
                    "
                  >
                    <strong>{{ item }}</strong>
                  </RankedCheckboxes>
                </v-col>
              </v-row>
            </v-input>
          </v-card-text>
          <v-card-text class="pt-0">
            <v-row
              ><v-col cols="10">
                <v-text-field
                  v-model="otherCommunication.value.value"
                  label="other communication method"
                >
                </v-text-field> </v-col
            ></v-row>
          </v-card-text>
        </v-card>

        <v-card class="mb-4">
          <v-card-title>
            Did you receive your limited edition WHYNOT campout refrigerator
            magnet?
          </v-card-title>
          <v-card-text>
            <v-btn-toggle v-model="receivedMagnet">
              <v-btn value="yes">Yes!</v-btn>
              <v-btn value="no">Not Yet</v-btn>
            </v-btn-toggle>
          </v-card-text>
          <v-card-title v-if="receivedMagnet === 'no'">
            Would you like us to contact you about getting that to you?
          </v-card-title>
          <v-card-text v-if="receivedMagnet === 'no'">
            <v-btn-toggle v-model="wantsMagnet.value.value">
              <v-btn value="yes">Yes please!</v-btn>
              <v-btn value="no">I'm good</v-btn>
            </v-btn-toggle>
          </v-card-text>
        </v-card>

        <v-card class="mb-4">
          <v-card-title
            >Is there any other feedback or suggestions you'd like to share that
            could help us to improve next year's campout? </v-card-title
          ><v-card-text>
            <v-textarea v-model="additionalFeedback.value.value" auto-grow>
            </v-textarea>
          </v-card-text>
        </v-card>

        <v-btn
          class="me-4 sub-btn"
          size="large"
          block
          type="submit"
          :ripple="true"
        >
          submit
        </v-btn>
      </v-form>

      <v-card v-else>
        <v-card-title style="color: #ffffff">
          Thank you for your submission! We will be reaching out to you about
          the presale when we schedule our next event!
        </v-card-title>
        <v-card-title
          >Do you have any photos from the event that you'd like to share with
          other attendees? If you haven't already, pleae upload them to the
          <a
            href="https://drive.google.com/drive/folders/1-HC3Anx3XrQdAaof7XD7kzKycFozt0jA?usp=sharing"
            target="_blank"
          >
            shared google drive
          </a>
          folder!
        </v-card-title>
      </v-card>
      <v-snackbar v-model="errorbar" :timeout="6000">
        Please fill in required fields before submitting.
      </v-snackbar>

      <div class="text-center pa-4">
        <v-dialog v-model="confirmation" max-width="400" persistent>
          <v-card title="Are you ready to submit the form?">
            <template v-slot:actions>
              <v-btn
                class="pink"
                @click="submit()"
                prepend-icon="mdi-email-fast-outline"
              >
                SEND IT!
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn
                class="blue"
                @click="confirmation = false"
                prepend-icon="mdi-close-octagon-outline"
              >
                CANCEL
              </v-btn>
            </template>
          </v-card>
        </v-dialog>
      </div>
    </v-responsive>
  </v-container>
</template>

<script setup>
import { ref, toRaw } from "vue";
import { useFirestore } from "vuefire";
import { useField, useForm, validate } from "vee-validate";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import RankedCheckboxes from "./RankedCheckboxes";

const db = useFirestore();
const formSubmitted = ref(false);
const errorMessage = ref("");
const formSuccessfullySubmitted = ref(false);
const errorbar = ref(false);
const joinedWhatsApp = ref("");
const isDj = ref("");
const receivedMagnet = ref("");
const confirmation = ref(false);

const { handleSubmit, handleReset, validateField, errors } = useForm({
  validationSchema: {
    firstname(value) {
      if (value?.length >= 0) return true;

      return "please enter name";
    },
    lastname(value) {
      if (value?.length >= 0) return true;

      return "please enter name";
    },
    email(value) {
      if (/^[a-z0-9.-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(value) || !value)
        return true;

      return "please enter a valid email address";
    },
    overallRating(value) {
      if (value > 0) return true;

      return "please select a rating";
    },
    likeMost(value) {
      if (value?.length >= 2) return true;

      return "please enter a response";
    },
    likeLeast(value) {
      if (value?.length >= 2) return true;

      return "please enter a response";
    },
  },
  initialValues: {
    lastname: "",
    email: "",
    overallRating: 0,
    likeMost: "",
    likeLeast: "",
    likelyToAttend: 0,
    likelyToReccomend: 0,
    otherAmenities: "",
    otherCommunication: "",
    otherVendors: "",
    whatsApp: "",
    whatsAppDetails: "",
    otherFestivals: "",
    desiredAmenities: [],
    desiredCommunication: [],
    desiredFestivals: [],
    lineup: "",
    otherLineup: "",
    djExperience: "",
    didPlay: "",
    activities: "",
    insta: "",
    phone: "",
    contact: false,
    wantsMagnet: "",
    additionalFeedback: "",
  },
});
const availableAmenities = [
  "restrooms",
  "handwashing stations",
  "showers",
  "free water station",
  "picnic tables",
  "free wifi",
  "vendors",
  "merchants",
  "RV hookups",
  "pre-fab tents",
  "charging stations",
  "beauty station",
];
const availableVendors = [
  "taco truck",
  "pizza",
  "noodle bowls",
  "barbeque",
  "coffee",
  "ice cream",
  "smoothies",
  "alcoholic beverages",
  "non-alcoholic beverages",
  "general store",
];
const availableGames = [
  "tug-of-war",
  "capture the flag",
  "relay races",
  "water balloon toss",
  "kickball",
  "dodgeball",
  "volleyball",
  "pickleball",
  "three-legged race",
  "archery",
];
const availableActivites = [
  "yoga",
  "kayaking",
  "paddleboarding",
  "rafting",
  "arts & crafts",
  "face/body painting",
  "hair braiding",
  "photobooth",
];
const availableCommunication = [
  "what's app",
  "discord",
  "instagram",
  "facebook",
  "email",
  "iMessage",
  "SMS",
];
const availableFestivals = [
  "EDC",
  "Lighting in a Bottle",
  "Desert Hearts",
  "Shambhala",
  "Day Trip",
  "Beyond Wonderland Gorge",
  "Movement",
  "Group Therapy",
  "Open Air",
  "Shift",
  "Canyon Vibration",
  "Goodtime Campout",
  "Annual Campout",
  "Burning Man",
];

const firstname = useField("firstname");
const lastname = useField("lastname");
const email = useField("email");
const insta = useField("insta");
const phone = useField("phone");
const contact = useField("contact");
const overallRating = useField("overallRating");
const likeMost = useField("likeMost");
const likeLeast = useField("likeLeast");
const likelyToAttend = useField("likelyToAttend");
const likelyToReccomend = useField("likelyToReccomend");
const otherAmenities = useField("otherAmenities");
const otherVendors = useField("otherVendors");
const otherCommunication = useField("otherCommunication");
const whatsApp = useField("whatsApp");
const whatsAppDetails = useField("whatsAppDetails");
const otherFestivals = useField("otherFestivals");
const lineup = useField("lineup");
const otherLineup = useField("otherLineup");
const djExperience = useField("djExperience");
const didPlay = useField("didPlay");
const activities = useField("activities");
const wantsMagnet = useField("wantsMagnet");
const additionalFeedback = useField("additionalFeedback");

const selectedAmenities = ref(
  availableAmenities.map(() => ({ checked: false, order: 0 }))
);
const selectedCommunication = ref(
  availableCommunication.map(() => ({ checked: false, order: 0 }))
);
const selectedVendors = ref(
  availableVendors.map(() => ({ checked: false, order: 0 }))
);

const selectedFestivals = ref(
  availableFestivals.map(() => ({ checked: false, order: 0 }))
);
const amenitiesErrorMessage = computed(() => errors.value.amenities);
const showAmenitiesError = computed(
  () => formSubmitted.value && amenitiesErrorMessage.value
);

const countSelectedAmenities = computed(() => {
  return selectedAmenities.value.filter((amenity) => amenity.checked).length;
});
const countSelectedCommunication = computed(() => {
  return selectedCommunication.value.filter((item) => item.checked).length;
});
const countSelectedVendors = computed(() => {
  return selectedVendors.value.filter((item) => item.checked).length;
});

const updateCheckedAmenities = (index, value) => {
  if (value && countSelectedAmenities.value >= 3) {
    return; // Prevent selection if maxSelections is reached
  }
  selectedAmenities.value[index].checked = value;
  updateOrderAmenities(index, value);
};

const updateOrderAmenities = (index, value) => {
  if (value) {
    // Assign the next available order number to the newly checked item
    const nextOrder =
      Math.max(...selectedAmenities.value.map((a) => a.order)) + 1;
    selectedAmenities.value[index].order = nextOrder;
    console.log("nextOrder: ", nextOrder);
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

const updateCheckedCommunication = (index, value) => {
  if (value && countSelectedCommunication.value >= 3) {
    return; // Prevent selection if maxSelections is reached
  }
  selectedCommunication.value[index].checked = value;
  updateOrderCommunication(index, value);
};

const updateOrderCommunication = (index, value) => {
  console.log(toRaw(selectedCommunication.value));
  if (value) {
    // Assign the next available order number to the newly checked item
    const nextOrder =
      Math.max(...selectedCommunication.value.map((a) => a.order)) + 1;
    selectedCommunication.value[index].order = nextOrder;
  } else {
    // Reset the order of the unchecked item and reassign orders to remaining checked items
    selectedCommunication.value[index].order = 0;
    let order = 1;
    selectedCommunication.value.forEach((item) => {
      if (item.checked) {
        item.order = order++;
      }
    });
  }
};

const updateCheckedVendors = (index, value) => {
  if (value && countSelectedVendors.value >= 3) {
    return; // Prevent selection if maxSelections is reached
  }
  selectedVendors.value[index].checked = value;
  updateOrderVendors(index, value);
};

const updateOrderVendors = (index, value) => {
  console.log(toRaw(selectedVendors.value));
  if (value) {
    // Assign the next available order number to the newly checked item
    const nextOrder =
      Math.max(...selectedVendors.value.map((a) => a.order)) + 1;
    selectedVendors.value[index].order = nextOrder;
  } else {
    // Reset the order of the unchecked item and reassign orders to remaining checked items
    selectedVendors.value[index].order = 0;
    let order = 1;
    selectedVendors.value.forEach((item) => {
      if (item.checked) {
        item.order = order++;
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

const checkIfReady = async (event) => {
  formSubmitted.value = true;
  const name = await validateField("firstname");
  const overallRating = await validateField("overallRating");
  const likeMost = await validateField("likeMost");
  const likeLeast = await validateField("likeLeast");
  if (name.valid && overallRating.valid && likeMost.valid && likeLeast.valid) {
    // await submit(event);
    confirmation.value = true;
  } else {
    errorbar.value = true;
    errorMessage.value = "Please fill in required fields before submitting.";
  }
};

const submit = handleSubmit(async (values) => {
  confirmation.value = false;
  values.desiredAmenities = selectedAmenities.value
    .filter((item) => item.checked)
    .map((item) => availableAmenities[item.order - 1]);
  values.desiredCommunication = selectedCommunication.value
    .filter((item) => item.checked)
    .map((item) => availableCommunication[item.order - 1]);
  values.desiredFestivals = selectedFestivals.value
    .filter((item) => item.checked)
    .map((item) => availableFestivals[item.order - 1]);
  values.desiredVendors = selectedVendors.value
    .filter((item) => item.checked)
    .map((item) => availableVendors[item.order - 1]);
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
* {
  font-family: "Happy Monkey", system-ui;
}

.pink {
  color: #faa0db !important;
}

.blue {
  color: #00c2fa !important;
}

:deep(.v-card-title) {
  white-space: normal;
  hyphens: none;
}

.v-card-subtitle {
  font-size: 20px;
  white-space: normal;
  hyphens: none;
}

.v-card-title {
  font-family: "Happy Monkey", system-ui;
  color: #00c2fa;
  font-weight: bold;
}

.v-card-subtitle {
  font-family: "Happy Monkey", system-ui;
  color: #faa0db;
}

.v-card {
  border-radius: 16px;
}

.v-btn {
  font-family: "Happy Monkey", system-ui;
  font-size: large;
  opacity: 0.9;
  color: #faa0db;
}

.sub-btn {
  font-size: xx-large;
  padding-top: 32px;
  padding-bottom: 32px;
}

h1 {
  font-family: "Happy Monkey", system-ui;
  color: #00c2fa;
}

h2 {
  font-family: "Happy Monkey", system-ui;
  color: #faa0db;
}

.v-radio-group {
  padding-left: 8px;
}

.radio {
  padding-left: 12px;
  padding-top: 12px;
}

.radio-other {
  padding-left: 12px;
  line-height: 12px !important;
}

:deep(.radio-other .v-field__input) {
  font-size: 20px !important;
  margin-bottom: -12px;
}

:deep(.radio-other .v-field) {
  font-size: 20px !important;
  margin-bottom: -8px;
}

.v-input--density-default {
  --v-input-control-height: 20px;
  --v-input-padding-top: 0px;
}

.v-checkbox {
  text-emphasis-style: strong;
  color: #ffffff;
}

.checkbox-label {
  font-family: "Happy Monkey", system-ui;
  color: #00c2fa !important;
}

:deep(.v-snackbar__content) {
  background-color: red;
  opacity: 0.6;
  padding: 28px;
  font-size: 24px;
}
</style>

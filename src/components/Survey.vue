<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto" max-width="900">
      <v-img class="mb-4" height="150" src="@/assets/logo.png" />

      <div class="text-center">
        <div class="text-body-2 font-weight-light mb-n1">WHYNOT Campout</div>

        <h1 class="text-h2 font-weight-bold">Post Campout Survey</h1>
      </div>

      <div class="py-4" />

      <form @submit.prevent="submit">
        <v-text-field
          v-model="firstname.value.value"
          :counter="10"
          :error-messages="firstname.errorMessage.value"
          label="First Name"
        ></v-text-field>
        <v-text-field
          v-model="lastname.value.value"
          :counter="10"
          :error-messages="lastname.errorMessage.value"
          label="Last Name"
        ></v-text-field>
        <v-text-field
          v-model="email.value.value"
          :error-messages="email.errorMessage.value"
          label="E-mail"
        ></v-text-field>

        <v-btn class="me-4" type="submit"> submit </v-btn>

        <v-btn @click="handleReset"> clear </v-btn>
      </form>
    </v-responsive>
  </v-container>
</template>

<script setup>
import { useFirestore } from "vuefire";
import { useField, useForm } from "vee-validate";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import * as yup from "yup";

const db = useFirestore();

const { handleSubmit, handleReset } = useForm({
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
  },
});
const firstname = useField("firstname");
const lastname = useField("lastname");
const email = useField("email");

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

const submit = handleSubmit(async (values) => {
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

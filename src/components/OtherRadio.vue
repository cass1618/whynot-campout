<template>
  <v-radio :value="value">
    <template v-slot:label>
      <span>{{ label }}</span>
      <v-text-field
        v-if="showTextField"
        v-model="textFieldValue"
        class="ml-2"
        variant="underlined"
        dense
        @input="$emit('input', textFieldValue)"
      ></v-text-field>
    </template>
  </v-radio>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from "vue";

const props = defineProps({
  value: String,
  label: String,
  showTextField: Boolean,
  modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);

const textFieldValue = ref(props.modelValue);

watch(
  () => props.modelValue,
  (newValue) => {
    textFieldValue.value = newValue;
  }
);

watch(textFieldValue, (newValue) => {
  if (newValue !== props.modelValue) {
    emit("update:modelValue", newValue);
  }
});
</script>

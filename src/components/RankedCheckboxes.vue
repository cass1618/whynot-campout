<template>
  <v-input
    :value="modelValue"
    :class="['custom-checkbox', { 'is-checked': modelValue }]"
    :error-messages="errorMessages"
    @click="toggle"
    @onToggle="toggle"
    theme="dark"
  >
    <template v-slot:default>
      <div class="checkbox-container">
        <div class="checkbox-icon">
          <v-icon v-if="modelValue">{{ getIcon }}</v-icon>
          <v-icon v-else>mdi-checkbox-blank-outline</v-icon>
        </div>
        <div class="checkbox-label" theme="dark">
          <slot></slot>
        </div>
      </div>
    </template>
  </v-input>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  order: {
    type: Number,
    default: 0,
  },
  maxSelections: {
    type: Number,
    default: 3,
  },
  countSelectedAmenities: {
    type: Number,
    default: 0,
  },
  errorMessages: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["update:modelValue", "update:order", "change"]);

const toggle = () => {
  if (
    !props.modelValue &&
    props.countSelectedAmenities >= props.maxSelections
  ) {
    return; // Prevent selection if maxSelections is reached
  }
  emit("update:modelValue", !props.modelValue);
  emit("change"); // Emit change event
  if (!props.modelValue) {
    emit("update:order", props.order + 1);
  } else {
    emit("update:order", 0);
  }
};

const getIcon = computed(() => {
  return `mdi-numeric-${props.order}-box`;
});
</script>

<style scoped>
.custom-checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;
  opacity: 0.9;
}

.checkbox-container {
  display: flex;
  align-items: center;
}

.checkbox-icon {
  margin-right: 8px;
}
</style>

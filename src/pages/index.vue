<template>
  <Suspense>
    <template #default>
      <Survey />
    </template>
    <template #fallback> Loading... </template>
  </Suspense>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const Survey = defineAsyncComponent(() => import("../components/Survey.vue"));
</script>

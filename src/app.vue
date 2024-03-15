<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="#AE4CFB" :height="2" />
    <NuxtPage />
  </NuxtLayout>
  <UINotify />
</template>

<script setup lang="ts">
import { UINotify } from "components/ui";
</script>

<style scoped lang="scss"></style>

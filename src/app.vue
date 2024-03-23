<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="#AE4CFB" :height="2" />
    <v-app>
      <NuxtPage />
    </v-app>
  </NuxtLayout>
  <UINotify />
</template>

<script setup lang="ts">
import { UINotify } from "components/ui";
</script>

<style scoped lang="scss"></style>

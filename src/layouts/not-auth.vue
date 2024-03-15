<template>
  <div>
    <not-auth-header />
    <slot />
  </div>
</template>

<script setup lang="ts">
import NotAuthHeader from "components/shared/not-auth-header.vue";
</script>

<style scoped lang="scss"></style>

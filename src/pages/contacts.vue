<template>
  <NuxtLayout :name="layout">
    <div>contacts page</div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const { status } = useAuth();

const loggedIn = computed(() => status.value === "authenticated");
const layout = computed(() => (loggedIn.value ? "default" : "not-auth"));
definePageMeta({
  public: true,
  layout: false,
  auth: false,
});
</script>

<style scoped lang="scss"></style>

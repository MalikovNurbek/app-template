<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="#AE4CFB" :height="2" />

    <h1 v-if="pending">pending...</h1>
    <ul v-else-if="data.length">
      <li v-for="todo in data">
        {{ todo.title }}
        {{ todo.completed }}
        {{ todo.id }}
        user id: {{ todo.userId }}
      </li>
    </ul>
  </NuxtLayout>
</template>

<script setup lang="ts">
const { $someService } = useNuxtApp();
const { data, pending, error } = await useAsyncData(
  "todos-request",
  () =>
    $someService.getTodos({
      _limit: 20,
    }),
  { server: true, default: () => [] },
);
</script>

<style scoped lang="scss"></style>

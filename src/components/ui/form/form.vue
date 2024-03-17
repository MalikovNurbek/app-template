<template>
  <form>
    <slot :errors="errors" />
  </form>
</template>

<script setup lang="ts">
interface IError {
  [key: string]: string;
}

interface FormProps {
  errors: IError;
}

defineProps<FormProps>();
</script>

<template>
  <form v-bind="attrs">
    <slot :errors="errors" />
  </form>
</template>

<script setup lang="ts">
import { useAttrs } from "vue";

interface IError {
  [key: string]: string;
}

interface FormProps {
  errors: IError;
  options: Record<string, any>;
}

defineProps<FormProps>();
//
// const attrs = useAttrs();
//
// const { setErrors } = useForm();
//
// const formErrors = computed(() => getFormErrors().value);
//
// watch(formErrors, () => {
//   if (formErrors.value) {
//     setErrors(formErrors.value);
//   }
// });

defineExpose({
  titleTest: "la la la",
});
</script>

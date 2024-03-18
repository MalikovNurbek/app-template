<template>
  <form @submit.prevent="onSubmit">
    <slot />
  </form>
</template>

<script setup lang="ts">
interface FormProps {
  options: any;
  submit: () => void;
  invalidSubmit?: () => void;
}

const props = defineProps<FormProps>();

const { handleSubmit, setErrors } = useForm(props.options);

const onSubmit = handleSubmit(props.submit);

const formErrors = computed(() => getFormErrors().value);
watch(formErrors, () => {
  if (formErrors.value) {
    setErrors(formErrors.value);
  }
});
</script>

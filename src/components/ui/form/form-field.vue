<template>
  <Field v-slot="{ field, value, handleChange, errors }" :name="name">
    <div class="field">
      <slot
        :field="field"
        :value="value"
        :handle-change="handleChange"
        :errors="errors"
        :invalid="!!errors.length || isError"
      />
      <span v-if="errors.length">{{ errors[0] }}</span>
      <span v-if="!errors.length && isError">{{
        globalErrors[props.name]
      }}</span>
    </div>
  </Field>
</template>

<script setup lang="ts">
import { Field } from "vee-validate";

interface FormFieldProps {
  name: string;
}

const props = defineProps<FormFieldProps>();

const { errors } = useField(props.name);

const globalErrors = computed(() => getFormErrors().value ?? {});

const isError = computed(() => !!globalErrors.value[props.name]);
</script>
<style scoped lang="scss">
.field {
  display: flex;
  flex-direction: column;

  span {
    font-size: 12px;
    color: red;
    margin: 6px 0;
  }
}
</style>

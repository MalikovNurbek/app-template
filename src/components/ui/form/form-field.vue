<template>
  <Field v-slot="{ field, value, handleChange, errors }" :name="name">
    <div class="field">
      <slot
        :field="field"
        :value="value"
        :handle-change="handleChange"
        :errors="errors"
      />
      <ErrorMessage class="field__error" as="span" :name="name" />
    </div>
  </Field>
</template>

<script setup lang="ts">
import { Field, ErrorMessage } from "vee-validate";

interface FormFieldProps {
  name: string;
}

const props = defineProps<FormFieldProps>();

const { meta } = useField(props.name);

const invalid = computed(() => !meta.valid);

provide("invalid", invalid);

watch(meta, () => console.log(meta));
</script>
<style scoped lang="scss">
.field {
  display: flex;
  flex-direction: column;

  &__error {
    color: red;
    margin: 4px 0;
    font-size: 12px;
  }
}
</style>

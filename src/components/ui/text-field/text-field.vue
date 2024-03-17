<template>
  <input
    v-model="model"
    :type="type"
    :placeholder="placeholder"
    :class="invalid && 'invalid'"
  />
</template>
<script setup lang="ts">
interface TextFieldProps {
  value?: string;
  placeholder?: string;
  type?: string;
  invalid?: boolean;
}

interface TextFieldEmits {
  (event: "update:value", payload: any): void;
}

const props = withDefaults(defineProps<TextFieldProps>(), {
  placeholder: "Placeholder",
  type: "text",
});
const emits = defineEmits<TextFieldEmits>();

const { value } = toRefs(props);

const model = computed({
  get() {
    return value.value;
  },
  set(newValue) {
    emits("update:value", newValue);
  },
});
</script>
<style scoped lang="scss">
input {
  padding: 10px;
  outline: none;
  border: 1px solid gainsboro;
  border-radius: 6px;
  font-size: 16px;
}

.invalid {
  border-color: red;
}
</style>

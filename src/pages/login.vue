<template>
  <div>
    <form @submit.prevent="login">
      <div class="input-group username">
        <label for="username" class="label">username</label>
        <input id="username" name="username" type="text" class="input" />
        <div></div>
      </div>

      <div class="input-group password">
        <label for="password" class="label">username</label>
        <input id="password" name="password" type="password" class="input" />
        <div></div>
      </div>

      <button class="submit-button" type="submit" :disabled="isLoading">
        submit form
      </button>
    </form>

    <Form class="form" :options="formOptions" :submit="submit">
      <FormField v-slot="{ field, invalid }" name="username">
        <TextField
          v-bind="field"
          placeholder="Enter username"
          name="username"
        />
      </FormField>

      <FormField v-slot="{ field, invalid }" name="password">
        <TextField
          v-bind="field"
          placeholder="Enter password"
          type="password"
          name="password"
        />
      </FormField>
      <button type="submit">submit</button>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { Form, FormField, TextField } from "components/ui";
import * as yup from "yup";

definePageMeta({
  title: "Signin",
  public: true,
  layout: false,
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: "/",
  },
});

const { signIn, token, refreshToken } = useAuth();

const isLoading = ref(false);

const login = async (values: SubmitEvent) => {
  const formData = new FormData(values.target);
  isLoading.value = true;
  await signIn(
    {
      username: formData.get("username"),
      password: formData.get("password"),
    },
    { callbackUrl: "/", external: true },
  )
    .then(() => {
      notify({
        type: "success",
        message: "Добро пожаловать!",
      });
    })
    .catch((e) => {
      console.log("err", e);
      notify({
        type: "error",
        message: JSON.stringify(e),
      });
    })
    .finally(() => {
      isLoading.value = false;
    });
};

const schema = yup.object().shape({
  username: yup.string().required("required").max(5),
  password: yup.string().required("required").max(8),
});

const formOptions: any = {
  validationSchema: schema,
  // initialErrors, TODO
  // initialValues,
  // initialTouched,
  // keepValuesOnUnmount,
  // validateOnMount,
};

const submit = () =>
  setFormErrors({
    username: ["Must be number", "Must sexy"],
    password: ["Must be password"],
  });
</script>

<style scoped lang="scss">
form {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  align-items: flex-end;

  * {
    font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial,
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  }

  .input {
    height: 44px;
    background-color: #05060f0a;
    border-radius: 0.5rem;
    padding: 0 1rem;
    border: 2px solid transparent;
    font-size: 1rem;
    transition:
      border-color 0.3s cubic-bezier(0.25, 0.01, 0.25, 1) 0s,
      color 0.3s cubic-bezier(0.25, 0.01, 0.25, 1) 0s,
      background 0.2s cubic-bezier(0.25, 0.01, 0.25, 1) 0s;
  }

  .label {
    display: block;
    margin-bottom: 0.3rem;
    font-size: 0.9rem;
    font-weight: 500;
    color: #05060f99;
    transition: color 0.3s cubic-bezier(0.25, 0.01, 0.25, 1) 0s;
  }

  .input:hover,
  .input:focus,
  .input-group:hover .input {
    outline: none;
    border-color: #05060f;
  }

  .input-group:hover .label,
  .input:focus {
    color: #05060fc2;
  }

  .submit-button {
    flex: 1 0 50px;
    & {
      appearance: none;
      background-color: #fafbfc;
      border: 1px solid rgba(27, 31, 35, 0.15);
      border-radius: 6px;
      box-shadow:
        rgba(27, 31, 35, 0.04) 0 1px 0,
        rgba(255, 255, 255, 0.25) 0 1px 0 inset;
      box-sizing: border-box;
      color: #24292e;
      cursor: pointer;
      display: inline-block;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      list-style: none;
      padding: 6px 16px;
      position: relative;
      transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      vertical-align: middle;
      white-space: nowrap;
      word-wrap: break-word;
    }

    &:hover {
      background-color: #f3f4f6;
      text-decoration: none;
      transition-duration: 0.1s;
    }

    &:disabled {
      background-color: #fafbfc;
      border-color: rgba(27, 31, 35, 0.15);
      color: #959da5;
      cursor: default;
    }

    &:active {
      background-color: #edeff2;
      box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
      transition: none 0s;
    }

    &:focus {
      outline: 1px transparent;
    }

    &:disabled {
      opacity: 0.5;
      background-color: #cccccc;
      cursor: not-allowed;
    }

    &:before {
      display: none;
    }

    &:-webkit-details-marker {
      display: none;
    }
  }
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>

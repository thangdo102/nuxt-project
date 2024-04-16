<template lang="html">
  <v-sheet class="mx-auto" width="500">
    <div>
      <v-form fast-fail @submit.prevent="submitLogin">
        <v-text-field v-model="email" label="Email"></v-text-field>

        <v-text-field v-model="password" label="Password"></v-text-field>

        <v-btn class="mt-2" type="submit" block>Submit</v-btn>
      </v-form>
    </div>
    <p>Or</p>
    <div id="firebaseui-auth-container">
      <atoms-the-button
        @click="onClickLoginGoogle"
        text="Login with Google"
      ></atoms-the-button>
    </div>
  </v-sheet>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { signInWithEmail, loginWithGoole } from "~/plugins/src/auth";

const email = ref("");
const password = ref("");

const submitLogin = async () => {
  if (email && password) {
    const res = await signInWithEmail(email, password);
    console.log(res);
  }
};

const onClickLoginGoogle = async () => {
  try {
    await loginWithGoole();
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss" scoped>
.mx-auto {
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  p {
    align-self: center;
  }
}
</style>
../plugins/src/auth
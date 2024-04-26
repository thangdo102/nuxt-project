<template>
  <header class="header-root">
    <h2 class="header-title" @click="router.push('/')">Thuê xe</h2>
    <div v-if="userState" class="action">
      <p style="align-self: center">
        {{ userState.displayName }}
      </p>
      <AtomsTheButton text="Xe của tôi" @click="router.push('/my-car')" />
      <AtomsTheButton text="Thêm xe cho thuê" @click="router.push('/add-new-car')" />
      <AtomsTheButton text="Logout" @click="logout" />
    </div>
    <div v-else class="action">
      <AtomsTheButton text="Sign In" @click="() => router.push('/login')" />
      <AtomsTheButton text="Sign Up" @click="() => router.push('/signup')" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { logout } from "~/plugins/src/auth";
const router = useRouter();
const userState = useLoginUser().state;
</script>

<style lang="scss" scoped>
.header-root {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid $dark20;
  .action {
    display: flex;
    gap: 15px;
  }

  .header-title{
    font-size: 25px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    cursor: pointer;
  }
}
</style>

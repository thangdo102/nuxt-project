<template>
  <v-layout>
    <v-main>
      <TheHeader />
        <slot />
      </v-main>
  </v-layout>
</template>

<script setup>
import TheHeader from '~/components/molecules/TheHeader.vue';
</script>

<style>
.slot{

}
</style>

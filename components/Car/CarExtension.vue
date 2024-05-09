<template>
  <car-info-container text="Các tiện nghi khác">
    <p class="car-intro" v-for="extension in car.convenient">- {{ extension }}</p>
  </car-info-container>
</template>

<script setup lang="ts">
import type { Car } from "~/types/types";

const props = defineProps<{
  car: Car;
}>();

</script>

<style scoped>
.car-intro {
  color: gray;
}
</style>

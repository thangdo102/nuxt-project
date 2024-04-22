<template>
  <car-info-container text="Mô tả">
    <p class="car-intro">{{ carIntro }}</p>
  </car-info-container>
</template>

<script setup lang="ts">
const props = defineProps<{
  carIntro: string;
}>();
</script>

<style scoped>
.car-intro {
  color: gray;
}
</style>

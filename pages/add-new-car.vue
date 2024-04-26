<template>
  <div class="page-home-wrapper">
    <car-form :car="car" @save-car="saveCar" />
  </div>
</template>

<script setup lang="ts">
const { car, saveCar, mounted } = await useCar();

onMounted(() => {
  mounted();
});

</script>

<style scoped>

</style>

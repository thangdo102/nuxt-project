<template>
  <div class="car-info-basic">
    <p class="car-name">{{ car.name }} {{ car.manufactureYear }} {{ car.color }}</p>
    <p class="car-location">{{car.city}}</p>
    <div>
      <CarTagItem :text="car.type" color="yellow" />
      <CarTagItem :text="car.receiveType" color="blue" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Car } from "~/types/types";

const props = defineProps<{
  car: Car;
}>();
</script>

<style scoped lang="scss">
.car-info-basic {
  display: flex;
  flex-direction: column;
  gap: 5px;
  div {
    display: flex;
    gap: 10px;
  }
}

.car-name {
  font-size: 25px;
  font-weight: 600;
}

.car-location {
  font-size: 15px;
  color: gray;
}
</style>

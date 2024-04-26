<template>
  <div class="page-home-wrapper">
    <car-form :car="car" @save-car="saveCar" />
  </div>
</template>

<script setup lang="ts">
import { getCarDetail } from "~/plugins/src/car";

const { car, saveCar } = await useCar();
const route = useRoute();
const carId = route.params.carId as string;
const carDetail = await getCarDetail(carId);

onMounted(() => {
  if (carDetail) {
    car.name = carDetail.name;
    car.color = carDetail.color;
    car.manufactureYear = carDetail.manufactureYear;
    car.pricePerDay = carDetail.pricePerDay;
    car.city = carDetail.city;
    car.owner = carDetail.owner;
    car.type = carDetail.type;
    car.receiveType = carDetail.receiveType;
    car.images = carDetail.images;
    car.seat = carDetail.seat;
    car.fuel = carDetail.fuel;
    car.wastedFuel = carDetail.wastedFuel;
    car.introduction = carDetail.introduction;
    car.convenient = carDetail.convenient;
  }
});
</script>

<style scoped></style>

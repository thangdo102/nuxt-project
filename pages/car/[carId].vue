<template>
  <div class="page-home-wrapper" style="width: 90%">
    <CarImages style="margin-bottom: 32px" />

    <div class="car-info">
      <div class="car-info-left">
        <CarBasicInfo :car="car" />

        <AtomsTheLiner />

        <CarCharacteristic :car="car" />

        <AtomsTheLiner />

        <CarIntroduction :carIntro="car.introduction"/>
      </div>

      <div class="car-info-right">10000K</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getCarDetail } from '~/plugins/src/car';

const router = useRouter();
const route = useRoute();
const carId = route.params.carId
const car = ref(null)

await getCarDetail(carId).then((res) =>{
  if(!res) router.push("/") ;
  car.value = res
})


</script>

<style lang="scss" scoped>
.car-info {
  display: flex;
  gap: 30px;
}

.car-info-left {
  width: 70%;
}

.car-info-right {
  background-color: bisque;
  width: 40%;
}
</style>

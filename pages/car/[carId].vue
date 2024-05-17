<template>
  <div class="page-home-wrapper" style="width: 90%">
    <CarImages :car="car" style="margin-bottom: 32px" />

    <div class="car-info">
      <div class="car-info-left">
        <CarBasicInfo :car="car" />

        <AtomsTheLiner />

        <CarCharacteristic :car="car" />

        <AtomsTheLiner />

        <CarIntroduction :carIntro="car.introduction"/>

        <AtomsTheLiner />

        <CarExtension :car="car"/>

      </div>

      <div class="car-info-right">
          <CarPrice :carId="carId" :car="car"/>
      </div>
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
  width: 40%;
  height: 100%;
  padding: 30px 25px;
  border: 1px solid #f4f4f4;
  background-color: #f7fbff;
  border-radius: 10px;
}
</style>

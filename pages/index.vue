<script setup lang="ts">
import { getCars } from "~/plugins/src/car";

const listCars = ref(null);
const router = useRouter();

const fetchListCars = async () => {
  const res = await getCars();
  console.log(res);
  listCars.value = res;
};

onMounted(() => fetchListCars());

const onClickCarDetail = (carId) => {
  router.push(`/car/${carId}`);
};

</script>

<template>
  <div class="page-home-wrapper">
    <div class="list-car" v-if="listCars">
      <CarCard
        v-for="car in listCars"
        :car="car"
        @click="onClickCarDetail(car.id)"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.list-car {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 30px;
}
</style>

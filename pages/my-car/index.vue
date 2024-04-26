<script setup lang="ts">
import TheButton from "~/components/atoms/TheButton.vue";
import { getMyCarList } from "~/plugins/src/car";

const listCars = ref<any>(null);
const router = useRouter();
const userState = useLoginUser().state;
const confirmDeleteCar = ref(false);

const { removeCar } = await useCar();

const subcribles = async () => {
  if (!userState) return;
  const res = await getMyCarList(userState.value?.uid);
  listCars.value = res;
};

onMounted(() => {
  subcribles();
});

watch(
  () => userState.value,
  () => subcribles()
);

const handleEditBtn = (carId: string) => {
  router.push(`my-car/${carId}/edit`);
};

const onClickCarDetail = (carId: string) => {
  router.push(`/car/${carId}`);
};

const handleConfirmDeleteCar = async (carId) => {
  if (!userState) return;
  await removeCar(carId);
  confirmDeleteCar.value = false;
  await subcribles();
};
</script>

<template>
  <div class="page-home-wrapper">
    <h2 style="margin-bottom: 50px; font-size: 25px; font-weight: 700">
      My Car List
    </h2>
    <div class="list-car" v-if="listCars">
      <div v-for="car in listCars">
        <CarCard :car="car" @click="onClickCarDetail(car.id)" />
        <div class="buttons">
          <TheButton text="Sửa" @click="handleEditBtn(car.id)" />
          <TheButton text="Xoá" @click="confirmDeleteCar = true" />
        </div>
        <AtomsTheModal
          :is-open="confirmDeleteCar"
          @update:is-open="confirmDeleteCar = !confirmDeleteCar"
          @on-ok="handleConfirmDeleteCar(car.id)"
        />
      </div>
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

.buttons {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
  div {
    width: 50%;
  }
}
</style>

<script setup lang="ts">
import { Timestamp } from "firebase/firestore";
import { addNewCar } from "~/plugins/src/car";

const fetchData = async () => {
  const { data } = await useFetch("/api/test");
  return data;
};

const addCar = async () => {
  const userState = useLoginUser().state;
  console.log(userState);

  if (userState.value) {
    const res = await addNewCar({
      id: "z",
      name: "BMW",
      color: "Black",
      manufactureYear: Timestamp.now(),
      price: 0,
      city: "HN",
      owner: {
        id: userState.value.uid,
        name: userState.value.displayName,
        age: 35,
        address: "SocSon-HN",
      },
    });
    console.log("SUCCESS", res);
  } else {
    console.log("You need to login first!");
  }
};
</script>

<template>
  <div class="page-home-wrapper">
    <div class="list-car">
      <CarCard />
      <CarCard />
      <CarCard />
      <CarCard />
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


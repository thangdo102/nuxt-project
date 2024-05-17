<template>
  <div class="car-images">
    <div class="car-img-1 car-img">
      <img
        :src="
          car.carImgId ||
          'https://cdn-img.thethao247.vn/upload/namvu/2020/04/02/danh-gia-xe-mercedes-amg-g63-5.jpg'
        "
      />
    </div>

    <div class="car-img-2 car-img">
      <img
        :src="
          car.carImgId ||
          'https://cdn-img.thethao247.vn/upload/namvu/2020/04/02/danh-gia-xe-mercedes-amg-g63-5.jpg'
        "
      />
    </div>

    <div class="car-img-2 car-img">
      <img
        :src="
          car.carImgId ||
          'https://cdn-img.thethao247.vn/upload/namvu/2020/04/02/danh-gia-xe-mercedes-amg-g63-5.jpg'
        "
      />
    </div>

    <div class="car-img-2 car-img">
      <img
        :src="
          car.carImgId ||
          'https://cdn-img.thethao247.vn/upload/namvu/2020/04/02/danh-gia-xe-mercedes-amg-g63-5.jpg'
        "
      />
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
.car-images {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.car-img-1 {
  grid-row: span 3;
  grid-column: span 2;
}

.car-img-2 {
  grid-row: span 1;
  grid-column: span 1;
}

.car-img{
  object-fit: cover;
}

</style>

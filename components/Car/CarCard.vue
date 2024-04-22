<template>
  <a>
    <div class="car-card">
      <div class="car-image">
        <img
          src="https://images2.thanhnien.vn/zoom/700_438/Uploaded/chicuong/2021_12_13/porsche-911-turbo-5-7236.jpeg"
        />
      </div>

      <div class="car-delivery">
        <CarTagItem :text="car.type" />
        <CarTagItem :text="car.receiveType" />
      </div>

      <p class="car-name">{{ car.name }} {{ car.manufactureYear }}</p>

      <div class="car-position">
        <v-icon :icon="mdiMapMarker" />
        <p class="address">Quận Nam Từ Liêm, Hà Nội</p>
      </div>

      <AtomsTheLiner />

      <div class="car-card-bottom">
        <p>review</p>
        <p class="price">
          <span>{{ car.pricePerDay }}K</span> / ngày
        </p>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import { mdiMapMarker } from "@mdi/js";
import type { Car } from "~/types/types";

const props = defineProps<{
  car: Car;
}>();
</script>

<style scoped lang="scss">
.car-card {
  width: 300px;
  border: 1px solid #d5d5d5;
  padding: 16px;
  border-radius: 10px;
  cursor: pointer;
}

.car-image {
  img {
    border-radius: 10px;
    object-fit: cover;
  }
}

.car-delivery {
  display: flex;
  gap: 10px;
  margin: 20px 0;
}

.car-name {
  color: #000;
  font-size: 1rem;
  font-weight: 800;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.address {
  color: gray;
  font-size: small;
}
.car-position {
  display: flex;
  align-items: center;
  gap: 5px;
  i {
    font-size: 15px;
  }
}

.car-card-bottom {
  display: flex;
  justify-content: space-between;
  .price {
    color: gray;
    font-size: 13px;
    span {
      color: #5fcf86;
      font-weight: 800;
      font-size: 20px;
    }
  }
}
</style>

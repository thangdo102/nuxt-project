<template>
  <car-info-container text="Đặc điểm">
    <div class="characteris-list">
      <div class="characterisItem">
        <v-icon>{{ mdiSeat }}</v-icon>
        <div>
          <p class="item-title">Số ghế</p>
          <p class="item-content">{{ car.seat }}</p>
        </div>
      </div>
      <div class="characterisItem">
        <v-icon>{{ mdiCarShiftPattern }}</v-icon>
        <div>
          <p class="item-title">Truyền động</p>
          <p class="item-content">{{ car.type }}</p>
        </div>
      </div>
      <div class="characterisItem">
        <v-icon>{{ mdiGasStation }}</v-icon>
        <div>
          <p class="item-title">Nhiên liệu</p>
          <p class="item-content">{{ car.fuel }}</p>
        </div>
      </div>
      <div class="characterisItem">
        <v-icon>{{ mdiEngine }}</v-icon>
        <div>
          <p class="item-title">NL tiêu hao</p>
          <p class="item-content">{{ car.wastedFuel }}L/Km</p>
        </div>
      </div>
    </div>
  </car-info-container>
</template>

<script setup lang="ts">
import { mdiCarShiftPattern, mdiEngine, mdiGasStation, mdiSeat } from "@mdi/js";
import type { Car } from "~/types/types";

const props = defineProps<{
  car: Car;
}>();
</script>

<style scoped lang="scss">
.title {
  font-size: 25px;
  font-weight: 600;
}

.characteris-list {
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
  margin-bottom: 25px;
}

.characterisItem {
  display: flex;
  align-items: center;
  gap: 10px;

  i {
    font-size: 32px;
    color: green;
  }

  .item-title {
    color: gray;
    font-size: 15px;
  }

  .item-content {
    font-size: 20px;
  }
}
</style>

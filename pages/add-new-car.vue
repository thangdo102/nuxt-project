<template>
  <div class="page-home-wrapper">
    <v-form @submit="(e) => e.preventDefault()">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="car.name"
              label="Tên xe"
              required
              :rules="[() => !!car.name || 'This field is required']"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-select
              v-model="car.type"
              label="Loại"
              :items="['Số tự động', 'Số sàn']"
              :rules="[() => !!car.type || 'This field is required']"
            ></v-select>
          </v-col>

          <v-col cols="12" md="4">
            <v-select
              v-model="car.receiveType"
              label="Cách nhận xe"
              :items="['Giao tận nơi', 'Tự lấy']"
              :rules="[() => !!car.receiveType || 'This field is required']"
            ></v-select>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="car.pricePerDay"
              :counter="10"
              label="Giá trên ngày"
              hide-details
              required
              :rules="[() => !!car.pricePerDay || 'This field is required']"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="car.color"
              :rules="[() => !!car.color || 'This field is required']"
              :counter="10"
              label="Màu xe"
              hide-details
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="car.manufactureYear"
              :rules="[() => !!car.manufactureYear || 'This field is required']"
              :counter="10"
              label="Năm sản xuất"
              hide-details
              required
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="car.seat"
              :rules="[() => !!car.seat || 'This field is required']"
              label="Số ghế"
              hide-details
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-select
              v-model="car.fuel"
              label="Nhiên liệu"
              :items="['Điện', 'Xăng']"
              :rules="[() => !!car.fuel || 'This field is required']"
            ></v-select>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="car.wastedFuel"
              :rules="[() => !!car.wastedFuel || 'This field is required']"
              label="Nhiên liệu tiêu hao"
              hide-details
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-textarea
              v-model="car.introduction"
              label="Giới thiệu"
              :rules="[() => !!car.introduction || 'This field is required']"
            >
            </v-textarea>

            <v-combobox
              v-model="car.convenient"
              :rules="[() => !!car.convenient || 'This field is required']"
              label="Tiện ích"
              multiple
              chips
              clearable
            >
            </v-combobox>
          </v-col>
        </v-row>
      </v-container>
      <atoms-the-button
        text="Thêm xe"
        style="width: fit-content"
        @click="saveCar"
      ></atoms-the-button>
    </v-form>
  </div>
</template>

<script setup lang="ts">
const { car, saveCar, mounted } = useCar();

onMounted(() => {
  mounted();
});
</script>

<style scoped></style>

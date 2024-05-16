<template>
  <h2 class="title">{{ route.params.carId ? "Sửa" : "Thêm xe" }}</h2>
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

          <div
            @dragover.prevent
            @drop.prevent="onDrop"
            @click="documentInput.click()"
          >
            <div
              style="
                border: 1px solid black;
                width: fit-content;
                border-radius: 20px;
                padding: 20px;
              "
            >
              Choose file
              <!-- <span
                class="p-bot-thumbnail__uploader-guide__text"
              >
                Enter
              </span> -->
              <input
                ref="documentInput"
                type="file"
                accept="image/*"
                multiple
                hidden
                @input="onFileSelected"
              />

              <img v-if="carImgUrl" :src="carImgUrl" />
              <!-- <v-progress-circular
                class="uploading-animation"
                indeterminate
                :size="72"
                :width="12"
                color="white"
              /> -->
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <atoms-the-button
      :text="route.params.carId ? 'Sửa' : 'Thêm xe'"
      style="width: fit-content"
      @click="handleSaveCar"
    ></atoms-the-button>
  </v-form>
</template>

<script setup lang="ts">
import { uploadCarImages } from "~/plugins/src/firebase";
import { uuid } from "~/untils/string";

const route = useRoute();
const snackbar = useSnackbar();

const { clearDoc, getDoc, onDragDrop, setFiles } = useUploader();

const uploading = ref(false);

const props = defineProps<{ car: any }>();
const documentInput = ref();

const emits = defineEmits(["saveCar"]);

const onDrop = () => {};

const carImgUrl = computed(() => {
  if (getDoc()) {
    const url = URL.createObjectURL(getDoc());
    return url;
  }
});

const onInput = async (event: Event) => {
  const target = event.target as HTMLInputElement;
  return setFiles(target.files);
};

const onFileSelected = async (e) => {
  await onInput(e);
};

const startupload = async () => {
  const imageFile = getDoc();
  const carImgId = uuid();
  return await uploadCarImages(imageFile, carImgId);
};

const handleSaveCar = async () => {
  const carImgFirebaseUrl = await startupload();
  console.log(carImgFirebaseUrl);
  if (carImgFirebaseUrl) {
    emits("saveCar", carImgFirebaseUrl);
  }
};
</script>

<style scoped>
.title {
  font-size: 25px;
  font-weight: 700;
}
</style>

<template>
  <div>
    <h3 class="price">{{ car.pricePerDay }}k /ngày</h3>

    <div class="date-picker">
      <div class="date-from" @click="isOpenDateFromPickerModal = true">
        <p>Nhận xe</p>
        <p>{{ convertDate(dateFrom) }}</p>
      </div>

      <p class="liner"></p>

      <div class="date-to" @click="isOpenDateToPickerModal = true">
        <p>Trả xe</p>

        <p>{{ convertDate(dateTo) }}</p>
      </div>
    </div>

    <AtomsTheLiner />

    <div class="detail-price">
      <p class="text">Đơn giá thuê</p>
      <p class="unit-price">{{ car.pricePerDay }} 000đ/ ngày</p>
    </div>

    <AtomsTheLiner />

    <div class="detail-price">
      <p class="text">Tổng cộng</p>
      <p class="unit-price">
        {{ car.pricePerDay }} 000 x {{ dayDiff.toFixed(2) }} ngày
      </p>
    </div>

    <AtomsTheLiner />

    <div class="detail-price">
      <p class="text">Thành tiền</p>
      <p class="unit-price">{{ totalMoney }}000 đ</p>
    </div>

    <a class="btn-submit" @click="onRentCar">Chọn thuê</a>
  </div>
  <AtomsDatePickerModal
    :date="dateFrom"
    :is-open="isOpenDateFromPickerModal"
    @update:is-open="isOpenDateFromPickerModal = !isOpenDateFromPickerModal"
    @update:date="(val) => (dateFrom = val)"
  />
  <AtomsDatePickerModal
    :date="dateTo"
    :is-open="isOpenDateToPickerModal"
    @update:is-open="isOpenDateToPickerModal = !isOpenDateToPickerModal"
    @update:date="(val) => (dateTo = val)"
  />
</template>

<script setup lang="ts">
import { rentCar } from "~/plugins/src/car";
import type { Car, RentalCar } from "~/types/types";

const userState = useLoginUser().state;
const snackbar = useSnackbar();

const isOpenDateFromPickerModal = ref(false);
const isOpenDateToPickerModal = ref(false);

const dateFrom = ref(new Date(Date.now()));
const dateTo = ref(new Date(Date.now()));

const computeDayDiff = (dateFrom, dateTo) => {
  const dateFromConvert = new Date(dateFrom);
  const dateToConvert = new Date(dateTo);

  return dateToConvert.getDay() - dateFromConvert.getDay();
};

const dayDiff = computed((): number =>
  computeDayDiff(dateFrom.value, dateTo.value)
);
const totalMoney = computed(
  (): number => props.car.pricePerDay * dayDiff.value
);

const props = defineProps<{
  car: Car;
  carId: string;
}>();

const onRentCar = async () => {
  const isOwner = props.car.owner.id === userState.value.uid;
  if (isOwner) {
    snackbar.add({
      type: "error",
      text: "Bạn không thể thuê xe của chính mình",
    });
    return;
  }

  if (!totalMoney.value || dayDiff.value <= 0) {
    snackbar.add({
      type: "error",
      text: "Ngày không hợp lệ",
    });
    return;
  }

  const rentalCar: RentalCar = {
    carId: props.carId,
    car: props.car,
    renter: {
      id: userState.value.uid,
      name: userState.value.displayName,
      address: "",
    },
    from: dateFrom.value,
    to: dateTo.value,
    totalRentDay: dayDiff.value,
    totalMoney: totalMoney.value,
  };

  console.log(rentalCar);

  try {
    const res = await rentCar(rentalCar);
    snackbar.add({
      type: "success",
      text: "Succesfully!",
    });
  } catch (error) {
    snackbar.add({
      type: "error",
      text: "Error",
    });
  }
};

const convertDate = (date: Date) => {
  const givenDate = new Date(date);

  let day: any = givenDate.getDate();
  let month: any = givenDate.getMonth() + 1; // Adding 1 since getMonth() returns zero-based month index
  let year = givenDate.getFullYear();

  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;

  return day + "/" + month + "/" + year;
};
</script>

<style scoped lang="scss">
.price {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 20px;
}

.date-picker {
  display: flex;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  background: #fff;
  margin-bottom: 12px;

  div {
    width: 49%;
    padding: 12px 8px;
    display: flex;
    gap: 10px;
    flex-direction: column;
    cursor: pointer;
  }
}

.detail-price {
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  .text {
    color: gray;
  }

  .unit-price {
    font-weight: 500;
  }
}

.liner {
  border-right: 1px solid #e0e0e0;
}

.btn-submit {
  width: 100%;
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  grid-gap: 8px;
  gap: 8px;
  background-color: initial;
  vertical-align: middle;
  cursor: pointer;
  white-space: nowrap;
  color: #000;
  font-weight: 700;
  padding: 16px 24px;
  border-radius: 8px;
  border: 1px solid #000;
  color: #fff;
  background-color: #5fcf86;
  border-color: #5fcf86;
  margin-top: 20px;
}
</style>

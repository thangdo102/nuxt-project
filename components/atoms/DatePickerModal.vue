<template>
  <div class="dialog">
    <v-dialog
      v-bind:model-value="isOpen"
      @update:model-value="emits('update:isOpen')"
      width="auto"
    >
      <!-- <v-date-picker
        title="Chọn ngày"
        v-bind:model-value="date"
      ></v-date-picker> -->

      <v-date-picker
        v-bind:model-value="date"
        @update:model-value="updateDatePicked"
      ></v-date-picker>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  isOpen: boolean;
  date: Date;
}>();

const updateDatePicked = (date) => {
  emits("update:date", date);
};

const emits = defineEmits(["update:isOpen", "update:date"]);
</script>

<style scoped lang="scss"></style>

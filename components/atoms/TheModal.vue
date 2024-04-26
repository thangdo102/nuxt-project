<template>
  <template>
    <div class="text-center pa-4">
      <v-dialog
        v-model="props.isOpen"
        @update:model-value="emits('update:isOpen')"
        width="auto"
      >
        <v-card
          max-width="400"
          prepend-icon="mdi-update"
          text="Bạn có chắc chắn muốn xoá xe này không?"
          title="Xoá xe?"
        >
          <template v-slot:actions>
            <v-btn
              class="ms-auto"
              text="Cancel"
              @click="emits('update:isOpen')"
            ></v-btn>
            <v-btn class="ms-auto" text="Ok" @click="emits('onOk')"></v-btn>
          </template>
        </v-card>
      </v-dialog>
    </div>
  </template>
</template>

<script setup lang="ts">
const props = defineProps<{
  isOpen: boolean;
}>();

const emits = defineEmits(["update:isOpen", "onOk"]);
</script>

<style scoped></style>

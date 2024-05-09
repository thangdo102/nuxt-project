<template>
  <div class="tag-item" :class="color">
    {{ text }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  text: string;
  color: "yellow" | "blue";
}>();
</script>

<style scoped>
.tag-item {
  padding: 4px 8px;
  border-radius: 22px;
  width: fit-content;
  font-size: 12px;
}

.yellow {
  background-color: antiquewhite;
}

.blue {
  background-color: #eef7ff;
}
</style>

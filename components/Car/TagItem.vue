<template>
  <div class="tag-item">
    {{ text }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  text: string;
}>();
</script>

<style scoped>
.tag-item {
  padding: 4px 8px;
  background-color: antiquewhite;
  border-radius: 22px;
  width: fit-content;
  font-size: 12px;
}
</style>

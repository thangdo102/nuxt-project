<template>
  <p class="title">{{ text }}</p>
  <slot />
</template>

<script setup lang="ts">
  const props = defineProps<{
    text: string
  }>()

</script>

<style scoped>
.title {
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 20px;
}
</style>

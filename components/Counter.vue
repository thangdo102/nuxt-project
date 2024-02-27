<script setup lang="ts">
const { counter } = useCount();
</script>

<template>
  <div>
    Counter in Counter: {{ counter }}
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
  </div>
  <CountComponent />
</template>

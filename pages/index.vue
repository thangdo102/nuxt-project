<script setup lang="ts">
//Composables
// const { sayHello } = useUtils();
// sayHello();

//Plugin
const { $hello } = useNuxtApp();
$hello("Thang Pan");
</script>

<template>
  <div class="MainPage">
    <p>Main Page</p>
    <IconsHome class="w-[50px] h-[50px]" />
    <img src="@/assets/image.png" alt="" />
  </div>
</template>

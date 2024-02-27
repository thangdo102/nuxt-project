<script setup lang="ts">
//Composables
// const { sayHello } = useUtils();
// sayHello();

//Plugin
const { $hello } = useNuxtApp();
$hello("Thang Pan");

//Nếu auth.ts trong folder middleware không có đuôi .global, thì phải khai báo PageMeta nếu muốn sử dụng,
//còn nếu muốn sử dụng trên tất cả các route mà k cần khai báo trong PageMeta thì sửa file trong middleware thành auth.global.ts
// definePageMeta({
//   middleware: "auth",
// });
</script>

<template>
  <div class="MainPage">
    <p>Main Page</p>
    <IconsHome class="w-[50px] h-[50px]" />
    <img src="@/assets/image.png" alt="" />
  </div>
</template>

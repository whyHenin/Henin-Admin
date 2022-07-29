<template>
  <a-carousel
    :style="{
      width: 'inherit',
      height: 'inherit',
    }"
    :auto-play="{ interval: 5000 }"
    animation-name="fade"
    show-arrow="never"
  >
    <a-carousel-item v-for="(image, i) in images" :key="i">
      <img
        :src="image"
        :style="{
          height: '100%',
          objectFit: 'cover',
        }"
      />
    </a-carousel-item>
  </a-carousel>
</template>

<script lang="ts" setup>
const images = [
  "https://images.unsplash.com/photo-1659075859374-3486c34b7c1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  "https://images.unsplash.com/photo-1631807657791-e092fa649795?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80",
  "https://images.unsplash.com/photo-1658655627474-747083335ba9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
]
</script>

<style scoped></style>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import headerComp from "./components/headerComp.vue";
</script>

<template>
  <div class="h-full w-full flex flex-col">
    <headerComp />
    <RouterView class="flex-1" />
  </div>
</template>

<style scoped></style>

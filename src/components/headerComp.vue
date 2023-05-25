<template>
  <header
    class="bg-primary-color h-[70px] flex justify-between px-10 text-white items-center shrink-0"
  >
    <p class="text-[26px] uppercase">Vue</p>
    <div class="text-[18px] flex gap-6">
      <RouterLink :to="nav.path" v-for="nav in navRoutes" class="px-3 py-2">
        {{ nav.title }}
      </RouterLink>
    </div>
  </header>
</template>
<script>
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      navRoutes: [
        {
          path: "/",
          title: "Home",
          slug: "home",
        },
        {
          path: "/chat",
          title: "Chat",
          slug: "chat",
        },
      ],
    };
  },
};
</script>
<style></style>

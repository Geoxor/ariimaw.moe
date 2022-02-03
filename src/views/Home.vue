<template>
  <div class="flex flex-col items-center gap-4 justify-center w-full h-full">
    <img
      src="/ariimaw_black.svg"
      class="text-white w-48 animate-spin animate-duration-6000"
      alt="Ariimaw"
    />

    <base-footer />
  </div>
</template>

<script setup lang="ts">
import BaseFooter from '../components/BaseFooter.vue';
</script>
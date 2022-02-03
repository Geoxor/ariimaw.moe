<template>
  <li>
    <a
      :href="link"
      target="_blank"
      class="p-2 hover:text-[#833AB4] flex text-white-400 transition duration-100 items-center justify-center"
    >
      <slot />
    </a>
  </li>
</template>

<script setup lang="ts">
defineProps<{ link: string }>();
</script>
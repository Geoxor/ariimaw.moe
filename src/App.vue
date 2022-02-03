<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col w-full">
    <router-view />
  </div>
</template>


<style lang="postcss" >
input,
textarea,
button,
select,
a {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

html,
body,
#app {
  @apply flex bg-main-400 h-100vh w-100vw p-0 m-0 text-light-50;
}
</style>
<template>
  <div class="flex flex-col items-center justify-center w-full h-full">
    <div class="fixed w-full h-full filter blur-32">
      <video
        src="https://cdn.discordapp.com/attachments/845328432715923487/930241830728130660/bg.mp4"
        disableremoteplayback
        loop
        autoplay
        muted
        class="object-cover transform h-full w-full"
      />
    </div>
    <div class="relative max-w-72 md:max-w-128 flex flex-col">
      <div
        class="mt-8 transform flex items-center flex-col duration-500 ease transition-all"
        :class="hasClicked && (isShowingBio ? '-translate-y-32' : '-translate-y-0')"
      >
        <img src="logo-filled.svg" />
        <button
          class="text-white-400 p-4 flex items-center justify-center cursor-pointer transform"
          :class="hasClicked && (isShowingBio ? 'rotate-180' : 'rotate-0')"
          @click="hasClicked = !hasClicked; isShowingBio = !isShowingBio;"
        >
          <i-fluency-expand-arrow />
        </button>
      </div>

      <p
        :class="hasClicked && (isShowingBio ? 'fadein' : 'fadeout')"
        class="absolute top-0 md:top-16 transform-gpu opacity-0 pointer-events-none"
      >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onKeyStroke } from '@vueuse/core';
import { ref } from 'vue';
const isShowingBio = ref(false);
const hasClicked = ref(false);
onKeyStroke("ArrowDown", () => {
  hasClicked.value = true;
  isShowingBio.value = true;
})
onKeyStroke("ArrowUp", () => {
  isShowingBio.value = false;
})
</script>

<style scoped lang="postcss">
@keyframes fadein {
  from {
    transform: translateY(6rem);
    @apply opacity-0;
  }
  to {
    transform: translateY(0rem);
    @apply opacity-100;
  }
}

@keyframes fadeout {
  from {
    transform: translateY(0rem);
    @apply opacity-100;
  }
  to {
    transform: translateY(6rem);
    @apply opacity-0;
  }
}

.fadein {
  animation: fadein 500ms ease;
  @apply opacity-100;
}
.fadeout {
  animation: fadeout 500ms ease;
}
</style>
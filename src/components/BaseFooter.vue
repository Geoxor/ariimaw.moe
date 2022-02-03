<template>
  <footer class="flex h-16 w-full bg-opacity-50 filter backdrop-blur-3xl z-40">
    <ul class="flex justify-center items-center w-full text-2xl">
      <social-button link="https://www.instagram.com/ariimaw/">
        <i-fluency-instagram />
      </social-button>
      <social-button link="https://twitter.com/ariimaw">
        <i-fluency-twitter />
      </social-button>
      <social-button link="https://soundcloud.com/ariimaw">
        <i-fluency-cloud />
      </social-button>
      <social-button
        link="https://open.spotify.com/user/5coasodc427lrn0ybes53hftx?si=f2087adcb01941ee"
      >
        <i-fluency-spotify />
      </social-button>
      <social-button link="https://www.youtube.com/channel/UCwAxzQxm7gZ2IAoAxXhyGqA">
        <i-fluency-youtube />
      </social-button>
      <social-button link="https://www.deviantart.com/ariimaww">
        <i-fluency-deviantart />
      </social-button>
      <social-button link="https://www.tumblr.com/blog/view/ariimaw">
        <i-fluency-tumblr />
      </social-button>
    </ul>
  </footer>
</template>

<script setup lang="ts">
import SocialButton from './SocialButton.vue';
</script>

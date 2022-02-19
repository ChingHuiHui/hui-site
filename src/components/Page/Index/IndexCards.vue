<template>
  <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
    <div class="intro-card" v-for="{ title } in intros" :key="title">
      <video src="@/assets/video.mp4" autoplay loop muted></video>
      <div class="backdrop" />
      <div
        class="absolute inset-0 flex items-center justify-center sm:items-end sm:justify-start p-4"
      >
        <h3 class="h2">{{ title }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const intros = [
    { title: 'ABOUT', to: '/' },
    { title: 'EXPERIENCE', to: '/' },
    { title: 'WORKS', to: '/' },
    { title: 'RESUME', to: '/' },
  ]
</script>

<style scoped>
  .intro-card {
    @apply relative aspect-video text-white cursor-pointer overflow-hidden sm:rounded-2xl;
    @apply transition-colors duration-300;

    video {
      @apply transition-transform duration-300 absolute inset-0;
    }

    &:hover video {
      @apply scale-125;
    }
  }

  .backdrop {
    @apply absolute inset-0 bg-black bg-opacity-40;
  }
</style>

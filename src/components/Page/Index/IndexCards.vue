<template>
  <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
    <router-link
      :to="to"
      class="intro-card"
      v-for="({ title, to, video }, i) in intros"
      :key="title"
    >
      <video :src="video" autoplay loop muted controls="false"></video>
      <div class="backdrop" />
      <div class="absolute inset-0 flex items-center justify-center p-4">
        <h3 class="title h1">{{ title.toUpperCase() }}</h3>
      </div>
    </router-link>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useI18n } from 'vue-i18n'

  import aboutVideo from '@/assets/videos/about.mov'
  import portfolioVideo from '@/assets/videos/portfolio.mov'

  const { t } = useI18n()

  const intros = computed(() => [
    { title: t('about'), to: '/about', video: aboutVideo },
    { title: t('portfolio'), to: '/portfolio', video: portfolioVideo },
  ])
</script>

<style scoped>
  .intro-card {
    @apply relative aspect-video text-white cursor-pointer overflow-hidden sm:rounded-2xl;
    @apply transition-colors duration-300;

    video {
      @apply transition-transform duration-300 absolute inset-0;
    }

    .title {
      @apply transition-all duration-300;
      @apply text-gray-300;
    }

    &:hover {
      video,
      .title {
        @apply scale-125;
      }

      .title {
        @apply text-primary-dark;
      }

      .backdrop {
        @apply bg-opacity-10;
      }
    }
  }

  .backdrop {
    @apply absolute inset-0 bg-black bg-opacity-40;
    @apply transition-colors duration-300;
  }
</style>

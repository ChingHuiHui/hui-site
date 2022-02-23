<template>
  <div>
    <div class="flex flex-col items-center p-4 sm:space-y-4">
      <div class="flex-center space-x-5 mb-6 sm:mb-0">
        <h2 class="h1 text-primary flex flex-wrap">
          <span class="mr-2">CHANG</span>
          <span>CHING HUI</span>
        </h2>
        <mode-button />
      </div>
      <div class="flex-center mb-4">
        <locales />
      </div>
      <h3 class="h2 job-title text-center inline-block">FRONTEND DEVELOPER</h3>
    </div>
    <div class="border border-gray-400 dark:border-white p-10 -translate-y-8">
      <p class="mb-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro impedit,
        error veritatis id quibusdam eum molestiae consectetur, saepe, beatae
        alias fugiat esse aspernatur nesciunt ea quasi repellendus officiis est
        et?
      </p>
      <ul class="flex space-x-4">
        <li v-for="link in links" :key="link.icon">
          <a :href="link.to" target="_blank">
            <hui-icon :icon="link.icon" :pack="link.pack" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
  import HuiIcon from '@/components/HuiIcon.vue'
  import ModeButton from '@/components/ModeButton.vue'
  import Locales from '@/components/Locales.vue'

  const links = [
    { icon: 'envelope', pack: 'fas', to: '/' },
    { icon: 'github', pack: 'fab', to: '/' },
    { icon: 'codepen', pack: 'fab', to: '/' },
  ]
</script>

<style scoped>
  .job-title {
    @apply duration-300 bg-gray-200 dark:bg-gray-800 z-10 px-2 duration-300;

    transition-property: background-color;
  }
</style>

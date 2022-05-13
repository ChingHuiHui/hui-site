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
    <div
      class="border border-gray-400 dark:border-white p-4 pt-10 -translate-y-8 space-y-2 text-center"
    >
      <p>
        目前於 Fontech 擔任前端工程師，有一年的正式工作經驗，主要使用 JavaScript
        / Vue 開發各式各樣需求的網頁。
      </p>
      <p>
        在學期間曾擔任網頁前端課程與行動裝置課程的助教，也有在 3drens 和 Fontech
        擔任前端實習生的經驗。
      </p>
      <ul class="flex space-x-4 justify-center">
        <li class="link" v-for="link in links" :key="link.icon">
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
    { icon: 'envelope', pack: 'fas', to: 'mailto:sunny70624@gmail.com' },
    { icon: 'github', pack: 'fab', to: 'https://github.com/ChingHuiHui' },
    {
      icon: 'codepen',
      pack: 'fab',
      to: 'https://codepen.io/chinghuihui/pens/public',
    },
  ]
</script>

<style scoped>
  .job-title {
    @apply duration-300 bg-gray-200 dark:bg-gray-800 z-10 px-2 duration-300;

    transition-property: background-color;
  }

  ul li.link {
    @apply transition-colors duration-300;

    &:hover {
      @apply text-primary-light;
    }
  }
</style>

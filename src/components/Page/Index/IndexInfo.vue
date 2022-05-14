<template>
  <div>
    <div class="flex flex-col items-center p-4 space-y-4">
      <mode-button />
      <div class="flex-center space-x-5 mb-6 sm:mb-0">
        <div class="flex items-end space-x-2">
          <h2 class="h1 text-primary flex flex-wrap">
            <span>CHING HUI, CHANG</span>
          </h2>
        </div>
      </div>

      <div class="flex-center mb-4">
        <locales />
      </div>
      <h3 class="h2 job-title text-center inline-block">FRONTEND DEVELOPER</h3>
    </div>
    <div
      class="border border-gray-400 dark:border-white p-4 pt-10 -translate-y-8 space-y-2 text-center"
    >
      <i18n-t keypath="first-summary" tag="p">
        <template #company>
          <a
            href="https://fontech.co/"
            target="_blank"
            class="text-[#f9be00] hover:text-[#e3ad00]"
          >
            Fontech
          </a>
        </template>
      </i18n-t>
      <i18n-t keypath="second-summary" tag="p">
        <template #firstIntern>
          <a
            href="http://www.3drens.com/"
            target="_blank"
            class="text-[#03a9f4] hover:text-[#22aae1]"
          >
            3dren
          </a>
        </template>
        <template #secondIntern>
          <a
            href="https://fontech.co/"
            target="_blank"
            class="text-[#f9be00] hover:text-[#e3ad00]"
          >
            Fontech
          </a>
        </template>
      </i18n-t>
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

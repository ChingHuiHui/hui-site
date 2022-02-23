<template>
  <div>
    <button
      @click="locale = availableLocal"
      v-for="availableLocal in availableLocales"
      :key="`locale-${availableLocal}`"
      class="locale"
      :class="{ active: locale === availableLocal }"
    >
      {{ availableLocal }}
    </button>
    <hr />
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'

  const { locale, availableLocales } = useI18n()
</script>

<style scoped>
  .locale {
    @apply text-gray-300 dark:text-gray-500 transitable w-16;

    &:hover,
    &.active {
      @apply text-gray-500 dark:text-gray-300;
    }

    &:nth-child(1).active ~ hr {
      @apply ml-0;
    }

    &:nth-child(2).active ~ hr {
      @apply ml-16;
    }
  }

  hr {
    @apply w-16 h-1 mt-1 bg-purple-300 border-none transitable;
  }
</style>

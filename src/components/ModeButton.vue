<template>
  <button @click="toggle">
    <hui-icon
      class="text-xl"
      :class="modeInfo.color"
      :pack="modeInfo.pack"
      :icon="modeInfo.icon"
    />
  </button>
</template>

<script setup>
  import { computed } from 'vue'

  import useDarkMode from '@/compositions/useDarkMode'
  import HuiIcon from '@/components/HuiIcon.vue'

  const { isDarkMode, toggle } = useDarkMode()

  const modeInfo = computed(() =>
    isDarkMode.value
      ? { icon: 'moon', pack: 'far', color: 'text-white' }
      : { icon: 'sun', pack: 'fas', color: 'text-orange-500' }
  )
</script>

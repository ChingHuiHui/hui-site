<template>
  <button @click="toggle">
    <hui-icon class="text-xl" :pack="isDarkMode ? 'fas' : 'far'" icon="moon" />
  </button>
</template>

<script setup>
  import useDarkMode from '@/compositions/useDarkMode'
  import HuiIcon from '@/components/HuiIcon.vue'

  const { isDarkMode, toggle } = useDarkMode()
</script>

<template>
  <div>
    <main class="min-h-screen border-[16px] border-gray-300 py-10">
      <router-view />
    </main>
    <resume-tag />
  </div>
</template>

<script setup lang="ts">
  import { watchEffect } from 'vue'

  import ResumeTag from '@/components/ResumeTag.vue'
  import useDarkMode from '@/compositions/useDarkMode'

  const { isDarkMode } = useDarkMode()

  watchEffect(() => {
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark')
      return
    }

    document.documentElement.classList.remove('dark')
  })
</script>

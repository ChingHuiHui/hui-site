<template>
  <div class="flex min-h-screen">
    <main class="flex-1 mb-auto">
      <div class="min-h-screen flex-center border-[16px] border-gray-300 pb-10">
        <div class="container">
          <div class="grid items-center lg:grid-cols-12 lg:gap-6">
            <index-info class="mb-4 lg:mb-0 lg:col-start-7 lg:col-span-6" />
            <index-cards class="lg:row-start-1 lg:col-start-1 lg:col-span-6" />
          </div>
        </div>
        <img
          src="@/assets/images/huihui.png"
          alt=""
          class="hidden absolute bottom-0 right-0 w-60 xl:w-80 lg:block z-50"
        />
        <resume-tag />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
  import { watchEffect } from 'vue'

  import IndexInfo from '@/components/Page/Index/IndexInfo.vue'
  import IndexCards from '@/components/Page/Index/IndexCards.vue'
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

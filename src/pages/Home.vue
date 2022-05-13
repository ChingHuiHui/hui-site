<template>
  <div class="container">
    <div class="flex flex-col">
      <index-info />
      <index-cards />
    </div>
  </div>
  <img
    src="@/assets/images/huihui.png"
    alt=""
    class="hidden absolute bottom-0 right-0 w-60 xl:w-80 lg:block z-50"
  />
</template>

<script setup lang="ts">
  import IndexInfo from '@/components/Page/Index/IndexInfo.vue'
  import IndexCards from '@/components/Page/Index/IndexCards.vue'
</script>

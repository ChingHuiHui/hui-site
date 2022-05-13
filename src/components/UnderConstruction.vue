<template>
  <div class="mt-20 flex flex-col items-center space-y-4">
    <p class="h2">{{ content }} ... 🚧</p>
    <router-link to="/" class="hover:border-b"> Back To Home</router-link>
  </div>
</template>

<script setup>
  defineProps(['content'])
</script>

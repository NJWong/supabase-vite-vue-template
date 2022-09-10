<script setup lang="ts">
  import AppHeader from './components/AppHeader.vue'
</script>

<template>
  <div class="h-screen">
    <AppHeader />
    <div class="flex justify-center">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
</style>

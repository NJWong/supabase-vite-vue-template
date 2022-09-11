<script setup lang="ts">
import { onMounted } from 'vue'
import { supabase } from './lib/supabase'
import { userStore } from './stores/user'
import AppHeader from './components/AppHeader.vue'
import { router } from './routes';

const store = userStore()

// Set initial user value
onMounted(() => {
  store.setUser(supabase.auth.user())
})

// Set user on auth state change
supabase.auth.onAuthStateChange((authState) => {
  store.setUser(supabase.auth.user())

  if (authState === 'SIGNED_OUT') {
    router.push('/login')
  }
})

</script>

<template>
  <div class="h-screen">
    <AppHeader />
    <div class="flex justify-center p-8">
      <router-view></router-view>
    </div>
  </div>
</template>

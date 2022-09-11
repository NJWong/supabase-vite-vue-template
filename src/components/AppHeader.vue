<template>
  <header class="px-6 py-4 flex justify-between border-b border-gray-300">
    <router-link to="/">Home</router-link>
    <!-- Authenticated -->
    <nav v-if="user" class="flex gap-4">
      <router-link to="/profile">Profile</router-link>
      <router-link to="/settings">Settings</router-link>
      <button @click="handleLogout">Log out</button>
    </nav>
    <!-- Unauthenticated -->
    <nav v-else class="flex gap-4">
      <router-link to="/login">Log in</router-link>
      <router-link to="/signup">Sign up</router-link>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { userStore } from '../stores/user';
import { supabase } from '../lib/supabase';

const store = userStore()
const { user } = storeToRefs(store)

const handleLogout = async () => {
  supabase.auth.signOut()
}

</script>
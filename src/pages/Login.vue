<template>
  <div class="p-4 border border-gray-300 rounded m-4 flex flex-col gap-6">
    <h1 class="text-center text-2xl font-bold text-gray-800">Log in to Superbase Template</h1>
    <form class="flex flex-col gap-4" @submit.prevent="handleSubmit">
      <div class="flex flex-col gap-2">
        <label class="text-sm text-gray-800 tracking-wide font-semibold">Email</label>
        <input v-model="email" type="text" placeholder="Enter email..." class="border border-gray-300 rounded p-2 focus:outline-rose-600/90" />
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-sm text-gray-800 tracking-wide font-semibold">Password</label>
        <input v-model="password" type="password" placeholder="Enter password..." class="border border-gray-300 rounded p-2 focus:outline-rose-600/90" />
      </div>
      <button :disabled="loading" class="rounded bg-rose-600 py-2 text-white font-semibold hover:bg-rose-600/90 ">Log in</button>
    </form>
    <button @click="signOut">Sign out</button>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { supabase } from '../lib/supabase'

  const loading = ref(false)
  const email = ref('')
  const password = ref('')

  const handleSubmit = async () => {
    try {
      loading.value = true
      const { user, error } = await supabase.auth.signIn({ email: email.value, password: password.value})
      if (error) throw error
      console.log('Logged in')
    } catch (error) {
      console.log(error)
    } finally {
      loading.value = false
    }
  }

  const signOut = async () => {
    await supabase.auth.signOut()
  }

  onMounted(() => {
    console.log('onMounted')
  })
</script>
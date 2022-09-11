<template>
  <div class="w-96 border rounded p-4 flex flex-col gap-6">
    <h1 class="text-2xl text-center">Sign up for APP_NAME</h1>
    <form class="flex flex-col gap-4" @submit.prevent="handleSubmit">
      <div v-if="showError" class="border rounded border-red-300 bg-red-200 px-3 py-2">
        <p class="text-sm text-red-500 font-semibold">{{ errorMsg }}</p>
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-sm text-gray-600" for="email">Email</label>
        <input v-model="email" id="email" type="text" class="border rounded px-4 py-2" />
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-sm text-gray-600" for="password">Password</label>
        <input v-model="password" id="password" type="password" class="border rounded px-4 py-2" />
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-sm text-gray-600" for="password-confirm">Confirm password</label>
        <input v-model="passwordConfirm" id="password-confirm" type="password" class="border rounded px-4 py-2" />
      </div>
      <button :disabled="loading" class="rounded bg-rose-600 py-2 text-white text-sm disabled:bg-rose-600/70 disabled:cursor-not-allowed">Sign up</button>
    </form>
    <p class="text-center text-sm text-gray-600">Already have an account? <router-link class="text-rose-600 underline" to="login">Log in here</router-link></p>
  </div>
</template>

<script setup lang="ts">
import { ApiError } from '@supabase/gotrue-js';
import { ref } from 'vue'
import { supabase } from '../lib/supabase';
import { router } from '../routes';

const email = ref('')
const password = ref('')
const passwordConfirm = ref('')
const loading = ref(false)
const showError = ref(false)
const errorMsg = ref('')

const handleSubmit = async () => {
  showError.value = false

  if (password !== passwordConfirm) {
    errorMsg.value = 'Passwords do not match'
    showError.value = true
  }

  try {
    loading.value = true
    const { user, session, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    })

    // Handle error
    if (error) throw(error)

    // Redirect to profile
    router.push('/profile')
  } catch (e) {
    const error = e as ApiError
    errorMsg.value = error.message
    showError.value = true
  } finally {
    loading.value = false
  }
}

</script>
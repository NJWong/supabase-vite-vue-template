import { ref } from 'vue'
import { defineStore } from 'pinia'
import { User } from '@supabase/supabase-js'

export const userStore = defineStore('user', () => {
  const user = ref<User | null>(null)

  const setUser = (val: User | null) => {
    user.value = val
  }

  return { user, setUser }
})
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const authStore = defineStore('auth', () => {
  const isAuth = ref()

  const setAuth = (val: any) => {
    isAuth.value = val
  }

  return { isAuth, setAuth }
})
import { storeToRefs } from 'pinia'
import { userStore } from "../stores/user"
import { router } from "../routes"

export const redirectOnUnauthenticated = () => {
  const store = userStore()
  const { user } = storeToRefs(store)

  if (!user.value) {
    router.push('/login')
  }
}
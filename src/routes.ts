import Home from './pages/Home.vue'
import Login from './pages/Login.vue'
import Settings from './pages/Settings.vue'
import Signup from './pages/Signup.vue'
import Profile from './pages/Profile.vue'
import * as VueRouter from 'vue-router'
import { storeToRefs } from 'pinia'
import { userStore } from './stores/user'

const protectedRouteGuard = (to: VueRouter.RouteLocation, from: VueRouter.RouteLocation) => {
  const store = userStore()
  const { user } = storeToRefs(store)

  if (!user.value) {
    return { path: '/login' }
  }
}

const routes = [
  // Public routes
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  // Protected routes
  {
    path: '/profile',
    component: Profile,
    beforeEnter: [protectedRouteGuard],
  },
  {
    path: '/settings',
    component: Settings,
    beforeEnter: [protectedRouteGuard],
  },
]

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
})
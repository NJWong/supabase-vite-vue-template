import Home from './pages/Home.vue'
import Login from './pages/Login.vue'
import Settings from './pages/Settings.vue'
import * as VueRouter from 'vue-router'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/settings', component: Settings },
]

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
})
import { createRouter, createWebHistory } from 'vue-router'
import cmRoutes from '@/members/cm/router'
import swRoutes from '@/members/sw/router'

const routes = [
  ...cmRoutes,
  ...swRoutes,
  { path: '/', redirect: '/cm' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

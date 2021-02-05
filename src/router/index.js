import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '@/firebase'

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      requireAuth: true
    },
    component: () => import('@/views/Home')
  },
  {
    path: '/incoms',
    name: 'Incoms',
    meta: {
      requireAuth: true
    },
    component: () => import('@/views/Incoms')
  },
  {
    path: '/orders',
    name: 'Orders',
    meta: {
      requireAuth: true
    },
    component: () => import('@/views/Orders')
  },
  {
    path: '/site-settings',
    name: 'SiteSettings',
    meta: {
      requireAuth: true
    },
    component: () => import('@/views/SiteSetting')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      requireAuth: false
    },
    component: () => import('@/views/Login')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = auth.currentUser
  const { requireAuth } = to.meta

  if (requireAuth && !currentUser) next({ name: 'Login' })
  else next()
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import firebase from 'firebase'

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      auth: true
    },
    component: () => import('../views/Home')
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      auth: true
    },
    component: () => import('../views/About')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requireAuth = to.matched.some(record => record.meta.auth)

  if (requireAuth && !currentUser) next({ name: 'Login' })
  else next()
})

export default router

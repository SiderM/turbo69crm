<template>
  <div>
    <router-link to="/">Статистика</router-link> |
    <router-link to="/incoms">Заявки</router-link> |
    <router-link to="/orders">Заказы</router-link> |
    <router-link to="/site-settings">Настройки сайта</router-link> |
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import { auth } from '@/firebase'

export default {
  name: 'Sidebar',
  methods: {
    async logout () {
      await auth.signOut().then(() => this.$router.push({ name: 'Login' }))
    }
  }
}
</script>

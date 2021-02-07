<template>
  <div class="min-h-screen flex flex-row bg-gray-200">
    <div class="flex flex-col w-56 bg-white overflow-hidden">
      <div class="flex items-center justify-center h-20 shadow-md">
        <h1 class="text-3xl uppercase text-blue-500">Turbo69CRM</h1>
      </div>
      <ul class="flex flex-col py-4">
        <li>
          <router-link to="/" exact active-class="active" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-blue-600">
            <span class="inline-flex items-center justify-center h-6 w-6 text-lg text-blue-500 ml-3 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
            </span>
            <span class="font-medium">Статистика</span>
          </router-link>
        </li>
        <li>
          <router-link to="/orders" active-class="active" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-blue-600">
            <span class="inline-flex items-center justify-center h-6 w-6 text-lg text-blue-500 ml-3 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </span>
            <span class="font-medium">Заказы</span>
          </router-link>
        </li>
        <li>
          <router-link to="/incoms" active-class="active" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-blue-600">
            <span class="inline-flex items-center justify-center h-6 w-6 text-lg ml-3 mr-2 text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </span>
            <span class="font-medium">Заявки</span>
            <span v-show="newIncom.length > 0" class="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">{{ newIncom.length }}</span>
          </router-link>
        </li>
        <li>
          <router-link to="/clients" active-class="active" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-blue-600">
            <span class="inline-flex items-center justify-center h-6 w-6 text-lg text-blue-500 ml-3 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
            <span class="font-medium">Клиенты</span>
          </router-link>
        </li>
        <li>
          <router-link to="/site-settings" active-class="active" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-blue-600">
            <span class="inline-flex items-center justify-center h-6 w-6 text-lg text-blue-500 ml-3 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
            </span>
            <span class="font-medium">Настройка сайта</span>
          </router-link>
        </li>
        <li class="absolute bottom-0">
          <button @click="logout" class="flex flex-row items-center h-12 hover:outline-none focus:outline-none text-red-500 hover:text-red-600">
            <span class="inline-flex items-center justify-center h-6 w-6 text-lg text-red-500 ml-3 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </span>
            <span class="font-medium">Выйти</span>
          </button>
        </li>
        <li class="absolute bottom-0">

        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { auth, db } from '@/firebase'

export default {
  name: 'Sidebar',
  data: () => ({
    newIncom: 0
  }),
  methods: {
    async logout () {
      await auth.signOut().then(() => this.$router.push({ name: 'Login' }))
    },
    async getNewIncom () {
      await db.collection('incoms').onSnapshot(snapshot => {
        this.newIncom = snapshot.docs.filter(doc => doc.data().status === 'new')
      })
    }
  },
  created () {
    this.getNewIncom()
  },
  updated () {
  }
}
</script>

<style scoped>
.active {
  @apply text-blue-500 translate-x-2 transition-transform ease-in duration-200
}
</style>

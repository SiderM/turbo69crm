<template>
  <div class="min-h-screen bg-gray-200 flex flex-col justify-center sm:py-12">
    <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
      <div class="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
        <div class="px-5 py-7">
          <h1 v-if="err">{{err}}</h1>
          <form @submit.prevent="login">
            <label class="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
            <input v-model.trim="email" type="text" class="border focus:outline-none rounded-lg px-3 py-2 mb-5 mt-1 text-sm w-full" />
            <label class="font-semibold text-sm text-gray-600 pb-1 block">Пароль</label>
            <input v-model.trim="password" type="password" class="border focus:outline-none rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
            <button type="submit" class="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
              <span class="inline-block mr-2">Войти</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { auth } from '@/firebase'

export default {
  name: 'Login',
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    async login () {
      await auth.signInWithEmailAndPassword(this.email, this.password).then(() => this.$router.push({ name: 'Home' }))
    }
  },
  created () {
    console.log(process.env.VUE_APP_TEST_KEY)
  }
}
</script>

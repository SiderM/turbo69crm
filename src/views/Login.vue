<template>
  <input type="text" v-model="email" />
  <input type="text" v-model="password" />
  <button @click="login">Login</button>
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

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import firebase from 'firebase'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    async logout () {
      await firebase.auth().signOut().then(() => this.$router.push({ name: 'Login' }))
    }
  }
}
</script>

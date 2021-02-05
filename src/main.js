import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { auth } from './firebase'

let app = null

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App).use(store).use(router).mount('#app')
  }
})

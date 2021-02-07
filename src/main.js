import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import { auth, db } from '@/firebase'
import './assets/global.css'

db.collection('incoms').onSnapshot(snapshot => {
  snapshot.docChanges().forEach(change => {
    if (change.type === 'added') {
      const audio = new Audio(require('@/assets/notification.mp3'))
      audio.play()
    }
  })
})

let app = null

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App).use(store).use(router).mount('#app')
  }
})

<template>
  <div class="fixed inset-0 w-full h-full z-20 bg-black bg-opacity-50 duration-300 overflow-y-auto">
    <div class="relative sm:w-3/4 md:w-1/2 lg:w-1/3 mx-2 sm:mx-auto mt-48 opacity-100">
      <div class="relative bg-white shadow-lg rounded-md text-gray-900 z-20">
        <header class="flex items-center justify-between p-2">
          <h2 class="font-semibold"></h2>
          <button class="focus:outline-none p-2" @click="$emit('closeModal')">
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
              <path
                d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
              ></path>
            </svg>
          </button>
        </header>
        <main class="pb-2 text-center">
          <div class="pb-3inline">
            <p class="mr-4"><span class="font-medium">Имя:</span> {{incom.name}}</p>
            <p class="mr-4 mb-3"><span class="font-medium">Имя:</span> {{incom.phone}}</p>
          </div>
          <div>
            <button @click="setCalling" class="px-4 py-1 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">Обзвонен</button>
            <button @click="setInOrder" class="px-4 mx-3 py-1 border-green-500 border text-green-500 rounded transition duration-300 hover:bg-green-700 hover:text-white focus:outline-none">В заказы</button>
            <button @click="setBreak" class="px-4 py-1 border-red-500 border text-red-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">Отменить</button>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from '@/firebase'

export default {
  name: 'IncomModal',
  props: {
    incom: Object
  },
  methods: {
    async setCalling () {
      await db.collection('incoms').doc(this.incom.id).update({ status: 'calling' })
      this.$emit('closeModal')
    },
    async setInOrder () {
      await db.collection('incoms').doc(this.incom.id).update({ status: 'inOrder' })
      this.$emit('closeModal')
    },
    async setBreak () {
      await db.collection('incoms').doc(this.incom.id).update({ status: 'break' })
      this.$emit('closeModal')
    }
  }
}
</script>

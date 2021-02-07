<template>
  <div class="w-1/4 bg-white mx-3 flex flex-col rounded-md text-gray-800 border border-gray-300 p-4 shadow-md">
    <label class="mb-2 font-medium">Название раздела</label>
    <input v-model="form.title" class="bg-gray-50 rounded-md border border-gray-300 p-2 mb-4 outline-none"
           spellcheck="false" placeholder="Название раздела..." type="text">
    <label class="mb-2 font-medium">Описание раздела</label>
    <textarea v-model="form.text"
              class=" mb-3 bg-gray-50 rounded-md p-3 h-40 border border-gray-300 outline-none"
              spellcheck="false" placeholder="Описание раздела"></textarea>
    <label class="mb-2 font-medium">Название картинки</label>
    <input v-model="form.img" class="bg-gray-50 rounded-md border border-gray-300 p-2 mb-4 outline-none"
           spellcheck="false" placeholder="Название картинки..." type="text">
    <label class="mb-2 font-medium">Ссылка на статью</label>
    <input v-model="form.link" class="bg-gray-50 rounded-md border border-gray-300 p-2 mb-4 outline-none"
           spellcheck="false" placeholder="азвание ссылки..." type="text">
  </div>
</template>

<script>
import { db } from '@/firebase'

export default {
  name: 'StagesItem',
  props: {
    stage: Object
  },
  data: () => ({
    form: {}
  }),
  created () {
    this.form = this.stage
  },
  watch: {
    form: {
      deep: true,
      handler: function (val, oldVal) {
        if (oldVal.id) {
          db.collection('stages').doc(val.id).update(this.form)
        }
      }
    }
  }
}
</script>

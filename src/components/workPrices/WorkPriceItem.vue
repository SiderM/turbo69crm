<template>
  <div class="w-1/4 bg-white mx-3 flex flex-col rounded-md text-gray-800 border border-gray-300 p-4 shadow-md">
    <label class="mb-2 font-medium">Название карточки</label>
    <input v-model="form.title" class="bg-gray-50 rounded-md border border-gray-300 p-2 mb-4 outline-none"
           spellcheck="false" placeholder="Название раздела..." type="text">
    <label class="mb-2 font-medium">Стоимость</label>
    <input v-model="form.price" class="bg-gray-50 rounded-md border border-gray-300 p-2 mb-4 outline-none"
           spellcheck="false" placeholder="Стоимость услуги..." type="text">
    <div class="inline mb-3">
      <label class="mb-2 font-medium mr-4">Сделать популярной</label>
      <input type="checkbox" v-model="form.popular"/>
    </div>
      <label class="mb-2 font-medium">Услуги в карточке</label>
      <input v-for="(service, key) in form.services" :key="key"
             v-model="form.services[key]" class="bg-gray-50 rounded-md border border-gray-300 p-2 mb-4 outline-none"
             spellcheck="false" placeholder="Название раздела..." type="text">
  </div>
</template>

<script>
import { db } from '@/firebase'

export default {
  name: 'StagesItem',
  props: {
    workPrice: Object
  },
  data: () => ({
    form: {}
  }),
  created () {
    this.form = this.workPrice
  },
  watch: {
    form: {
      deep: true,
      handler: function (val, oldVal) {
        if (oldVal.id) {
          db.collection('workprice').doc(val.id).update(this.form)
        }
      }
    }
  }
}
</script>

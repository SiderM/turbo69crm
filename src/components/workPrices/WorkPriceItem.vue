<template>
  <ul>
    <li>
      <input type="text" v-model="form.title"/>
      <input type="text" v-model="form.price"/>
      <input type="checkbox" v-model="form.popular"/>
      <div>
        <input class="border-2 border-red-500" type="text" v-for="(service, key) in form.services" :key="key" v-model="form.services[key]" />
      </div>
    </li>
  </ul>
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

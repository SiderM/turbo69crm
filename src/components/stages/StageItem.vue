<template>
  <ul>
    <li>
      <input type="text" v-model="form.title"/>
      <textarea v-model="form.text"/>
      <input type="text" v-model="form.img"/>
      <input type="text" v-model="form.link"/>
    </li>
  </ul>
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

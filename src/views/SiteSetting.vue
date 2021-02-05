<template>
<Dashboard>
  <div>site setting page</div>
  <ul>
    <li v-for="stage in stages" :key="stage.title">
      <p>{{stage.id}}</p>
      <p>{{stage.title}}</p>
      <p>{{stage.text}}</p>
      <p>{{stage.img}}</p>
      <p>{{stage.link}}</p>
    </li>
  </ul>
  <ul>
    <li v-for="workprice in workPrices" :key="workprice.title">
      <p>{{workprice.id}}</p>
      <p>{{workprice.title}}</p>
      <p>{{workprice.price}}</p>
      <p>{{workprice.popular}}</p>
      <ul v-if="workprice.services[0]">
        <li v-for="(service, key) in workprice.services" :key="key">{{service}}</li>
      </ul>
    </li>
  </ul>
</Dashboard>
</template>

<script>
import Dashboard from '@/layouts/Dashboard'
import { db } from '@/firebase'
export default {
  name: 'SiteSetting',
  components: { Dashboard },
  data: () => ({
    stages: [],
    workPrices: []
  }),
  methods: {
    async getStages () {
      await db.collection('stages').get().then(data => {
        data.forEach(doc => {
          this.stages.push({
            id: doc.id,
            ...doc.data()
          })
        })
      })
    },
    async getWorkPrices () {
      await db.collection('workprice').get().then(data => {
        data.forEach(doc => {
          this.workPrices.push(
            {
              id: doc.id,
              ...doc.data()
            }
          )
        })
      })
    }
  },
  created () {
    this.getStages()
    this.getWorkPrices()
  }
}
</script>

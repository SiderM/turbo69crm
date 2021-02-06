<template>
<Dashboard>
  <div>site setting page</div>
  <StagesItem v-for="stage in stages" :key="stage.id" :stage="stage" @updateStage="updateStage"/>
  <WorkPricesItem v-for="workprice in workPrices" :key="workprice.id" :workPrice="workprice" @updateWorkPrice="updateWorkPrice"/>
</Dashboard>
</template>

<script>
import Dashboard from '@/layouts/Dashboard'
import { db } from '@/firebase'
import StagesItem from '@/components/stages/StagesItem'
import WorkPricesItem from '@/components/work-prices/WorkPricesItem'
export default {
  name: 'SiteSetting',
  components: { StagesItem, Dashboard, WorkPricesItem },
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
    },
    async updateStage (stage) {
      await db.collection('stages').doc(stage.id).set({
        title: stage.title,
        text: stage.text,
        img: stage.img,
        link: stage.link
      })
    },
    async updateWorkPrice (workprice) {
      await db.collection('workprice').doc(workprice.id).set({
        title: workprice.title,
        price: workprice.price,
        services: workprice.services,
        popular: workprice.popular
      })
    }
  },
  created () {
    this.getStages()
    this.getWorkPrices()
  }
}
</script>

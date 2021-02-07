<template>
  <WorkPriceItem v-for="workprice in workPrices" :key="workprice.id" :workPrice="workprice" @updateWorkPrice="updateWorkPrice"/>
</template>

<script>
import WorkPriceItem from '@/components/workPrices/WorkPriceItem'
import { db } from '@/firebase'

export default {
  name: 'WorkPrices',
  components: { WorkPriceItem },
  data: () => ({
    workPrices: []
  }),
  methods: {
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
    this.getWorkPrices()
  }
}
</script>

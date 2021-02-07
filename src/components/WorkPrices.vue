<template>
  <WorkPriceItem v-for="workprice in workPrices" :key="workprice.id" :workPrice="workprice"/>
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
    }
  },
  created () {
    this.getWorkPrices()
  }
}
</script>

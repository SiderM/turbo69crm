<template>
  <div class="heading text-center font-bold text-2xl m-5 text-gray-800">Раздел с карточками услуг</div>
  <div class="flex justify-center my-8">
    <WorkPriceItem v-for="workprice in workPrices" :key="workprice.id" :workPrice="workprice"/>
  </div>
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

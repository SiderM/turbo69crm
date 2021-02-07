<template>
  <div class="heading text-center font-bold text-2xl m-5 text-gray-800">Раздел с описанием услуг</div>
  <div class="flex justify-center my-8">
    <StageItem v-for="stage in stages" :key="stage.id" :stage="stage"/>
  </div>
</template>

<script>
import StageItem from '@/components/stages/StageItem'
import { db } from '@/firebase'

export default {
  name: 'Stages',
  components: { StageItem },
  data: () => ({
    stages: []
  }),
  methods: {
    async getStages () {
      await db.collection('stages').get().then(snapshot => {
        snapshot.forEach(doc => {
          this.stages.push({
            id: doc.id,
            ...doc.data()
          })
        })
      })
    }
  },
  created () {
    this.getStages()
  }
}
</script>

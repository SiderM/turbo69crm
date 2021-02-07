<template>
  <StageItem v-for="stage in stages" :key="stage.id" :stage="stage"/>
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

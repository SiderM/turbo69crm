<template>
<Dashboard>
  <IncomsStatistic :incomsStat="incomsStat"/>
  <IncomsTable :incoms="incoms" />
</Dashboard>
</template>

<script>
import Dashboard from '@/layouts/Dashboard'
import IncomsStatistic from '@/components/incoms/IncomsStatistic'
import IncomsTable from '@/components/incoms/IncomsTable'
import { db } from '@/firebase'
export default {
  name: 'Incoms',
  components: { IncomsStatistic, IncomsTable, Dashboard },
  data: () => ({
    incoms: [],
    incomsStat: {
      total: 0,
      calling: 0,
      new: 0,
      break: 0
    }
  }),
  methods: {
    async getIncoms () {
      await db.collection('incoms').orderBy('createAt', 'desc').onSnapshot(snapshot => {
        this.incoms = []
        this.incomsStat.total = snapshot.size
        snapshot.forEach(doc => {
          this.incoms.push({
            id: doc.id,
            ...doc.data()
          })
        })
      })
    },
    async getIncomsStat () {
      await db.collection('incoms').onSnapshot(snapshot => {
        this.incomsStat.new = snapshot.docs.filter(doc => doc.data().status === 'new')
        this.incomsStat.calling = snapshot.docs.filter(doc => doc.data().status === 'calling')
        this.incomsStat.break = snapshot.docs.filter(doc => doc.data().status === 'break')
      })
    }
  },
  created () {
    this.getIncoms()
    this.getIncomsStat()
  }
}
</script>

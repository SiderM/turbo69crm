<template>
<Dashboard>
  <IncomsStatistic :incomsStat="incomsStat"/>
  <div class="flex justify-start my-5 items-center">
    <label class="mx-3 font-medium text-lg">Намер телефона:</label>
    <input class="bg-gray-50 py-2 px-3 w-56 outline-none rounded-md shadow-sm" placeholder="Введите номер телефона..." v-model="searchQuery" type="text">
  </div>
  <IncomsTable :incoms="filteredIncoms" />
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
      inOrder: 0,
      break: 0
    },
    searchQuery: ''
  }),
  computed: {
    filteredIncoms () {
      return this.incoms.filter(i => i.phone.includes(this.searchQuery))
    }
  },
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
        this.incomsStat.inOrder = snapshot.docs.filter(doc => doc.data().status === 'inOrder')
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

<template>
  <div class="-my-2 py-2 overflow-x-auto">
    <div class="align-middle inline-block min-w-full shadow bg-white shadow-dashboard px-8 py-3 rounded-lg">
      <table class="text-left w-full">
        <thead class="flex w-full">
        <tr class="flex w-full mb-4">
          <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider w-1/5">Имя</th>
          <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider w-1/5">Телефон</th>
          <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider w-1/5">Статус</th>
          <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider w-1/5">Дата</th>
          <th class="px-6 py-3 border-b-2 border-gray-300 w-1/5"></th>
        </tr>
        </thead>
        <tbody class="bg-white flex flex-col items-center justify-between overflow-auto w-full" style="max-height: 75vh">
        <p class="text-black text-center font-medium py-2" v-if="incoms.length <= 0">Нет заявок</p>
        <IncomTableItem v-else v-for="incom in incoms" :key="incom.id" :incom="incom" />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import IncomTableItem from '@/components/incoms/IncomTableItem'
export default {
  name: 'IcomsTable',
  components: {
    IncomTableItem
  },
  props: {
    incoms: Array
  }
}
</script>

<template>
  <tr class="flex w-full mb-2">
    <td class="px-3 py-4 whitespace-no-wrap border-b border-gray-500 w-1/5">
      <div class="text-sm leading-5">{{incom.name}}</div>
    </td>
    <td class="px-3 py-4 whitespace-no-wrap border-b border-gray-500 text-sm leading-5 w-1/5">{{incom.phone}}</td>
    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-sm leading-5 w-1/5">
      <span class="relative inline-block px-3 py-1 font-semibold leading-tight">
        <span :class="{ 'bg-green-500 text-green-900': incom.status == 'new', 'bg-blue-500 text-blue-900': incom.status == 'calling', 'bg-red-500 text-red-900': incom.status == 'break' }" class="absolute inset-0 opacity-50 rounded-full"></span>
        <span v-if="incom.status == 'new'" class="relative text-xs">Новая</span>
        <span v-else-if="incom.status == 'calling'" class="relative text-xs">Обзвонен</span>
        <span v-else-if="incom.status == 'break'" class="relative text-xs">Отменен</span>
      </span>
    </td>
    <td class="px-3 py-4 whitespace-no-wrap border-b border-gray-500 text-sm leading-5 w-1/5">
      {{new Date(this.incom.createAt).toLocaleString()}}
    </td>
    <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5 w-1/5 flex">
      <button @click="showModal = true" class="px-4 py-1 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">Открыть</button>
    </td>
  </tr>
  <IncomModal v-show="showModal" :incom="incom" @closeModal="showModal = false"/>
</template>

<script>
import IncomModal from '@/components/incoms/IncomModal'
export default {
  name: 'IncomTableItem',
  components: { IncomModal },
  props: {
    incom: Object
  },
  data: () => ({
    showModal: false
  })
}
</script>

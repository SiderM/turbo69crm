<template>
  <div class="flex flex-row h-full">
  <Sidebar/>
    <div class="px-6 py-4 text-gray-700 bg-gray-200 h-screen w-screen overflow-y-auto">
  <slot/>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
export default {
  name: 'Dashboard',
  components: { Sidebar }
}
</script>

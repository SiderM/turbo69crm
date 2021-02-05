<template>
  <Sidebar/>
  <slot/>
</template>

<script>
import Sidebar from '@/components/Sidebar'
export default {
  name: 'Dashboard',
  components: { Sidebar }
}
</script>

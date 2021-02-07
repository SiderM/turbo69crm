<template>
<Dashboard>
  <div>site setting page</div>
  <Stages/>
  <WorkPrices/>
</Dashboard>
</template>

<script>
import Dashboard from '@/layouts/Dashboard'
import Stages from '@/components/Stages'
import WorkPrices from '@/components/WorkPrices'

export default {
  name: 'SiteSetting',
  components: { Dashboard, Stages, WorkPrices }
}
</script>

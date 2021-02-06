<template>
  <ul>
    <li>
      <form @click.prevent>
      <input type="text" v-model="form.title">
        <input type="text" v-model="form.text">
        <input type="text" v-model="form.img">
        <input type="text" v-model="form.link">
        <button @click="$emit('updateStage', form)">Update</button>
      </form>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'StagesItem',
  props: {
    stage: Object
  },
  data: () => ({
    form: {}
  }),
  created () {
    this.form = {
      id: this.stage.id,
      title: this.stage.title,
      text: this.stage.text,
      img: this.stage.img,
      link: this.stage.link
    }
  }
}
</script>

<style scoped>

</style>

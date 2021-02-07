<template>
  <ul>
    <li>
      <input type="text" v-model="form.title"/>
      <input type="text" v-model="form.text"/>
      <input type="text" v-model="form.img"/>
      <input type="text" v-model="form.link"/>
      <button class="text-blue-600" @click="$emit('updateStage', form)">Update</button>
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

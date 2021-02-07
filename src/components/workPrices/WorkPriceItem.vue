<template>
  <ul>
    <li>
      <form @click.prevent>
        <input type="text" v-model="form.title"/>
        <input type="text" v-model="form.price"/>
        <input type="text" v-model="form.popular"/>
        <button @click="$emit('updateWorkPrice', form)">Update</button>
      </form>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'StagesItem',
  props: {
    workPrice: Object
  },
  data: () => ({
    form: {}
  }),
  created () {
    this.form = {
      id: this.workPrice.id,
      title: this.workPrice.title,
      price: this.workPrice.price,
      services: this.workPrice.services,
      popular: this.workPrice.popular
    }
  }
}
</script>

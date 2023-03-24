<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <img :src="getImage" alt="" />
    <p>{{ description }}</p>
    <h3>{{ price }}</h3>
    <CoolButton></CoolButton>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'CoolCard',
      components: { cart, CoolButton }
    }
  },
  props: {
    title: String,
    description: String,
    image: String,
    price: Number
  },
  computed: {
    getImage: function () {
      return this.image
    }
  },
  methods: {
    returnPrice: function () {
      console.log(this.price)
    }
  }
}
</script>

<script setup>
import CoolButton from './CoolButton.vue'
import { cart } from './array'
</script>

<style>
.card {
  width: 100%%;
  background-color: blue;
  color: white;
  margin: 10px auto;
  height: 500px;
}
img {
  width: 100%;
}
</style>

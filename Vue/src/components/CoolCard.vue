<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <img :src="getImage" alt="" />
    <p>{{ description }}</p>
    <h3>{{ price }}</h3>
    <button @click="test">{{ button }} Add to cart</button>
  </div>
</template>

<script>
import CoolButton from '../components/CoolButton.vue'
export default {
  name: 'CoolCard',
  props: {
    title: String,
    description: String,
    image: String,
    price: Number,
    button: CoolButton
  },
  computed: {
    getImage: function () {
      return this.image
    },
    test: function () {}
  }
}
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

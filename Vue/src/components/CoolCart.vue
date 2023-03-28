<template>
  <div>
    <button @click="returnCart"><slot></slot></button>
    <h1 v-for="item in cartDisplay" :key="item" :title="item">Bought items:{{ item.title }}</h1>
  </div>
</template>

<script setup>
import { cart, cartDisplay } from './array'
import CoolCard from './CoolCard.vue'
CoolCard
</script>

<script>
export default {
  data() {
    return {
      name: 'CoolCart',
      components: { CoolCard, cartDisplay, cart }
    }
  },
  props: {
    title: String
  },
  methods: {
    returnCart: function () {
      cartDisplay.forEach((item) => console.log(item))
      console.log(cartDisplay)
    }
  }
}
</script>

<style scoped>
.img {
  width: 50px;
}
</style>

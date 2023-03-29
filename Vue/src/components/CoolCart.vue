<template>
  <div>
    <button @click="returnCart" v-on:click="cartState"><slot></slot></button>
    <h1
      class="itemClass"
      v-bind="display"
      v-for="item in cartDisplay"
      :key="item.items"
      :title="item.items"
    >
      {{ item }}
    </h1>
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
      components: { CoolCard, cartDisplay, cart },
      display: false
    }
  },
  props: {
    items: String
  },
  methods: {
    returnCart: function () {
      cartDisplay.forEach((item) => console.log(item))
      console.log(cartDisplay)
    },
    cartState: function () {
      if (this.display == false) {
        document.querySelector('itemClass').style.displays = 'none'
      } else {
        cartDisplay.forEach((item) => (item.style.display = false))
      }
    }
  }
}
</script>

<style scoped>
.img {
  width: 50px;
}
</style>

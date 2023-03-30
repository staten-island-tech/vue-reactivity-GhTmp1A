<script setup>
import { ref } from 'vue'
import { cart, cartDisplay } from './array'
import CoolCard from './CoolCard.vue'
const register = ref(false)
</script>

<template>
  <div>
    <button @click=";(register = !register), returnCart"><slot></slot></button>
    <h2
      v-if="register"
      id="itemClass"
      v-for="item in cartDisplay"
      :key="item.items"
      :title="item.items"
    >
      {{ item }}
    </h2>
    <h2 v-else></h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'CoolCart',
      components: { CoolCard, cartDisplay, cart },
      test: true
    }
  },
  props: {
    items: String
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

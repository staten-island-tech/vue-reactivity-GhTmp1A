<template>
  <div>
    <button @click="RaisePrice">Test</button>
  </div>
</template>

<script>
import { cart } from './array'
import CoolCard from '../components/CoolCard.vue'
export default {
  components: {
    CoolCard
  },
  methods: {
    RaisePrice: function () {
      cart.money++
      console.log(cart.item[0])
    }
  }
}
</script>

<style scoped>
button {
  border: red solid 5px;
  border-radius: 2.5px;
}
</style>

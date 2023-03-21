<template>
  <div>
    <button @click="RaisePrice">Test</button>
  </div>
</template>

<script>
import { cart } from './array'
export default {
  props: { price: Number },
  methods: {
    RaisePrice: function () {
      cart.money++
      console.log('TEST')
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

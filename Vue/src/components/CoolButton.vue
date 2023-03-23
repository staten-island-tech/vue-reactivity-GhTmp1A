<template>
  <div>
    <button @click="RaisePrice"><slot></slot></button>
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
    RaisePrice: function () {}
  }
}
</script>

<style scoped>
button {
  border: red solid 5px;
  border-radius: 2.5px;
}
</style>

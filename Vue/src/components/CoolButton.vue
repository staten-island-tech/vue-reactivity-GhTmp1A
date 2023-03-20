<template>
  <div>
    <button @click="cart.money++">{{ cart.money }}</button>
  </div>
</template>

<script setup>
import { cart } from './array'
</script>

<style scoped>
button {
  border: red solid 5px;
  border-radius: 2.5px;
}
</style>

<template>
  <div>
    <button><slot></slot></button>
  </div>
</template>

<script>
import CoolCard from '../components/CoolCard.vue'
export default {
  name: `CoolButton`,
  components: {
    CoolCard
  },
  methods: {}
}
</script>

<style scoped>
button {
  border: red solid 5px;
  border-radius: 2.5px;
}
</style>

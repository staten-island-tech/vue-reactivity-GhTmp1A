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

<style>
button {
  text-transform: uppercase;
  text-decoration: none;
  padding: 1.5rem 4rem;
  display: inline-block;
  margin: 1rem auto;
  font-size: 2rem;
  border: none;
  border-radius: 10rem;
  transition: all 0.2s;
}

button:hover {
  transform: translateY(-2px);
  color: #440708;
  background-color: ;
  box-shadow: #ffcccb 2px 2px 2px 0.25rem;
  border: solid #891c1e 1px;
}
</style>

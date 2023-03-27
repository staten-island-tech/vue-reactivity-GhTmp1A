<template>
  <div class="card">
    <h2 class="title">{{ title }}</h2>
    <img class="img" :src="getImage" alt="" />
    <p class="description">{{ description }}</p>
    <h3 class="price">Price per item: ${{ price }}</h3>
    <CoolButton class="CoolButton">
      <span class="returnPrice" @click="returnPrice">Add to cart</span></CoolButton
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'CoolCard',
      components: { cart, cart1, CoolButton }
    }
  },
  props: {
    title: String,
    description: String,
    image: String,
    price: Number
  },
  computed: {
    getImage: function () {
      return this.image
    }
  },
  methods: {
    returnPrice: function () {
      console.log(this.price)
      ;(cart.money += this.price).toFixed(2)
    }
  }
}
</script>

<script setup>
import CoolButton from './CoolButton.vue'
import { cart, cart1 } from './array'
</script>

<style scoped>
.card {
  width: 100%%;
  background-color: black;
  color: white;
  margin: 10px auto;
}

.img {
  width: 200px;
}

.title {
  font-size: 3rem;
}

.description {
  font-size: 2rem;
}
.price {
  font-size: 2rem;
}

.CoolButton {
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  flex-wrap: wrap;
}

.returnPrice {
  font-size: 2rem;
}
</style>

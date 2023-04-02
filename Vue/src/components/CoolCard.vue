<template>
  <div class="card">
    <h2 class="title">{{ title }}</h2>
    <img class="img" :src="getImage" alt="" />
    <p class="description">{{ description }}</p>
    <h3 class="price">Price per item: ${{ price }}</h3>
    <CoolButton class="CoolButton" @click="returnPrice"> Add to cart</CoolButton>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'CoolCard',
      components: { cart, cartDisplay, CoolButton }
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
      cart.money += this.price
      cartDisplay.push(this.title)
    }
  }
}
</script>

<script setup>
import CoolButton from './CoolButton.vue'
import { cart, cartDisplay } from './array'
</script>

<style scoped>
html,
body,
* {
  margin: 0;
  padding: 0;
  font-size: 62.5%;
  font-family: 'Finlandica', sans-serif;
}

.card {
  color: white;
  margin: 2px;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  flex-wrap: wrap;
  font-size: 3rem;
  width: 35rem;
}

.img {
  width: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  flex-wrap: wrap;
}

.title {
  font-size: 3rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
}

.description {
  font-size: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
}

.price {
  font-size: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  flex-wrap: wrap;
  padding: 0.5rem;
  border: solid #3d0809 10px;
  border-radius: 12px;
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

<template>
  <div class="home">
    <h1 class="header">
      Hello again! So, as you've noticed, we've got ourselves into a bit of a pickle. I don't like
      to do things twice around here, but my hand's been forced again. Instead of someone siphoning
      out crates and acquiring them for free (horrible), now they're siphoning the items OUT of the
      crates! Without using keys! What could compell someone to do such an evil act? Well,
      regardless, this is a small step up from simple crates, as these items have actual, wait for
      it, value (the suits didn't need to tell me that one). Now I hear you asking once again,
      "Saxton. What are you going to do with all of these items lying around?". Well, I'll tell you
      what. We're doing it again- welcome to the re-temporarily refurbished ITEM store! Have a look
      around, buy, buy, buy, and be careful! Or reckless!
    </h1>
    <CoolCart class="CoolCart">
      (Click to see your items)
      <h2 id="cart">Cart: ${{ cart.money }}</h2>
    </CoolCart>
    <div class="CoolCardContainer">
      <CoolCard
        class="CoolCard"
        v-for="destination in destinations"
        :key="destination.name"
        :title="destination.name"
        :price="destination.price"
        :description="destination.description"
        :image="destination.img"
      ></CoolCard>
    </div>
  </div>
</template>

<script setup>
import { cart } from '../components/array'
import CoolButton from '../components/CoolButton.vue'
import CoolCard from '../components/CoolCard.vue'
import CoolCart from '../components/CoolCart.vue'
</script>

<script>
export default {
  components: { CoolCard, cart, CoolButton, CoolCart },
  methods: {},
  data() {
    return {
      selected: '',
      destinations: [
        {
          name: cart.item[0].name,
          description: cart.item[0].description,
          price: cart.item[0].price,
          img: cart.item[0].img
        },
        {
          name: cart.item[1].name,
          description: cart.item[1].description,
          price: cart.item[1].price,
          img: cart.item[1].img
        },
        {
          name: cart.item[2].name,
          description: cart.item[2].description,
          price: cart.item[2].price,
          img: cart.item[2].img
        },
        {
          name: cart.item[3].name,
          description: cart.item[3].description,
          price: cart.item[3].price,
          img: cart.item[3].img
        },
        {
          name: cart.item[4].name,
          description: cart.item[4].description,
          price: cart.item[4].price,
          img: cart.item[4].img
        },
        {
          name: cart.item[5].name,
          description: cart.item[5].description,
          price: cart.item[5].price,
          img: cart.item[5].img
        }
      ]
    }
  }
}
</script>

<style scoped>
.home {
  background-color: #891c1e;
}

.CoolCardContainer {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.CoolCard {
  border: solid 10px #440708;
  background-color: #b8383b;
  border-radius: 5px;
  flex-wrap: wrap;
  width: 35rem;
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  flex-wrap: wrap;
  margin: 20px;
  justify-content: center;
}

.header {
  color: #5f0d0e;
  background-color: #ffcccb;
  border: solid #b8383b 12px;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
}

#cart {
  font-size: 5rem;
  color: black;
}
.CoolCart {
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  flex-wrap: wrap;
}
</style>

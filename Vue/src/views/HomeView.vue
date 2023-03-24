<template>
  <div class="home">
    <h2>Price is: {{ cart.money }}</h2>
    <h2>Price is also: {{ cart.money }}</h2>
    <CoolCard
      v-for="destination in destinations"
      :key="destination.name"
      :title="destination.name"
      :price="destination.price"
      :description="destination.description"
      :image="destination.img"
    ></CoolCard>
    <CoolButton></CoolButton>
  </div>
</template>

<script setup>
import { cart } from '../components/array'
import CoolButton from '../components/CoolButton.vue'
import CoolCard from '../components/CoolCard.vue'
</script>

<script>
export default {
  components: { CoolCard, cart, CoolButton },
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
        }
      ]
    }
  }
  /*  data() {
    return {
      selected: '',
      destinations: [
        {
          name: 'Blizzard Breather',
          description: 'Check',
          price: 10,
          img: 'https://wiki.teamfortress.com/w/images/thumb/6/68/Item_icon_Blizzard_Breather.png/75px-Item_icon_Blizzard_Breather.png'
        },
        {
          name: 'Tom-Readers',
          description: 'Check',
          price: 11,
          img: 'https://wiki.teamfortress.com/w/images/thumb/d/d7/RED_Tomb_Readers.png/85px-RED_Tomb_Readers.png'
        },
        {
          name: 'Dr. Woah',
          description: 'Check',
          price: 12,
          img: 'https://wiki.teamfortress.com/w/images/thumb/a/a0/Item_icon_Dr._Whoa.png/75px-Item_icon_Dr._Whoa.png'
        }
      ]
    }
  } */
}
</script>

<style>
h1 {
  color: black;
}
</style>

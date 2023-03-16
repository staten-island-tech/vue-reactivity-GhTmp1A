<template>
  <div class="home">
    <CoolButton @click="hello">B One</CoolButton>
    <CoolButton @click="bye">B Two</CoolButton>
    <button>B Three</button>
    <CoolCard
      v-for="destination in destinations"
      :key="destination.name"
      :title="destination.name"
      :price="destination.price"
      :description="destination.description"
      :image="destination.img"
    >
    </CoolCard>
  </div>
</template>

<script>
import CoolButton from '../components/CoolButton.vue'
import CoolCard from '../components/CoolCard.vue'
export default {
  name: 'Home',
  components: {
    CoolButton,
    CoolCard
  },
  data() {
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
          description: 'b',
          price: 12,
          img: 'https://wiki.teamfortress.com/w/images/thumb/a/a0/Item_icon_Dr._Whoa.png/75px-Item_icon_Dr._Whoa.png'
        }
      ]
    }
  },
  methods: {
    hello: function () {
      alert('hello')
    },
    bye: function () {
      alert('bye')
    }
  }
  // name: 'Home',
  // components: {},
  // data() {
  //   return {
  //     /* message: ''
  //     checkedNames: [] */
  //     selected: ''
  //   }
  // },
  // methods: {}
  // components: {},
  // data() {
  //   return {
  //     /*       student: 'Harry',
  //     graduated: true,
  //     animals: ['Pig', 'Horse', 'Donkey', 'Cow', 'Duck']
  //     //animals.forEach((animal) => (animal.insertAdjacentHTML etc)) */
  //     loggedIn: false
  //   }
  // },
  // methods: {
  //   authState: function () {
  //     if (this.loggedIn === false) {
  //       this.loggedIn = true
  //     } else {
  //       this.loggedIn = false //THIS CAN BE USED FOR DARK/LIGHT MODE FUNCTIONS.
  //     }
  //   }
  // }
  // computed: {
  //   now: function () {
  //     const time = new Date()
  //     return `${time.getHours()}:${time.getMinutes()}`
  //   }
  // }
}
</script>

<style scoped></style>

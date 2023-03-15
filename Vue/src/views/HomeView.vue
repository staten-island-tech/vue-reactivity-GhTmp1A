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
      :button="destination.button"
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
          name: 'Snowmann',
          description: 'Check',
          price: 10,
          img: 'https://wiki.teamfortress.com/w/images/thumb/9/96/Painted_Snowmann_654740.png/65px-Painted_Snowmann_654740.png',
          button: 'test'
        },
        {
          name: 'Tom-Readers',
          description: 'Check',
          price: 11,
          img: 'https://wiki.teamfortress.com/w/images/thumb/d/d7/RED_Tomb_Readers.png/85px-RED_Tomb_Readers.png'
        },
        {
          name: 'Battle Bear',
          description: 'b',
          price: 12,
          img: 'https://wiki.teamfortress.com/w/images/thumb/9/9c/RED_Battle_Bear_Bare.png/72px-RED_Battle_Bear_Bare.png'
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

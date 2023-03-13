<!-- <script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
 -->

<template>
  <div class="home">
    <CoolButton @click="hello">B One</CoolButton>
    <CoolButton @click="bye">B Two</CoolButton>
    <button>B Three</button>
    <CoolCard title="Hello" description="No" image="https://cataas.com/cat"></CoolCard>
    <CoolCard
      v-for="destination in destinations"
      :key="destination.name"
      :title="destination.name"
      :price="destination.price"
      :image="destination.img"
    >
    </CoolCard>
    <!--     <input type="text" placeholder="edit me" v-model="message" />
    <p>{{ message }}</p>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
    Reflects whatever data is selected in the export data.
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames" />
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
    <label for="mike">Mike</label>
    <br />
    <span>Checked names: {{ checkedNames }}</span> \
    <select v-model="selected">
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <span>{{ selected }}</span>
        <h2>{{ now }}</h2>
    -->
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
          name: 'a',
          Factor: 'a',
          price: 10,
          img: 'https://cataas.com/cat'
        },
        {
          name: 'b',
          Factor: 'b',
          price: 11,
          img: 'https://cataas.com/cat'
        },
        {
          name: 'b',
          Factor: 'b',
          price: 12,
          img: 'https://cataas.com/cat'
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

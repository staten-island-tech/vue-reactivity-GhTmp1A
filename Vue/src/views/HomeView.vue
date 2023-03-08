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
    <!--     <h1 v-if="graduated">{{ student }}</h1>
    <h1 v-else>"They have not graduated"</h1>
    <ul>
      <li v-for="animal in animals" :key="animal">{{ animal }}</li>
    </ul> -->
    <button v-if="loggedIn">Log Out</button>
    <button></button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      /*       student: 'Harry',
      graduated: true,
      animals: ['Pig', 'Horse', 'Donkey', 'Cow', 'Duck']
      //animals.forEach((animal) => (animal.insertAdjacentHTML etc)) */
      loggedIn: false
    }
  }
}
</script>

<style scoped></style>

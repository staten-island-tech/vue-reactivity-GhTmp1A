<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <img :src="getImage" alt="" />
    <p>{{ description }}</p>
    <h3>{{ price }}</h3>
  </div>
</template>

<script>
export default {
  name: 'CoolCard',
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
  }
}
</script>

<style>
.card {
  width: 100%%;
  background-color: blue;
  color: white;
  margin: 10px auto;
  height: 500px;
}
img {
  width: 100%;
}
</style>

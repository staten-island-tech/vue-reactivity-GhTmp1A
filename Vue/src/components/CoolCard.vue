<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <img src="" alt="" />
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'CoolCard',
  props: {
    title: String,
    description: String,
    image: String
  }
}
</script>

<style>
.card {
  width: 30%;
  background-color: blue;
  margin: 10px auto;
  height: 500px;
}
</style>

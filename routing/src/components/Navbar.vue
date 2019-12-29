<template>
  <div class="main-nav">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'About' }">About</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {}
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
</style>
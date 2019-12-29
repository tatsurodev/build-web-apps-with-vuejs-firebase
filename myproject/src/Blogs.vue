<template>
  <div class="blogs">
    <h2>Blogs</h2>
    <input type="text" v-model="searchTerm" />
    <div v-for="post in filteredPosts" :key="post.id">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body | snippet }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Blogs',
  data() {
    return {
      posts: [],
      searchTerm: ''
    }
  },
  methods: {},
  computed: {
    filteredPosts() {
      return this.posts.filter(post => {
        return post.title.match(this.searchTerm)
      })
    }
  },
  // dataにaccessできるがdomにはrenderされていないので何も表示はされていない
  created() {
    // alert('created hook')
    axios
      .get('https://jsonplaceholder.typicode.com/posts/')
      .then(response => {
        console.log(response)
        this.posts = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
</style>
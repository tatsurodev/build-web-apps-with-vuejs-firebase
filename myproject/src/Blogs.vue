<template>
  <div class="blogs">
    <h2>{{blogTitle}}</h2>
    <button @click="changeTitle()">Change Title</button>
  </div>
</template>

<script>
export default {
  name: 'Blogs',
  data() {
    return {
      blogTitle: 'Blogs'
    }
  },
  methods: {
    changeTitle() {
      this.blogTitle = 'Amazing Blog Site'
    }
  },
  // vue instanceが作成された直後、まだdataにはaccessできない
  beforeCreate() {
    alert('beforeCreate hook')
  },
  // dataにaccessできるがdomにはrenderされていないので何も表示はされていない
  created() {
    alert('created hook')
  },
  // dataが変更される度hookされる
  beforeUpdate() {
    alert('beforeUpdate hook')
  }
}
</script>

<style scoped>
</style>
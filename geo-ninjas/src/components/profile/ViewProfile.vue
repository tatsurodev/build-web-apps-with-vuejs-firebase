<template>
  <div class="view-profile container">
    <div v-if="profile" class="card">
      <h2 class="deep-purple-text center">{{ profile.alias }}'s Wall</h2>
      <ul class="comments collection">
        <li>Comment</li>
      </ul>
      <form @submit.prevent="addComment">
        <div class="field">
          <label for="comment">Add a comment</label>
          <input type="text" name="comment" v-model="newComment" />
          <p v-if="feedback" class="red-text center">{{ feedback }}</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase'

export default {
  name: 'ViewProfile',
  data() {
    return {
      profile: null,
      newComment: null,
      feedback: null,
      // 現login user格納
      user: null
    }
  },
  created() {
    let ref = db.collection('users')

    // addComment methodのfromで使用するために、login userのusers collectionにおけるdocumentを取得する
    ref
      .where('user_id', '==', firebase.auth().currentUser.uid)
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.user = doc.data()
          this.user.id = doc.id
        })
      })

    // profile用にuser document格納
    ref
      .doc(this.$route.params.id)
      .get()
      .then(user => {
        this.profile = user.data()
      })
  },
  methods: {
    addComment() {
      if (this.newComment) {
        this.feedback = null
        db.collection('comments')
          .add({
            to: this.$route.params.id,
            // users collectionのidを格納
            from: this.user.id,
            content: this.newComment,
            time: Date.now()
          })
          .then(() => {
            this.newComment = null
          })
      } else {
        this.feedback = 'You must enter a comment to add it'
      }
    }
  }
}
</script>

<style>
</style>
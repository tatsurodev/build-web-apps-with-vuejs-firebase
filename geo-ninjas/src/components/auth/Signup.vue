<template>
  <div class="signup container">
    <form class="card-panel" @submit.prevent="signup">
      <h2 class="center deep-purple-text">Signup</h2>
      <div class="field">
        <label for="email">Email:</label>
        <input type="email" name="email" v-model="email" />
      </div>
      <div class="field">
        <label for="password">Password:</label>
        <input type="password" name="password" v-model="password" />
      </div>
      <div class="field">
        <label for="alias">Alias:</label>
        <input type="text" name="alias" v-model="alias" />
      </div>
      <p class="red-text center" v-if="feedback">{{ feedback }}</p>
      <div class="field center">
        <button class="btn deep-purple">Signup</button>
      </div>
    </form>
  </div>
</template>

<script>
import slugify from 'slugify'
import db from '@/firebase/init'
// firebase.authの認証用にimport
import firebase from 'firebase'
import functions from 'firebase/functions'

export default {
  name: 'Signup',
  data() {
    return {
      email: null,
      password: null,
      alias: null,
      feedback: null,
      slug: null
    }
  },
  methods: {
    signup() {
      // aliasが入力されていれば
      if (this.alias && this.email && this.password) {
        this.slug = slugify(this.alias, {
          replacement: '-',
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        })
        // console.log(this.slug)
        // firebase functionでcheckAlias functionをserver sideで実行し、結果を取得
        let checkAlias = firebase.functions().httpsCallable('checkAlias')
        checkAlias({ slug: this.slug }).then(result => {
          console.log(result)
          // aliasが既に存在している
          if (!result.data.unique) {
            this.feedback = 'This alias already exists'
            // aliasが存在していない、user作成
          } else {
            // emailとpasswordでuser作成、validation後promiseが返ってくる
            firebase
              .auth()
              .createUserWithEmailAndPassword(this.email, this.password)
              .then(cred => {
                // aliasで取得したusers collectionのdocに作成した新規userのuidをset
                db.collection('users')
                  .doc(this.slug)
                  .set({
                    alias: this.alias,
                    geolocation: null,
                    user_id: cred.user.uid
                  })
              })
              .then(() => {
                this.$router.push({ name: 'GMap' })
              })
              .catch(err => {
                console.log(err)
                // error内容をfeedbackに格納
                this.feedback = err.message
              })
            this.feedback = 'This alias is free to use'
          }
        })
        // alias未入力
      } else {
        this.feedback = 'Please enter all fields'
      }
    }
  }
}
</script>

<style>
.signup {
  max-width: 400px;
  margin-top: 60px;
}
.signup h2 {
  font-size: 2.4em;
}
.signup .field {
  margin-bottom: 16px;
}
</style>

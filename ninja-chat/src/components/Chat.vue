<template>
  <div class="chat container">
    <h2 class="center teal-text">Ninja chat</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages">
          <li v-for="message in messages" :key="message.id">
            <span class="teal-text">{{ message.name }}</span>
            <span class="grey-text text-darken-3">{{ message.content }}</span>
            <span class="grey-text time">{{ message.timestamp }}</span>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <NewMessage :name="name" />
      </div>
    </div>
  </div>
</template>

<script>
import NewMessage from '@/components/NewMessage'
import db from '@/firebase/init'
import moment from 'moment'

export default {
  name: 'Chat',
  props: ['name'],
  components: {
    NewMessage
  },
  data() {
    return {
      messages: []
    }
  },
  created() {
    // collectionへのreferenceを並び替えて取得
    let ref = db.collection('messages').orderBy('timestamp')
    // collectionに対してlistenerを設定、snapshotが返ってくる
    ref.onSnapshot(snapshot => {
      // snapshotに対して変化のあった差分のみ取得
      snapshot.docChanges().forEach(change => {
        // 各documentのtypeがaddedだった場合
        if (change.type == 'added') {
          let doc = change.doc
          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            content: doc.data().content,
            timestamp: moment(doc.data().timestamp).format('lll')
          })
        }
      })
    })
  }
}
</script>

<style>
.chat h2 {
  font-size: 2.6em;
  margin-bottom: 40px;
}
.chat span {
  font-size: 1.4em;
}
.chat .time {
  display: block;
  font-size: 0.8em;
}
</style>
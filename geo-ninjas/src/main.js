// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

// vue instanceを格納
let app = null

// firebase.auth開始後にvue instanceを作成することで、現在のlogin userをfirebase.auth().currentUserで取得できる。firebase.auth開始前にvue instanceを作成すると現在のlogin userを取得できない
// auth statusが変化する度trigger、vue appが開始されていなければ開始。既に開始されていれば前のinstanceを使用
firebase.auth().onAuthStateChanged(() => {
    if (!app) {
        app = new Vue({
            el: '#app',
            router,
            components: { App },
            template: '<App/>'
        })

    }
})
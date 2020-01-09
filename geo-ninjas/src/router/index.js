import Vue from 'vue'
import Router from 'vue-router'
import GMap from '@/components/home/GMap'
import Signup from '@/components/auth/Signup'
import Login from '@/components/auth/Login'
import ViewProfile from '@/components/profile/ViewProfile'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'GMap',
            component: GMap,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/signup',
            name: 'Signup',
            component: Signup
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/profile/:id',
            name: 'ViewProfile',
            component: ViewProfile,
            meta: {
                requiresAuth: true
            }
        }
    ]
})

// 各routeに対してroute guard
router.beforeEach((to, from, next) => {
    // console.log(to.matched)
    // routeがmetaでauth必須に設定されていたら
    // $route.matchedで親から子の順番で両方のroute objectを含む配列
    // some methodで1つでもtrueがあれば全体でtrue
    if (to.matched.some(rec => rec.meta.requiresAuth)) {
        // 現user取得
        let user = firebase.auth().currentUser
        if (user) {
            // login済なら
            next()
        } else {
            // login済でないならredirect
            next({ name: 'Login' })
        }
        // auth不要なら
    } else {
        next()
    }
})

export default router
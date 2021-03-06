import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import store from '@/components/store'
import index from '@/components/index'
import tiku from '@/components/tiku'
import mine from '@/components/mine'
import question from '@/components/question'
import detail from '@/components/detail'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/hello',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/store',
            name: 'store',
            component: store
        },
        {
            path: '/tiku',
            name: 'tiku',
            component: tiku
        },
        {
            path: '/mine',
            name: 'mine',
            component: mine
        },
        {
            path: '/question',
            name: 'question',
            component: question
        },
        {
            path: '/detail',
            name: 'detail',
            component: detail
        }
    ]
})

import Vue from 'vue'
import Router from 'vue-router'

import collTaskList from 'pages/collTaskList'


Vue.use(Router)
let router = new VueRouter({

  routes: [
    {
      path: '/',
      component: Goods
    }
  ]
})

export function createRouter() {
    const router = new Router({
        routes: [
            {path:'/index',component:collTaskList}
        ]
    })
}
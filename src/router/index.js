import Vue from 'vue'
import Router from 'vue-router'

import middle from '@/components/middle'

import mainProduct from '@/components/main'
import mainProcess from '@/components/mainProcess'
import testSystem from '@/components/testSystem'
import viewDocument from '@/components/viewDocument'

import store from "@/store"

Vue.use(Router)

let routes = [
  {
    path: '/', redirect: '/main'
  },
  {
    path: '/main',
    component:middle,
    children:[
      {
        path: "",
        redirect:"product/1"
      },
      {
        path: 'product/:id',
        component: mainProduct,
      },
      {
        path: 'mainProcess',
        component: mainProcess
      },
      {
        path: 'testSystem',
        component: testSystem
      }
    ]
  },

  {
    path: '/document/:documentId',
    component: viewDocument,
  },
]

const router = new Router({
  routes,
  mode:"history"
});

router.beforeEach((to, from, next) => {
  store.dispatch("changeDefaultActive",to.path);
  next(true) ;
})

export default router

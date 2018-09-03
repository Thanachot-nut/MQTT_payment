import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import paymentsuc from '@/components/paymentsuccess'
import history from '@/components/historypayment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/success',
      name: 'paymentsuc',
      component: paymentsuc
    },
    {
      path: '/history',
      name: 'history',
      component: history
    }
  ]
})

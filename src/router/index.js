import Vue from 'vue'
import Router from 'vue-router'

import villageservice from '@/view/villageservice'
import ticket from '@/public/components/ticket'
import mine from '@/public/components/mine'
import newaddress from '@/public/components/newaddress'

import waterhome from '@/view/waterapp/waterhome'
import shop from '@/view/waterapp/shop'
import goods from '@/view/waterapp/goods'
import seller from '@/view/waterapp/seller'
import rataing from '@/view/waterapp/rataing'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/villageservice',
    },
    {
      path: '/villageservice',
      name: 'villageservice',
      component: villageservice
    },
    {
      path: '/ticket',
      name: 'ticket',
      component: ticket
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/waterhome',
      name: 'waterhome',
      component: waterhome
    },
    {
      path: '/shop',
      redirect: '/shop/goods',
      name: 'shop',
      component: shop,
      children:[
        {
          path:'goods',
          name: 'goods',
          component: goods
        },
        {
          path: 'seller',
          name: 'seller',
          component: seller
        },
        {
          path: 'rataing',
          name: 'rataing',
          component: rataing
        }
      ]
    },
    {
      path: '/address',
      name: 'newaddress',
      component: newaddress
    }
  ]
})

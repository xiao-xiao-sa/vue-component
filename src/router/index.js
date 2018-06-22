import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import shopList from '@/pages/shopList'
import shopDetail from '@/pages/shopDetail'
import shopCart from '@/pages/shopCart'
import tabIndex from '@/pages/tabIndex'
import labelTree from '@/pages/labelTree'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/shoplist',
      name:'shopList',
      component:shopList
    },
    {
      path:'/shopdetail/:sid',
      name:'shopDetail',
      component:shopDetail
    },
    {
      path:'/shopcart',
      name:'shopCart',
      component:shopCart
    },
    {
      path:'/tabindex',
      name:'tabIndex',
      component:tabIndex
    },
    {
      path:'/labeltree',
      name:'labelTree',
      component:labelTree
    }
  ]
})

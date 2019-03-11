//路由组件
import Index from '../pages/Index/Index.vue'
import Cate from '../pages/Cate/Cate.vue'
import Topic from '../pages/Topic/Topic.vue'
import Cart from '../pages/Cart/Cart.vue'
import Login from '../pages/Login/Login.vue'
import Search from '../pages/Search/Search.vue'
import Tab from '../pages/Topic/Tab.vue'
import CateList from  '../pages/Cate/CateList.vue'


export default [
  {
    path: '/',
    component: Index,
  },
  {
    path: '/cate',
    component: Cate,
    redirect: '/cate/cateList',
    children: [
      {
        name: 'cateList',
        path: '/cate/cateList',
        component: CateList,
      }
    ]

  },
  {
    path: '/topic',
    component: Topic,
    redirect: '/topic/tab/0',
    children:[
      {
        name: 'tab',
        path: '/topic/tab/:id',
        component: Tab,
      }
    ]
  },
  {
    path: '/cart',
    component: Cart,
  },
  {
    path: '/login',
    component: Login,
    meta:true
  },
  {
    path: '/search',
    component: Search,
  }
]


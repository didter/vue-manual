import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/index.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/authority',
    name:'Authority',
    component: () => import('../views/authority.vue'),
    meta: {
      title: '权限控制'
    }
  },
  {
    path: '/vuex',
    name:'Vuex',
    component: () => import('../views/vuex.vue'),
    meta: {
      title: 'vuex 状态管理'
    }
  }
  
]

const router = new VueRouter({
  routes
})

export default router

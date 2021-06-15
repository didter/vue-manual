import Vue from 'vue'
import Router from 'vue-router'
// 引入页面
const Index = () => import('../pages/index')

// 声明使用插件
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/index',
        component: Index
    },{
        path: '/',
        redirect: '/msite'
    }]
})
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'


// 引入vue-router 并安装
import VueRouter from 'vue-router'
// 可以让VueRouter在任何组件中使用
Vue.use(VueRouter)


// 引入组件
import Home from './pages/Home'
import Market from './pages/Market'
import Cart from './pages/Cart'
import Mine from './pages/Mine'

// 配置路由规则
const routes = [
  { path: '', component: Home },
  { path: '/home', component: Home },
  { path: '/market', component: Market },
  { path: '/cart', component: Cart },
  { path: '/mine', component: Mine }
]

// 创建路由对象
const router = new VueRouter({
  // mode: 'history',
  routes
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  VueRouter,
  template: '<App/>',
  components: { App },
  router  // 将路由挂载到实例上
})

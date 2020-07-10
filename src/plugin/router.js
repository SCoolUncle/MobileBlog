import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home.vue'
import Detial from '../pages/detial.vue'
import Loading from '../components/ajLoading/ajLoading.vue'
import Column from '../pages/column.vue'
import Guanzhu from '../pages/guanzhu.vue'
import My from '../pages/my.vue'
import Login from '../pages/login.vue'
// import Guanzhu from ''

Vue.use(VueRouter)
const routes = [
  { path: '', redirect: '/home' },
  { path: '/', redirect: '/home' },
  {path: '/home',component: Home},
  {path: '/detial',component:Detial},
  { path: '/loading', component: Loading },
  { path: '/column', component: Column },
  { path: '/guanzhu', component: Guanzhu },
  { path: '/my', component: My },
  { path: '/login', component: Login }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // 滚动条的优化
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});
// 全局守卫
router.beforeEach((to, from, next) => {
  
  next(true);
})

export default router

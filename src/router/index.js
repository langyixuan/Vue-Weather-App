import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import WeatherDetail from '../viewa/WeatherDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/weather/:cityname',
    name: 'WeatherDetail',
    component: () => import("../views/WeatherDetail.vue"),
    props: true,
    meta: {
      keepAlive: false
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

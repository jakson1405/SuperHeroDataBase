import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Hero from '../components/Hero.vue'
import NewHero from '../components/NewHero.vue'
import Heroes from '../components/Heroes'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/hero/:id',
    props: true,
    name: 'Hero',
    component: Hero
  },
  {
    path: '/create',
    name: 'Create',
    component: NewHero
  }, {
    path: '/heroes',
    name: 'Heroes',
    component: Heroes
  },
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router

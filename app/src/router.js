import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
const List = () => import('./views/List.vue')
const Save = () => import('./views/Save.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/save',
      name: 'save',
      component: Save
    }
  ]
})

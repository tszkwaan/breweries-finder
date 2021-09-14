import Vue from 'vue'
import Router from 'vue-router'
import List from './views/List.vue'
import Save from './views/Save.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
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

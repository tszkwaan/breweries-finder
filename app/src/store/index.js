import Vue from 'vue'
import Vuex from 'vuex'
import breweries from '@/store/breweries.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    breweries
  }
})

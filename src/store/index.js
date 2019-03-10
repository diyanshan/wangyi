import Vue from 'vue'
import Vuex from 'vuex'
import cate from './modules/cate.js'
import msite from './modules/msite.js'
import search from './modules/search.js'
import topic from './modules/topic.js'
import getters from './getters.js'



Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    cate,
    msite,
    search,
    topic
  },
  getters
})

export default store

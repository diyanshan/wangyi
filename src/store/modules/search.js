import {RECEIVE_SEARCH} from "../mutation-types";
import {reqInitSearch} from '../../api/index.js'

const state ={
  initSearch:{}
}

// const action
const mutations = {
  [RECEIVE_SEARCH] (state,{initSearch}) {
    state.initSearch = initSearch
  }
}


const actions = {
  // 获取Tabs数据
  async getInitSearch ({commit}) {
    // 发送ajax请求
    const result = await reqInitSearch()
    if (result.code === '200') {
      // 根据ajax请求结果去commit给mutation更新数据
      const initSearch = result.data;
      commit(RECEIVE_SEARCH, {initSearch})
    }
  }
}


const getters = {

}

export default{
  state,
  mutations,
  actions,
  getters
}

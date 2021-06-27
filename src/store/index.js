import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 状态仓库
  state: {
    authorityList: ['add','del'],
    name: '张三'
  },
  // 修改状态的唯一方法(不能包含异步操作)
  mutations: {
    // 不带参数修改
    changeNameWithCurrent(state) {
      state.name = '李四'
    },
    // 带参数修改
    changeNameWithParam(state, payload) {
      state.name = payload.name
    }
  },
  actions: {
  },
  modules: {
  }
})

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
  // 异步更改状态
  actions: {
    // 无参
    changeNameAsync(context) {
      // 通过context.state来获取state中的变量
      let _name = context.state.name
      console.log(_name)
      // 异步操作后修改
      setTimeout(()=> {
        context.commit('changeNameWithCurrent')
      },1000)
    },

    // 带参
    changeNameWithParamAsync(context, payload) {
      // 异步修改
      // 异步操作后修改
      setTimeout(()=> {
        context.commit('changeNameWithParam', payload)
      },1000)
    }
    
  },
  modules: {
  }
})

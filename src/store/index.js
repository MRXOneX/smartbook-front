import { createStore } from 'vuex'
// module
import { authModule } from './authModule'



export default createStore({
  state: {
    isAuth: false
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth: authModule
  }
})

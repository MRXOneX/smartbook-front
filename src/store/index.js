import { createStore } from 'vuex'
// module
import { authModule } from './authModule'



export default createStore({
  modules: {
    auth: authModule
  }
})

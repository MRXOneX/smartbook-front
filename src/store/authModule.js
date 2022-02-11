import axios from 'axios'
import AuthService from '../services/AuthService'




export const authModule = {
    namespaced: true,
    state: () => ({
        user: {},
        isAuth: false,
        isLoading: false,
    }),
    getters: {
        getIsAuth(state) {
            return state.isAuth
        },

        getUser() {
            return state.user
        }
    },
    mutations: {
        setIsAuth(state, bool) {
            state.isAuth = bool
        },

        setUser(state, user) {
            state.user = user
        },

        setLoading(state, bool) {
            state.isLoading = bool
        }
    },
    actions: {
        async login({commit}, payload) {
            try {
                
                const response = await AuthService.login(payload.email, payload.password)

                localStorage.setItem('tokenSmartBook', response.data.access_token)
                commit('setUser', response.data.user)
                commit('setIsAuth', true)


            } catch (e) {
                console.log(`authModule login error: ${e}`)
            }
        },


        async registration({state, commit}, payload) {
            try {
                const response = await AuthService.registration(
                    payload.firstname,
                    payload.lastname,
                    payload.middlename,
                    payload.email,
                    payload.password,
                    payload.dateOfBirth,
                    payload.gender
                )


                localStorage.setItem('tokenSmartBook', response.data.access_token)
                commit('setUser', response.data.user)
                commit('setIsAuth', true)

            } catch(e) {
                console.log(`authModule error: ${e}`)
            }
        },

        async checkAuth({state, commit}) {
            commit('setLoading', true)
    
            try {
                const response = await axios.get('http://localhost:3000/users/refresh', {withCredentials: true})
    
                localStorage.setItem('tokenSmartBook', response.data.access_token)
                commit('setUser', response.data.user)
                commit('setIsAuth', true)
    
            } catch(e) {
                console.log(`authModule error: ${e}`)
            } finally {
                commit('setLoading', false)
            }
        }
    }
}
import AuthService from '../services/AuthService'




export const authModule = {
    state: () => ({
        user: {},
        isAuth: false,
        isLoading: false,
    }),
    getters: {
        getIsAuth(state) {
            return state.isAuth
        }
    },
    mutations: {
        setAuth(state, bool) {
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
        async login({state, commit}, payload) {
            try {
                
                const response = await AuthService.login(payload.email, payload.password)

                localStorage.setItem('tokenSmartBook', response.data.access_token)
                commit('setUser', response.data.user)
                commit('setLoading', true)

                console.log(state.isAuth)
            } catch (e) {
                console.log(`authModule login error: ${e}`)
            }
        }
    },
    namespaced: true
}
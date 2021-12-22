import axios from "axios";

export default{
    namespaced: true,
    state: {
        token: null,
        tok: null,
        user: null
    },
    mutations: {
        setToken(state, token){
            state.token = token
        },
        setTok(state, tok){
            state.tok = tok
        },
        setUser(state, data){
            state.user = data
        }
    },
    getters: {
        authenticated(state){
            return state.token && state.user;
        },
        getUser(state){
            return state.user;
        }
    },
    actions: {
        async signIn({ dispatch },credentials){
            try {
                const response = await axios.post('users/login', credentials);
                return dispatch('attempt', response.data);
                //console.log(response.data.id);
            } catch (error) {
                console.log('failed');
            }
        },
        async attempt({ commit, state }, dat){
            try {
                if(dat.token){
                    commit('setToken', dat.token)
                }
                if(!state.token){
                    return;
                }
                commit('setTok', dat)
                const response = await axios.get(`users/${dat.id}`)
                //console.log(response.data)
                
                commit('setUser', response.data)
                //console.log(response.data)
                console.log('success')
            } catch (error) {
                console.log('failed 2 : '+error)
                commit('setUser', null)
                commit('setToken', null)
                commit('setTok', null)
            }
        },
        signOut({ commit }){
            commit('setUser', null)
            commit('setToken', null)
            commit('setTok', null)

        }
    }
}
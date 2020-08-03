import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        users: [],
    },
    mutations: {
        SET_USERS_TO_STATE(state, users) {
            state.users = users
        },

        ADD_NEW_USER(state, user) {
            state.users.push(user)
        },
        DELETE_USER(state, id) {


          console.log(id)
          state.users = state.users.filter((user, index) => {
               return user.id !== id
            })

        }
    },
    actions: {
        GET_USERS_FROM_API({commit}) {
            return axios.get('https://reqres.in/api/users?page=1').then(response => {
                    commit('SET_USERS_TO_STATE', response.data.data);
                    return response.data.data
                }
            ).catch((error) => {
                console.log(error)
            })
        },

        GET_NEW_USER_TO_VUEX({commit}, user) {
            commit("ADD_NEW_USER", user)
        },
        GET_USER_TO_DELETE({commit}, id) {
            commit("DELETE_USER", id)
        }
    },
    getters: {
        USERS(state) {
            return state.users
        },
        USER_BY_ID: state => (id) => {
            return state.users.find(user => user.id === id)
        },
        SEARCH_VALUE(state) {
            return state.searchValue
        }
    }
})

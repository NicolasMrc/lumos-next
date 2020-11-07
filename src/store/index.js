import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations } from 'vuexfire'
import devices from './modules/devices'
import animations from './modules/animations'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {
        ...vuexfireMutations,
    },
    actions: {},
    modules: {
        devices,
        animations,
    },
})

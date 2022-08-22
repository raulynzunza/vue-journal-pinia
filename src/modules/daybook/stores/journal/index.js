import state from './state'
// import * as actions from './actions'
import * as getters from './getters'
// import * as mutations from './mutations'
import { defineStore } from "pinia";

export const useCounterStore = defineStore('global', {
    state,
    getters,
    // actions,
    // mutations
})

export default useCounterStore
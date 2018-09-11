import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import state from './state'
import createLogger from 'vuex/dist/logger'
Vue.use(Vuex)
const debug = process.env.NODE_ENV!=='production'
export default ()=>{
    const store = new Vuex.Store({
        state,
        mutations,
        getters,
        strict:debug,
        plugins:debug?[createLogger()]:[]       
    })
    if(module.hot){
        module.hot.accept([
            './getters',
            './mutations',
            './state'
        ],()=>{
            const newGetters  = require('./getters').default
            const newMutation  = require('./mutations').default
            const newState = require('./state').default
            store.hotUpdate({
                state:newState,
                getters:newGetters,
                mutations:newMutation
            })
            
        })
        
    }
    return store
}

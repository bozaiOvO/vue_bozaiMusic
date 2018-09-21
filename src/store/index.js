import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'
import {loginModule} from './module/moduleLogin/index'
Vue.use(Vuex)
const debug = process.env.NODE_ENV!=='production'
export default ()=>{
    const store = new Vuex.Store({
        state,
        mutations,
        getters,
        actions,
        strict:debug,
        plugins:debug?[createLogger()]:[] ,
        modules:{
            loginModule
        }      
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
            const newActions = require('./actions').default
            store.hotUpdate({
                state:newState,
                getters:newGetters,
                mutations:newMutation,
                actions:newActions,
            })
            
        })
        
    }
    return store
}

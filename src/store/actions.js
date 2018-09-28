import {randomList} from '@/common/js/random'
export default{
    selectPlay({state,commit},{list,index}){
        commit('playList',list)
        if(state.mode==2){
            let list2 = randomList(list)
            commit.playList(list2)
        }else{
            commit('playList',list)
        }
        commit('currentIndex',index)
        commit('fullScreen',true)
        commit('playing',true)
    },
    clearThisSong({state,commit},index){
        commit('spliceList',index)
    }
}
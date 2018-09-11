export default{
    playing(state,flag){
        state.playing = flag
    },
    fullScreen(state,flag){
        state.fullScreen = flag
    },
    playList(state,list){
        state.playList = list
    },
    randomList(state,list){
        state.randomList = list
    },
    mode(state,num){
        state.mode = num
    },
    currentIndex(state,index){
        state.currentIndex = index
    }
}
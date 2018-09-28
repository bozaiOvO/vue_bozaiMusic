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
    },
    currentMp3(state,url){
        state.currentMp3 = url
    },
    songList(state,list){
        state.songList = list
    },
    spliceList(state,index){
        state.playList.splice(index,1)
    }
}
export default{
    currentSong(state){ //获取播放的这首歌
        return state.playList[state.currentIndex]||{}
    }
}
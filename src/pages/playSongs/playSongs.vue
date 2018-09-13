<template>
    <div id="play" v-show=playList.length>
        <div class="full-screen" v-show=fullScreen>
            <bo-header
             :headerObj=currentSong
             @miniShow=miniShow
             ></bo-header>
            <bo-filter-bg :bg=currentSong.al.picUrl></bo-filter-bg>
            <bo-middle 
            :currentSong=currentSong
            :lyricArr=lyricArr
            :currentLyric=currentLyric
            :countLyric=countLyric
            ></bo-middle>
            <bo-progress-bar
            :duration=duration
            :currentTime=currentTime
            :percentage=percentage
            :currentTimeStr=currentTimeStr
            :durationStr=durationStr
            @stopSongs = stopSongs
            @playSongs = playSongs
            @currentSongTime = setCurrentTime
            ></bo-progress-bar>
            <bo-bottom
            :mode=mode
            :playing=playing
            @setPlaying=setPlaying
            @previousSong=previousSong
            @nextSong=nextSong
            @toggleMode=toggleMode
            ></bo-bottom>
        </div>
        <div class="small-screen" v-show=!fullScreen>
            <bo-mini-play
             :playing=playing
             :currentSong=currentSong
             @fullScreenShow=fullScreenShow
             @setPlaying=setPlaying
             ></bo-mini-play>
        </div>
        <audio :src="currentMp3" ref='audio'   @timeupdate=timeupdate @ended=ended></audio>
    </div>
</template>
<script>
 import Lyric from 'lyric-parser'
import {mapState,mapGetters,mapMutations} from 'vuex'
import BoHttp from '@/api/detailPage'
import BoHeader from './components/header'
import BoFilterBg from './components/filter'
import BoMiddle from './components/middle'
import BoProgressBar from './components/progressBar'
import BoBottom from './components/bottom'
import BoMiniPlay from './components/miniPlay'
export default {
    components:{
        BoHeader,
        BoFilterBg,
        BoMiddle,
        BoProgressBar,
        BoBottom,
        BoMiniPlay
    },
    data(){
        return {
            duration:0,//代表音频总长
            currentTime:0,//现在播放到哪里
            currentTimeStr:'',
            durationStr:'',
            lyricArr:[],//歌词部分
            currentLyric:'',
            countLyric:0,
            lyricObj:null
        }
    },
    computed:{
        percentage(){
           return this.currentTime/this.duration
        },
        ...mapState(['playList','fullScreen','currentMp3','playing','currentIndex','mode']),
        ...mapGetters(['currentSong'])
    },
    methods:{
        timeupdate(e){
            // console.log(e)
            this.duration = e.target.duration
            this.currentTime = e.target.currentTime
            this.durationStr = this.format(this.duration)
            this.currentTimeStr = this.format(this.currentTime)
        },
        ended(){
            if (this.mode == 1) {
                this.loop()
            } else {
                this.nextSong()
            }
        },
        fullScreenShow(){
            this.fullScreenFn(true)
        },
        miniShow(){
            this.fullScreenFn(false)
        },
        stopSongs(){
            this.playingFn(false)
        },
        playSongs(){
            this.playingFn(true)
        },
        setCurrentTime(time){
            let currentT = this.duration*time
            console.log(currentT)
            this.$refs.audio.currentTime = currentT
            if(this.lyricObj){
                this.lyricObj.seek(currentT*1000)
            }
        },
        setAudioUrl(res){
            let url = res.data.data[0].url
            this.currentMp3Fn(url)
            if(this.playing){
                //this.$nextTick获取更新后的DOM，不然是无法播放！会提示元素没有源
                this.$nextTick(()=>{
                    this.$refs.audio.play()
                })
            }
        },
        getLyric(res){
            let lyric = res.data.lrc.lyric
            this.lyricObj = new Lyric(lyric,this.handleLyric)
            this.lyricArr=this.lyricObj.lines
            console.log(this.lyricArr)
            if(this.playing){
                this.lyricObj.play()
            }
        },
        handleLyric({lineNum, txt}){
            console.log(txt)
            this.countLyric = lineNum
			this.currentLyric = txt
        },
        setPlaying(){
            this.playingFn(!this.playing) 
            if(this.lyricObj){
                this.lyricObj.togglePlay()
			}
        },
        previousSong(){
            this.currentIndexFn(this.currentIndex-1)
            this.playSongs()
        },
        nextSong(){
            this.currentIndexFn(this.currentIndex+1)
            this.playSongs()
        },
        toggleMode(){
            let count = this.mode
            count++
            if(count>2){
                count = 0
            }
            this.setMode(count)
        },
        format(time){
            let time1 = Math.floor(time)
            let minute = time1/60|0
            let second = time1%60
            let secondStrLength = second.toString().length;
            if(secondStrLength<2){
                second = '0'+second
            }
            return minute +':'+second
        },
        ...mapMutations({
            playingFn:'playing',
            currentMp3Fn:'currentMp3',
            currentIndexFn:'currentIndex',
            setMode:'mode',
            fullScreenFn:'fullScreen'
        })
    },
    watch:{
        currentIndex(newI,oldI){
            if(oldI==newI){
                return 
            }
            console.log(this.lyricObj)
            if(this.lyricObj){
                this.lyricObj.stop()
            }
            let id = this.playList[newI].id
            BoHttp.getMp3(id)
            .then(res=>{
                console.log(res)
                this.setAudioUrl(res)
            })
            BoHttp.getLyric(id)
            .then(res=>{
                this.getLyric(res)
            })
        },
        playing(isPlay){
            const audio = this.$refs.audio
            this.$nextTick(()=>{
                isPlay?audio.play():audio.pause()
            })
        }
    }
    
}
</script>
<style lang="stylus" scoped>
    #play{
        
        .clear{
           clear both
        }
    }
    .full-screen{
        position: fixed
        left: 0
        right: 0
        top: 0
        bottom: 0
        z-index: 999
        background: #fff
    }
</style>



<template>
    <div class="wrapper">
        <div class="c">
            <span class="current-time time">
                {{currentTimeStr}}
            </span>
            <div class="bar"
            ref = bar
            @touchstart.prevent = 'handleTouchStart'
            @touchmove = 'handleTouchMove'
            @touchend = 'handleTouchEnd'
            >
                <div class="linear">
                    <div class="current-bar" ref=currentBar></div>
                </div>
                <div class="dot" ref=dot></div>
            </div>
            <span class="end-time time">
                {{durationStr}}
            </span>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        currentTime:{
            type:Number,
            default:0
        },
        duration:{
            type:Number
        },
        percentage:{
            type:Number
        },
        durationStr:{
            type:String,
            default:'00:00'
        },
        currentTimeStr:{
            type:String,
            default:'00:00'
        }
    },
    data(){
        return {
            isTouch:false
        }
    },
    methods:{
        handleTouchStart(){
            this.isTouch = true
            this.$emit('stopSongs')
        },
        handleTouchMove(e){
            if(this.isTouch){
                const left = this.$refs.bar.offsetLeft;
                const barW = this.$refs.bar.clientWidth - this.$refs.dot.clientWidth;
                let clientX = e.touches[0].clientX-left
                if(clientX>barW){//当手指画出bar
                    clientX = barW
                }else if(clientX<0){
                    clientX = 0
                }
                let currentX = clientX/barW
                this.$emit('currentSongTime',currentX)
                this.$refs.currentBar.style.width = clientX +'px'
                this.$refs.dot.style.transform ='translate3d('+clientX+'px,0,0)'	
            }
        },
        handleTouchEnd(){
            this.isTouch = false
            this.$emit('playSongs')
        }
    },
    watch:{
      currentTime() {
        const overallLength = this.$refs.bar.clientWidth - this.$refs.dot.clientWidth; 
        let currentW = overallLength*this.percentage
        this.$refs.currentBar.style.width = currentW +'px'
        this.$refs.dot.style.transform ='translate3d('+currentW+'px,0,0)'
      } 
    }
}
</script>
<style lang="stylus" scoped>
    .wrapper{
        position absolute
        bottom 100px
        width 100%
        .c{
            display  flex
            align-items center
            width 80%
            margin 0 auto 
            .time{
                padding 0 5px;
            }
            .bar{
                position relative
                display flex
                width 100%
                align-items center
                height 30px
                .current-bar{ 
                    position absolute
                    left 0
                    height 4px 
                    background :#ff6700
                }
                .linear{
                    width 100%
                    height: 4px;
                    background: rgba(0,0,0,.4);
                }
                .dot{
                    position absolute
                    left 0
                    width 15px
                    height 15px
                    border-radius 50%
                    background-color #fff
                }
                .dot::after{
                    position absolute
                    content '' 
                    top 50%
                    left 50% 
                    transform translate(-50%,-50%)
                    width 7px
                    height 7px
                    border-radius 50%
                    background-color red
                }
            }
        }
    }
</style>



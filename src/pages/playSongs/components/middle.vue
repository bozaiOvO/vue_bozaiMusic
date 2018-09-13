<template>
    <div class="middle">
        <swiper :options="swiperOption" class="swiper">
            <swiper-slide>
                <div class="middle-l">
                    <div class="cd">
                        <img :src="currentSong.al.picUrl" alt="">
                    </div>
                    <div class="text">
                        
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <bo-scroll ref='scrollLyric' class="scroll">
                    <div class="middle-r">
                        <p 
                        v-for="(item,index) of lyricArr" 
                        :class="{'active':index-1==countLyric}"
                        ref=lyricArray
                        :key=item.time>
                            {{item.txt}}
                        </p>
                    </div>
                </bo-scroll>
                 
                
            </swiper-slide>
        </swiper>
        <div class="swiper-pagination"></div> 
    </div>
</template>
<script>
import BoScroll from '@/components/scroll/scroll'
export default {
    components:{
        BoScroll
    },
    data(){
        return {
            swiperOption:{
                pagination: {
                    el: '.swiper-pagination',
                }
            }
        }
    },
    props:{
        currentSong:{
            type:Object
        },
        countLyric:{
            type:Number
        },
        currentLyric:{
            type:String
        },
        lyricArr:{
            type:Array
        }
    },
    watch:{
        countLyric(){
            if(this.countLyric>5){
                let numEl = this.$refs.lyricArray[this.countLyric-5]
                this.$refs.scrollLyric.scrollToElement(numEl,500)
            }else{
                this.$refs.scrollLyric.scrollTo(0,0)
            }
        }
	} 
}
</script>
<style lang="stylus" scoped>
    .middle{
        position absolute
        top 42%
        left 50% 
        transform translate(-50%,-50%)
        width 100%
        height 400px
        .swiper{
            width 100%
            height 100%
            .middle-l{
                .cd{
                    padding 0 20px
                    img{
                        width 100%
                        height 100%
                    }
                }
            }
            .scroll{
                height 100%
                p{
                    line-height 1.5
                    padding 7px 0
                    color #ff6700
                    font-size 14px
                    text-align center
                }
                p.active{
                    color red
                }
            }
        }
        .swiper-pagination{
            position absolute
            left 50%
            transform translateX(-50%)
            margin-top 3px 
            >>>.swiper-pagination-bullet{
                margin-left 5px
            }
        }
    }
</style>



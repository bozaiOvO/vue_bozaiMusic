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
                <div class="middle-r">
                    111
                </div>
            </swiper-slide>
        </swiper>
        <div class="swiper-pagination"></div> 
    </div>
</template>
<script>
export default {
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



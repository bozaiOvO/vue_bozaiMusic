<template>
    <div class="mini">
        <ul class="list" @click=fullScreenShow>
            <li class="icon">
                <img :src="currentSong.al.picUrl"  alt="">
            </li>
            <li class="text">
                <p class="name">{{currentSong.name}}</p>
                <p class="singer">{{currentSong.singerlist}}</p>
            </li>
            <li class="play" @click.stop=setPlaying>
                <i class="iconfont" v-if='playing'>&#xe62e;</i>
                 <i class="iconfont" v-else>&#xe664;</i>
            </li>
            <li class="control" @click.stop=showMiniList>
                <i class="iconfont">&#xe603;</i>
            </li>
        </ul>
        
    </div>
</template>
<script>

export default {
    props:{
        currentSong:{
        },
        playing:{

        }
    },
    methods:{
        fullScreenShow(){
            this.$emit('fullScreenShow')
        },
        setPlaying(){
            this.$emit('setPlaying')
        },
        showMiniList(){
            this.$emit('showMiniList')
        }
    }
}
</script>
<style lang="stylus" scoped>
    .mini{
        position: fixed;
        left: 0;
        bottom: 0;
        z-index: 180;
        width: 100%;
        height: 60px;
        background: hsla(0,0%,100%,.85);
        .list{
            display flex
            height 100%
            align-items: center;
            .icon{
                width 40px
                padding: 0 10px 0 20px;
                img{
                    width 100%
                }
            }
            .text{
                display flex
                flex-direction: column;
                justify-content: center;
                flex 1
                line-height 1.5
                .name{
                    font-size 14px
                }
                .singer{
                    font-size 12px
                }
            }
            .iconfont{
                font-size 35px
            }
            .control{
                margin 0 10px;
            }
        }
    }
</style>



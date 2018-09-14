<template>
    <div class="msk" @click=close>
        <div class="list-wrapper">
            <div class="list-header">
                <span class="mode" @click.stop=toggleMode>
                    <i v-if='mode==0' class="iconfont">&#xe649;</i>
                    <i v-else-if='mode==1' class="iconfont">&#xe608;</i>
                    <i v-else class="iconfont">&#xe672;</i>
                </span>
                <span class="rubbish" @click.stop=clearPlayList>
                    <i class="iconfont">&#xe7f5;</i>
                </span>
            </div>
            <bo-scroll class="scroll" ref='scrollLyric'>
                <ul>
                    <li v-for="(item,index) of playList" :key=item.id>
                       <span class="name" @click.stop=playThisSong(item,index)>{{item.name}}</span> 
                       <span class="ic">
                           <i class="iconfont">&#xe605;</i>
                           <i class="iconfont" @click.stop=clearThisSong(item)>&#xe7f5;</i>
                       </span>
                    </li>
                </ul>
            </bo-scroll>
            <div class="close">
                关闭
            </div>
        </div>
    </div>
   
</template>
<script>
import {mapState} from 'vuex'
import BoScroll from '@/components/scroll/scroll'
export default {
    props:{
        mode:{

        }
    },
    computed:{
        ...mapState(['playList'])
    },
    components:{
        BoScroll
    },
    methods:{
        close(){
            this.$emit('closeMiniList')
        },
        toggleMode(){
            this.$emit('toggleMode')
        },
        clearPlayList(){
            this.$emit('clearPlayList')
        },
        playThisSong(item,index){
            this.$emit('playThisSong',{item,index})
        },
        clearThisSong(item){
            this.$emit('clearThisSong',item)
        }
    }
}
</script>
<style lang="stylus" scoped>
    .msk{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 200;
        background-color: rgba(0,0,0,.3);
    }
    .list-wrapper{
        position absolute
        bottom 0
        left 0
        width: 100%;
        background #333
        color #fff
    }
    .list-header{
        display flex
        justify-content space-between
        padding 20px 10px
        .iconfont{
            font-size 30px
            color #fff
        }
    }
    .scroll{
        padding 0 10px
        max-height 240px
        overflow hidden
        li{
            display flex
            justify-content space-between
            align-items: center;
            height: 40px;
            padding: 0 30px 0 20px;
        }
        .iconfont{
            margin-left 10px
        }
    }
    .close{
        width 100%
        height 50px
        text-align center
        line-height 50px
        font-size 20px
        background #000
    }
</style>



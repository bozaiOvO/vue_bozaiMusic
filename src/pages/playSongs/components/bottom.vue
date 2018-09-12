<template>
    <div>
        <ul class="list">
            <li class="item mode" @click="toggleMode">
                <i v-if='mode==0' class="iconfont">&#xe649;</i>
                <i v-else-if='mode==1' class="iconfont">&#xe608;</i>
                <i v-else class="iconfont">&#xe672;</i>
            </li>
            <li class="item previous" @click=previousSong>
                <i class="iconfont">&#xe607;</i>
            </li>
            <li class="item play" @click=setPlaying>
                <i class="iconfont" v-if='playing'>&#xe62e;</i>
                 <i class="iconfont" v-else>&#xe664;</i>
            </li>
            <li class="item next" @click=nextSong>
                <i class="iconfont">&#xe606;</i>
            </li>
            <li class="item love">
                <i class="iconfont">&#xe605;</i>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:{
        mode:{
            type:Number,
            default:0
        },
        playing:{
            type:Boolean
        }
    },
    methods:{
        setPlaying(){
            this.$emit('setPlaying')
        },
        previousSong(){
            this.$emit('previousSong')
        },
        nextSong(){
            this.$emit('nextSong')
        },
        toggleMode(){
            this.$emit('toggleMode')
        }
    }
}
</script>
<style lang="stylus" scoped>
    .list{
        position absolute
        bottom 50px;
        width 100%
        display flex
        justify-content space-around
        .item{
            .iconfont{
                color rgba(0,0,0,.7)
                font-size 35px
            }
        }
    }
</style>



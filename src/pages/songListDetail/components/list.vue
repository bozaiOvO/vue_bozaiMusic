<template>
    <div class="box">
        <p class="smtitle">歌曲列表</p>
        <ul class="list">
            <li class="item" v-for="(item,index) of list" :key=item.id @click='play(item,index)'>
                <div class="count">
                    {{index+1}}
                </div>
                <div class="desc">
                    <p class="title">{{item.name}}</p>
                    <p class="singer">{{item.singerlist}}</p>
                </div>
                <div class="play">
                    <i class="iconfont">&#xe664;</i>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:{
        list:{
            type:Array
        }
    },
    methods:{
        play(item,index){
            this.$emit('play',this.list,index)
        }
    }
}
</script>
<style lang="stylus" scoped>
@import "~@/common/css/mixin.styl"
    .box{
        .smtitle{
            height: 23px;
            line-height: 23px;
            padding: 0 10px;
            font-size: 12px;
            color: #666;
            background-color: #eeeff0;
        }
        .list{
            padding-bottom 70px
            .item{
                margin-top 10px
                display flex
                justify-content space-between
                border-bottom 1px solid rgba(0,0,0,.1)
                .count{
                    align-self center
                    width 40px
                    text-align center
                    font-size 17px
                    color #999
                }
                .desc{
                    width 80%
                    line-height 1.5
                    
                    .title{
                        font-size 17px
                        no-wrap(1)
                    }
                    .singer{
                        no-wrap(1)
                        font-size 12px
                        color #888
                    }
                }
                .play{
                    margin-right 10px;
                    align-self center
                    .iconfont{
                        color #aaa
                        font-size 30px
                    }
                }
            }
        }
    }
</style>



<template>
    <div class="header">
        <div class="down" @click='miniShow'>
            <i class="iconfont">&#xe665;</i>
        </div>
        <div class="text">
            <p class="title">{{headerObj.name}}</p>
            <p class="author">{{headerObj.singerlist}}</p>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        headerObj:{
            type:Object,
            default:function(){
                return {
                    name:'还没有收到数据',
                    singerlist:'-'
                }
            }
        }
    },
    methods:{
        miniShow(){
            this.$emit('miniShow')
        }
    }
}
</script>
<style lang="stylus" scoped>
    .header{
        display flex
        .down{
            .iconfont{
                font-size 30px
                font-weight 800
                margin-left 20px
                line-height 1.5
            }
        }
        .text{
            padding-top 5px;
            width 80%
            text-align center
            line-height 1.5
            .title{
                font-size 16px
                font-weight 800
            }
            .author{
                font-size 12px
            }
        }
    }
</style>



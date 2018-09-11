<template>
    <div class="header">
        <div class="down">
            <i class="iconfont">&#xe665;</i>
        </div>
        <div class="text">
            <p class="title">{{headerObj.title}}</p>
            <p class="author">{{headerObj.author}}</p>
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
                    title:'还没有收到数据',
                    author:'-'
                }
            }
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



<template>
    <div class="header">
        <router-link class="return" to='/recommend'>
            <i class="iconfont">&#xe64e;</i>
        </router-link>
        <div class="title">
            {{title}}
        </div>
    </div>
</template>
<script>
export default {
    props:{
        title:{
            type:String,
            default:'等待加载哟'
        }
    }
}
</script>
<style lang="stylus" scoped>
@import "~@/common/css/mixin.styl"
    .header{
        display flex
        height 44px
        width 100%
        line-height 44px
        background-color #d44439
        .return{
            width 50px
            text-align center
            .iconfont{
                font-size 30px
                color #fff
            }
        }
       
        .title{
            no-wrap(1)
            margin-left 10px
            font-size 16px
            color #fff
        }
    }
</style>


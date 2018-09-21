<template>
    <div class="box">
        <div class="mask"></div>
        <div class="msg">
            <h2 class="title">提示</h2>
            <p class="text">{{msg}}</p>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        msg:{
            type:String,
            default:'提示'
        }
    }
}
</script>
<style lang="stylus" scoped>
    .box{

    }
    .mask{
        position fixed
        top 0px
        left 0px 
        width 100%
        height 100%
        background: #000; 
        opacity .5
        z-index 99
    }
    .msg{
        position fixed
        left 50%
        top 50% 
        transform translate(-50%,-50%)
        width 330px
        height 78px
        background-color: #fff;
        border-radius: 8px;
        box-sizing: border-box;
        border: 1px solid #ebeef5;
        padding: 14px 26px 14px 13px;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        z-index 100
        .title{
            font-weight: 700;
            font-size: 16px;
            color: #303133;
        }
        .text{
            font-size: 14px;
            line-height: 21px;
            margin: 6px 0 0;
            color: #606266;
        }
    }
</style>


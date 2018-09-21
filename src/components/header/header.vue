<template>
    <div class="header">
        <h1>波仔Music</h1> 
        <p class="name">用户名：{{userName1}}</p>
    </div>
</template>
<script>

export default {
    props:{
        userName:{
            type:String
        }
    },
    computed:{
        userName1(){
            return this.userName?this.userName:'您木有登陆哟..'
        }
    }
}
</script>
<style lang="stylus" scoped>
.header{
    position: relative;
    display flex
    justify-content space-between
    height: 44px;
    width: 100%;
    text-indent 20px
    background: #d44439;
    line-height: 44px;
     color: #f1f1f1;
}
.header h1{
    font-size 16px;
    font-weight: 700;
    letter-spacing: 3px;
}
.name{
    height 100%
    font-size 12px
    margin-right 20px
}
</style>



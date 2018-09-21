<template>
    <div class="login">
        <input type="text" placeholder="请输入账号" v-model="text">
        <input type="password" placeholder="请输入密码" v-model="password">
        <button  class="btn" @click=login>登陆</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            text:'',
            password:''
        }
    },
    methods:{
        login(){
            this.$emit('login',this.text,this.password)
        }
    }
}
</script>
<style lang="stylus" scoped>
    .login{
        display flex
        flex-flow row wrap
        justify-content center
        input{
            width 80%
            height 40px
            border 1px solid #dcdfe6
            border-radius 10px
            margin 30px auto
            font-size 14px
            text-indent 20px
        }
        input:nth-child(2){
            margin-top 0
        }
        .btn{
            width 60%
            height 40px
            background #f56c6c
            border-radius: 20px;
        }
    }
</style>



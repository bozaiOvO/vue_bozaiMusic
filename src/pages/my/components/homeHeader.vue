<template>
    <div class="box">
        <div class="bg" :style="{background:'url('+userProfile.backgroundUrl+')'}">
            <div class="img">
                <img :src="userProfile.avatarUrl" alt="">
            </div>
            <div class="profile">
                <div class="nickname">{{userProfile.nickname}}</div>
                <div class="tab-box">
                    <div class="dynamic"></div>
                    <div class="follow"></div>
                    <div class="fans"></div>
                </div>
            </div>
            <div class="out" @click="handleRemoveUser">
                退出
            </div>
        </div>
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
export default {
   computed:{
       ...mapState({
           userProfile:state=>state.loginModule.userProfile,
       })
   },
   data(){
       return {
           bg:null
       }
   },
   methods:{
       handleRemoveUser(){
           this.removeUser()
       },
       ...mapMutations('loginModule',[,
            'removeUser'
        ])
   }
}
</script>
<style lang="stylus" scoped>
    .bg{
        display flex
        flex-flow row wrap 
        height 100%
        justify-content center
        color #fff
        .img{
            margin-top 20px
            width 100px
            height 100px
            align-self center
            img{
                width 100%
                border-radius 50%
            }
        }
        .profile{
            margin-top 20px
            width 100%
            text-align center
            .nickname{
                font-size 14px
            }
        }
        .out{
            margin-top 20px
            width 100%
            height 50px
            text-align center
            line-height 50px;
            font-size 14px
            border-top 1px solid #fff
        }
    }
</style>


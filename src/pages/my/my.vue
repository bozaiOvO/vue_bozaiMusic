<template>
    <div class="my">
        <bo-home v-if=isShow ></bo-home>
        <div v-else>
            <bo-form @login='login'></bo-form>
            <bo-msg v-if=isMsgShow :msg=msg></bo-msg>
        </div>
        
    </div>
</template>
<script>
import BoHttp from '@/api/login'
import BoForm from './components/form'
import BoHome from './components/home'
import BoMsg from '@/components/msg/msg'
import {mapState, mapMutations} from 'vuex'
export default {
    components:{
        BoHome,
        BoForm,
        BoMsg
    },
    data(){
        return {
            isMsgShow:false,
            msg:'',
            userProfile:null,
        }
    },
    computed:{
        ...mapState({
            userId: state=> state.loginModule.userId,
        }),
        isShow(){
            return this.userId?true:false
        }
    },
    methods:{
        login(text,password){
            BoHttp.phoneLogin(text,password)
            .then((res)=>{
                this.msgText(res)
            })
        },
        msgText(res){
            if(res.data.msg){
                this.msg = res.data.msg
                 this.isMsgShow = true
                setTimeout(()=>{
                    this.isMsgShow = false
                },3000)
            }
            if(res.data.code==200){
                sessionStorage.setItem('bozaiMusicId',res.data.profile.userId);
                this.setUserId(res.data.profile.userId)
                this.setUserProfile(res.data.profile)
            }
        },
        ...mapMutations('loginModule',[
            'setUserId',
            'setUserProfile',
        ])
    }
}
</script>
<style lang="stylus" scoped>
    
</style>


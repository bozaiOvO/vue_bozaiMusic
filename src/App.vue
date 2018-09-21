<template>
  <div id="app">
    <bo-header :userName=userName></bo-header>
    <bo-tab></bo-tab>
    <bo-play-songs></bo-play-songs>
    <router-view/>
  </div>
</template>

<script>
import BoHttp from '@/api/login'
import {mapState,mapMutations} from 'vuex'
import BoTab from '@/components/tab/tab'
import BoHeader from '@/components/header/header'
import BoPlaySongs from '@/pages/playSongs/playSongs'
export default {
  name: 'App',
  data(){
    return {
      userName:'没有登陆欸'
    }
  },
  components:{
    BoTab,
    BoHeader,
    BoPlaySongs
  },
  computed:{
        ...mapState({
             userProfile: state => state.loginModule.userProfile,
        }),
  },
  created(){
    if(sessionStorage.getItem('bozaiMusicId')){
      var userId = sessionStorage.getItem('bozaiMusicId');
      this.setUserId(userId)
      BoHttp.getUserDetail(userId)
      .then(res=>{
        this.setUserProfile(res.data.profile)
        this.userName=this.userProfile.nickname
        })
      
    }
  },
  methods:{
    ...mapMutations('loginModule',[
        'setUserId',
        'setUserProfile'
    ])
  },
  watch:{
    userProfile(n,o){
      console.log(n,o)
      if(n==o){
        return 
      }else{
        if(n!=null){
           this.userName=n.nickname
        }else{
          this.userName='没有登陆欸'
        }
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>

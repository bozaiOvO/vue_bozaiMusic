<template>
    <div id="play" v-show=playList.length>
        <bo-header></bo-header>
        <div class="full-screen" v-show=fullScreen>

        </div>
        <div class="small-screen" v-show=!fullScreen>

        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
import BoHeader from './components/header'
export default {
    components:{
        BoHeader
    },
    computed:{
        ...mapState(['playList','fullScreen'])
    },
    watch:{
        playList(a,old){
            console.log(a)
            console.log(old)
        }
    }
}
</script>
<style lang="stylus" scoped>
    #play{
        position: fixed
        left: 0
        right: 0
        top: 0
        bottom: 0
        z-index: 999
        background: #fff
    }
</style>



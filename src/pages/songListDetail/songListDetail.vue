<template>
    <div class="detail">
        <bo-header :title='title'></bo-header>
        <bo-banner :bannerObj='bannerObj'></bo-banner>
        <bo-list
         :list='list'
         @play='play'
         ></bo-list>
    </div>
</template>
<script>
import {mapMutations,mapState} from 'vuex'
import BoHeader from './components/detailPageHeader'
import BoBanner from './components/banner'
import BoList from './components/list'
import BoHttp from '@/api/detailPage'
import {filterSinger} from '@/common/js/filter'
export default {
    components:{
        BoHeader,
        BoBanner,
        BoList
    },
    data(){
        return{
            title:'',
            list:[],
            bannerObj:{
                title:'',
                bg:'',
                tags:[],
                author:'',
                desc:''
            }
        }
    },
    computed:{
        ...mapState(['playing'])
    },
    created(){
        this.getSonglist()
    },
    methods:{
        getSonglist(){
            BoHttp.getSonglist(this.$route.params.id)
            .then((res)=>{
                console.log(res)
                this.dataFilter(res)
            })
        },
        dataFilter(res){
            this.title = res.data.playlist.name
            this.bannerObj.title = res.data.playlist.name
            this.bannerObj.bg = res.data.playlist.coverImgUrl
            this.bannerObj.tags = res.data.playlist.tags
            this.bannerObj.author = res.data.playlist.creator.nickname
            this.bannerObj.desc = res.data.playlist.description
            this.bannerObj.photo = res.data.playlist.creator.avatarUrl
            this.list = res.data.playlist.tracks
            this.list.forEach((item)=>{
                item.singerlist = filterSinger(item.ar)
            })
        },
        play(item,index){
            let url = ''
            this.playList(this.list)
            this.currentIndex(index)
            this.fullScreenFn(true)
            this.playingFn(true)
        },
        ...mapMutations({
            playList:'playList',
            currentIndex:'currentIndex',
            fullScreenFn:'fullScreen',
            playingFn:'playing'
        })
    }
}
</script>
<style lang="stylus" scoped>
    .detail{
        position: fixed;
        z-index: 100;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        height 100%
        overflow scroll
        background-color: #fff;
    }
</style>



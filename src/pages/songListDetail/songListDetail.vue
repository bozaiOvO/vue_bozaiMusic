<template>
    <div class="detail">
        <bo-header :title='title'></bo-header>
        <bo-banner :bannerObj='bannerObj'></bo-banner>
        <bo-list
         :list='songList'
         @play='play'
         ></bo-list>
    </div>
</template>
<script>
import {mapMutations,mapState,mapActions} from 'vuex'
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
        ...mapState(['playing','songList','playList'])
    },
    created(){
        this.getSonglist()
    },
    methods:{
        getSonglist(){
            BoHttp.getSonglist(this.$route.params.id)
            .then((res)=>{
                if(res.status==200){
                    console.log(res)
                    this.dataFilter(res)
                }
                
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
            var list = res.data.playlist.tracks.slice(0)
             var list1 = res.data.playlist.tracks.slice(0)
            // this.list = res.data.playlist.tracks
            this.songListFn(list)
            // this.list = this.songList
            this.playListFn(list1)
            this.songList.forEach((item)=>{
                item.singerlist = filterSinger(item.ar)
            })
        },
        play(list,index){
            var list = list.slice(0)
            this.selectPlay({
                list,
                index:index
            })
        },
        ...mapMutations({
            playListFn:'playList',
            currentIndex:'currentIndex',
            fullScreenFn:'fullScreen',
            playingFn:'playing',
            songListFn:'songList'
        }),
        ...mapActions([
            'selectPlay'
        ])
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



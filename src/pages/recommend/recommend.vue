<template>
    <div class="page">
        <bo-title title=推荐歌单></bo-title>
        <ul class="songs-list">
            <router-link tag="li" :to="'/recommend/'+item.id" class="item" v-for='item of songslist.slice(0,9)' :key=item.id >
                <div class="img">
                    <div class="mask"></div>
                    <img v-lazy=item.picUrl alt="">
                </div>
                <div class="text">
                    <p>{{item.name}}</p>
                </div>
            </router-link>
        </ul>
       <bo-title title=最新音乐></bo-title>
       <ul class="song-list">
            <li class="item" v-for='item of songlist' :key=item.id>
                <div class="left">
                    <p class="title">
                        {{item.name}} 
                        <span v-if="item.song.alias.length">
                            {{item.song.alias[0]}}
                        </span> 
                    </p>
                    <p class="singer">{{item.singerlist}}</p>
                </div>
                <div class="right">
                    <i class="iconfont">&#xe664;</i>
                </div>
            </li>
        </ul>
        <div>
        <router-view/>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
import boHttp from '@/api/recommend'
import boHttpLogin from '@/api/loginRecommend'
import {filterSinger} from '@/common/js/filter'
import BoTitle from './components/title'
export default {
    components:{
        BoTitle
    },
    computed:{
        ...mapState({
            userId:state=>state.loginModule.userId
        })
    },
    data(){
        return{
            songslist:[],
            songlist:[]
        }
    },
    created(){
        if(this.userId){
            boHttpLogin.getRecommendSongsList().then(res=>{
                this.songslist=res.data.recommend
            })
            boHttpLogin.getRecommendSongList().then(res=>{
                console.log('fff')
                console.log(res)
                this.songlist = res.data.result
                this.songlist.forEach((item)=>{
                    item.singerlist= filterSinger(item.song.artists)
                })
            })
        }else{
            boHttp.getRecommendSongsList().then(res=>{
                this.songslist=res.data.result
            })
            boHttp.getRecommendSongList().then(res=>{
                this.songlist = res.data.result
                this.songlist.forEach((item)=>{
                    item.singerlist= filterSinger(item.song.artists)
                })
            })
        }
       
    },
    methods:{
    }
}
</script>
<style scoped lang='stylus'>
@import "~@/common/css/mixin.styl"
    .page{
        padding-bottom 70px
    }
    .songs-list{
        display flex
        justify-content space-around
        flex-flow row wrap
        .item{
            width 28%
            margin-top 10px
            .img{
                width 100%
                img{
                    width 100%
                }
            }
            p{
                no-wrap(2)
                margin-top 5px
                line-height 1.5
            }
        }  
    }
    .song-list{
        .item{
            position relative
            display flex
            padding 5px 0
            margin 7px 10px
            justify-content space-between
            border-bottom 1px solid rgba(0,0,0,.1);
            .title{
                no-wrap(1)
                font-size: 17px;
                line-height 1.5
                span{
                    color: #888;
                }
            }
            .singer{
                font-size: 12px;
                line-height 1.5
                color: #888;
            }
            .right{
                .iconfont{
                    color #aaa
                    font-size 30px
                }
            }
        }
    }
</style>



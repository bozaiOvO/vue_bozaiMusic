<template>
    <div>
        <ul class="tab-list">
            <li class="item" 
            v-for="(item,index) of list" 
            :key=item.title 
            :class="{active:index==currentIndex}"
            @click='handleClick(index)'
            >
                <router-link :to=item.url>{{item.title}}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            list:[
                {
                    title:"推荐",
                    url:'/recommend'
                },
                {
                    title:"排行",
                    url:'/rank'
                },
                {
                    title:"歌手",
                    url:'/singer'
                },
                {
                    title:'我的',
                    url:'/my'
                }
            ],
            currentIndex:0
        }
    },
    methods:{
        handleClick(index){
            this.currentIndex = index
        }
    }
}
</script>
<style lang="stylus" scoped>
    .tab-list{
        display flex
        justify-content space-between
        background #d44439
        height 44px
        li{
            width 33.3%
            line-height 44px
            font-size 14px;
            text-align center
            a{
                display block
                height 100%
            }
        }
    }
    .item.active a{
        color #fff
        font-weight bold
        
    }
</style>



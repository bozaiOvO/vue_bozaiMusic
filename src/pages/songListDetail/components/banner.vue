<template>
    <div class="banner">
        <div class="bg"  :style="{ backgroundImage:'url('+bannerObj.bg+')'}"></div>
        <div class="main" >
            <div class="img" >
                <img :src="bannerObj.bg" alt="">
            </div>
            <div class="text">
                <p class="title">{{bannerObj.title}}</p>
                <p class="author">
                    <img class="photo" :src="bannerObj.photo" alt="">
                    {{bannerObj.author}}
                </p>
                <div class="tags">
                    标签:
                    <span v-for='(item,index) of bannerObj.tags' :key=index class="tag">
                        {{item}}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        bannerObj:{
            type:Object
        }
    }
}
</script>
<style lang="stylus" scoped>
    .banner{
        position relative
        height 200px
        overflow hidden
        .bg{
            position absolute
            top 0
            left 0
            width 100%
            height 100%
            background-repeat no-repeat
            background-position 50%
            background-size cover
            transform: scale(1.5)
            filter: blur(20px);
            z-index 1
        }
        .bg::after{
            position absolute
            left 0
            top 0 
            width 100%
            height 100%
            content ''
            background-color: rgba(0,0,0,.25);
        }
        .main{
            position absolute
            top 50% 
            left 50%
            transform  translate(-50%,-50%)
            z-index 2
            display flex
            .img{
                width 126px
                height 126px
                img{
                    width 100%
                    height 100%
                }
            }
            .text{
                width 210px
                height 126px
                margin-left: 16px;
                .title{
                    font-size: 17px;
                    line-height: 1.3;
                    color: #fefefe;
                }
                .author{
                    margin-top 10px
                    font-size 14px
                    color: hsla(0,0%,100%,.7);
                    .photo{
                        height 30px
                        width 30px
                        border-radius 50%
                    }
                }
                .tags{
                    margin-top 10px;
                    font-size 14px
                    line-height 1.5
                    color #fff
                    .tag{
                        display inline-block
                        margin-right 5px
                        font-size 12px
                        padding: 1px 8px;
                        border 1px solid  rgba(0,0,0,.1);
                        border-radius 20px
                    }
                }
            }
        }
    }
</style>



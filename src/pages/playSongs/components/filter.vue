<template>
    <div class="filter">
        <img :alt="bg"  :src="bg" >
    </div>
</template>
<script>
export default {
    props:{
        bg:{
            type:String,
            default:'图片暂时没有'
        }
    },
    computed:{
    }
}
</script>
<style lang="stylus" scoped>
    .filter{
        position absolute
        top 0
        left 0
        bottom 0
        right 0
        width 100%
        height 100%
        background-size cover
        opacity .8
        filter blur(20px)
        z-index -1
        img{
            width 100%
            height 100%
        }
    }
</style>


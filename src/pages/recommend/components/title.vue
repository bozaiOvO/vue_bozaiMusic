<template>
    <div>
        <h2>{{title}}</h2>
    </div>
</template>
<script>
export default {
   props:{
       title:{
           type:String,
           default:'等待加载'
       }
   }
}
</script>
<style lang="stylus" scoped>
    h2{
        height 60px
        line-height 60px
        text-align center
        font-size 18px
        font-weight 800
    }
</style>



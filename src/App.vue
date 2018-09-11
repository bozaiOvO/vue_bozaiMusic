<template>
  <div id="app">
    <bo-header></bo-header>
    <bo-tab></bo-tab>
    <bo-play-songs></bo-play-songs>
    <router-view/>
  </div>
</template>

<script>
import BoTab from '@/components/tab/tab'
import BoHeader from '@/components/header/header'
import BoPlaySongs from '@/pages/playSongs/playSongs'
export default {
  name: 'App',
  components:{
    BoTab,
    BoHeader,
    BoPlaySongs
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>

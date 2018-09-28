import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '@/pages/recommend/recommend'
import Singer from '@/pages/singer/singer'
import Rank from '@/pages/rank/rank'
import My from '@/pages/my/my'
import SongListDetail from '@/pages/songListDetail/songListDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Recommend
    },
    {
      path:'/recommend',
      component:Recommend,
      // children:[
      //   {
      //     path:':id',
      //     component:SongListDetail
      //   }
      // ]
    },
    {
      path:'/singer',
      component:Singer
    },
    {
      path:'/rank',
      component:Rank
    },
    {
      path:'/my',
      component:My
    },
    {
      path:'/songs/:id',
      component:SongListDetail,
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

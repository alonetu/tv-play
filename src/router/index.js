import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home'),
      children: [
        {
          path: 'vue-player-video',
          component: () => import('@/views/vue-player-video/')
        }
      ],
    },
  ]
})

export default router;
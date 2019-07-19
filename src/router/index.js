import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/main'
import Layout from '@/views/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      component: Layout,
      redirect: 'main',
      children: [
        {
          path: 'main',
          component: () => import('@/views/main'),
          name: 'Main',
          meta: { title: '首页', icon: 'dashboard', noCache: true, affix: true } // affix 表示默认固定打开
        },
        {
          path: 'about',
          component: () => import('@/views/about'),
          name: 'About',
          meta: { title: '关于', icon: 'about', noCache: true, affix: true } // affix 表示默认固定打开
        },
      ]
    }

  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/index.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',  // Enable this if you need.
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/404',
      component: () => import(/* webpackChunkName: "404" */ '@/views/404.vue'),
      meta: { hidden: true }
    },
    {
      path: '/',
      component: Layout,
      redirect: '/dashboard',
      children: [
        {
          path: 'dashboard',
          component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'),
          meta: {
            title: 'Dashboard',
            icon: 'dashboard'
          }
        }
      ]
    },
    {
      path: '/note',
      component: Layout,
      redirect: '/note/all-notes',
      children: [
        {
          path: 'all-notes',
          component: () => import(/* webpackChunkName: "all-notes" */ '@/views/note/all-notes.vue'),
          meta: {
            title: 'AllNote',
            icon: 'example'
          }
        }
      ]
    },
    {
      path: '/note-space',
      component: Layout,
      redirect: '/note-space/default',
      children: [
        {
          path: 'default',
          component: () => import(/* webpackChunkName: "space" */ '@/views/note/space.vue'),
          meta: {
            title: 'NoteSpace',
            icon: 'example'
          }
        }
      ]
    },
    {
      path: '/example',
      component: Layout,
      redirect: '/example/tree',
      meta: {
        title: 'Example',
        icon: 'example'
      },
      children: [
        {
          path: 'tree',
          component: () => import(/* webpackChunkName: "tree" */ '@/views/tree/index.vue'),
          meta: {
            title: 'tree',
            icon: 'tree'
          }
        },
        {
          path: 'table',
          component: () => import(/* webpackChunkName: "table" */ '@/views/table/index.vue'),
          meta: {
            title: 'Table',
            icon: 'table'
          }
        }
      ]
    },
    {
      path: '/form',
      component: Layout,
      children: [
        {
          path: 'index',
          component: () => import(/* webpackChunkName: "form" */ '@/views/form/index.vue'),
          meta: {
            title: 'Form',
            icon: 'form'
          }
        }
      ]
    },
    // {
    //   path: '/nested',
    //   component: Layout,
    //   redirect: '/nested/menu1',
    //   meta: {
    //     title: 'Nested',
    //     icon: 'nested'
    //   },
    //   children: [
    //     {
    //       path: 'menu1',
    //       component: () => import(/* webpackChunkName: "menu1" */ '@/views/nested/menu1/index.vue'),
    //       redirect: '/nested/menu1/menu1-1',
    //       meta: { title: 'Menu1' },
    //       children: [
    //         {
    //           path: 'menu1-1',
    //           component: () => import(/* webpackChunkName: "menu1-1" */ '@/views/nested/menu1/menu1-1/index.vue'),
    //           meta: { title: 'Menu1-1' }
    //         },
    //         {
    //           path: 'menu1-2',
    //           component: () => import(/* webpackChunkName: "menu1-2" */ '@/views/nested/menu1/menu1-2/index.vue'),
    //           redirect: '/nested/menu1/menu1-2/menu1-2-1',
    //           meta: { title: 'Menu1-2' },
    //           children: [
    //             {
    //               path: 'menu1-2-1',
    //               component: () => import(/* webpackChunkName: "menu1-2-1" */ '@/views/nested/menu1/menu1-2/menu1-2-1/index.vue'),
    //               meta: { title: 'Menu1-2-1' }
    //             },
    //             {
    //               path: 'menu1-2-2',
    //               component: () => import(/* webpackChunkName: "menu1-2-2" */ '@/views/nested/menu1/menu1-2/menu1-2-2/index.vue'),
    //               meta: { title: 'Menu1-2-2' }
    //             }
    //           ]
    //         },
    //         {
    //           path: 'menu1-3',
    //           component: () => import(/* webpackChunkName: "menu1-3" */ '@/views/nested/menu1/menu1-3/index.vue'),
    //           meta: { title: 'Menu1-3' }
    //         }
    //       ]
    //     },
    //     {
    //       path: 'menu2',
    //       component: () => import(/* webpackChunkName: "menu2" */ '@/views/nested/menu2/index.vue'),
    //       meta: { title: 'Menu2' }
    //     }
    //   ]
    // },
    {
      path: '/external-link',
      component: Layout,
      meta: {
        title: 'External Link',
        icon: 'link'
      },
      children: [
        {
          path: 'https://peaksong.gitee.io/blog/',
          meta: {
            title: 'Gitee Blog',
            icon: 'link'
          }
        },
        {
          path: 'https://peak-song.github.io/blog/',
          meta: {
            title: 'Github Blog',
            icon: 'link'
          }
        }
      ]
    },
    {
      path: '*',
      redirect: '/404',
      meta: { hidden: true }
    }
  ]
})

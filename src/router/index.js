import { createRouter, createWebHistory } from 'vue-router'
import page1view from '../views/page1.vue'
import page2view from '../views/page2.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'page1',
      component: page1view
    },
    {
      path: '/about',
      name: 'page2',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: page2view,
    }
  ]
})

export default router

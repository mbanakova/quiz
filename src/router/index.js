import { createRouter, createWebHistory } from 'vue-router'
import store from '../store/index.js'
import Start from '../views/Start.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
    }, {
      path: '/intro',
      name: 'Intro',
      component: () => import('../views/Intro.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/quiz',
      name: 'Quiz',
      component: () => import('../views/Quiz.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/results',
      name: 'Results',
      component: () => import('../views/Results.vue'),
      meta: { requiresAuth: true }
    }
  ]
})

// global nav guard
router.beforeEach(function (to, _, next) {
  if (to.meta.requiresAuth && !store.getters.getUserName) {
    next('/');
  } else {
    next();
  }
});

export default router

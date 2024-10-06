import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../views/Home.page.vue';
import JobsPage from '../views/Jobs.page.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsPage,
    },
  ],
});

export default router;

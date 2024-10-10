import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../views/Home.page.vue';
import JobsPage from '../views/Jobs.page.vue';
import JobPage from '../views/Job.page.vue';
import NotFoundPage from '../views/NotFound.page.vue';

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
    {
      path: '/jobs/:id',
      name: 'job',
      component: JobPage,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundPage,
    },
  ],
});

export default router;

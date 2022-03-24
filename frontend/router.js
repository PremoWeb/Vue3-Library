/*jshint esversion: 11 */
/*jshint -W030 */

import { createRouter, createWebHistory } from 'vue-router';

let router = new createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    { path: '/', component: () => import('./pages/Welcome.vue') },
    
    // Not found
    { path: '/:catchAll(.*)', component: () => import('./pages/Error404.vue') },
  ],
});

router.beforeEach((to, from, next) => {
  if ( to.matched.some(record => record.meta.requiresAuth )) {
    if ( store.getters.isLoggedIn ) {
      next();
      return;
    }
    next('/login');
  } else {
    next();
  }
});

export default router;

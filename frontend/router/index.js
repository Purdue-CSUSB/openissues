import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/containers/Home';
import Terms from '@/containers/Terms';
import PageNotFound from '@/containers/PageNotFound';
import Privacy from '@/containers/Privacy';
import LoginCallbackHandler from '@/containers/LoginCallbackHandler';

Vue.use(Router);

const router = new Router({
  mode: 'history', // enable HTML5 history mode
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/terms',
      name: 'Terms',
      component: Terms,
    },
    {
      path: '/privacy',
      name: 'Privacy Policy',
      component: Privacy,
    },
    {
      path: '/login',
      name: 'LoginCallbackHandler',
      component: LoginCallbackHandler,
    },
    {
      path: '*',
      name: 'PageNotFound',
      component: PageNotFound,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.path === '/_=_') {
    return next(false);
  }
  return next();
});

export default router;

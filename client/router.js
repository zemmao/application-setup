import Auth from '@/components/auth';
import get from 'lodash/get';
import Index from '@/components';
import Login from '@/components/auth/Login';
import NotFound from '@/components/commmon/NotFound';
import Router from 'vue-router';
import store from './store';
import Users from '@/components/users';
import Vue from 'vue';

Vue.use(Router);

const fallbackRoute = {
  path: '*',
  name: 'not-found',
  component: NotFound
};

const router = new Router({
  routes: [{
    path: '/auth',
    name: 'auth',
    component: Auth,
    children: [{
      path: 'login',
      name: 'login',
      component: Login
    }]
  }, {
    path: '/',
    name: 'home',
    component: Index,
    meta: { auth: true },
    children: [{
      path: '/users',
      name: 'users',
      component: Users
    }]
  }, fallbackRoute]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(it => it.meta.auth) && !get(store.state, 'auth.user')) {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router;

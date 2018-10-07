import { persist } from '@/common/store/plugins';
import auth from '@/store/modules/auth';
import plugins from '@/store/plugins';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { auth },
  plugins: [persist('auth/login', 'auth.user', 'APP_USER')]
});

import api from '@/api/auth';

export const login = ({ commit }, credentials) => {
  return api.login(credentials).then(user => commit('login', user));
};

export const logout = () => {
  return api.logout()
    .then(() => {
      window.localStorage.removeItem('APP_USER');
      window.location.reload();
    });
};

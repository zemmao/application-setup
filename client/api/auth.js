import request from './request';

const url = {
  login: '/users/login'
};

function login(credentials) {
  return request.post(url.login, credentials)
    .then(({ data: { data } }) => {
      window.localStorage.setItem('APP_TOKEN', data.token);
      return data.user;
    });
}

function logout() {
  window.localStorage.removeItem('APP_TOKEN');
  return Promise.resolve(true);
}

export default {
  login,
  logout
};

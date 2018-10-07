const state = {
  user: JSON.stringify(window.localStorage.getItem('APP_USER') || null)
};

export default {
  namespaced: true,
  state
};

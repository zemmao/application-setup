import get from 'lodash/get';

const persist = (mutation, field, storageKey) => {
  return store => {
    store.subscribe((mutation, store) => {
      if (mutation.type !== mutation) return;
      window.localStorage.setItem(storageKey, JSON.stringify(get(store, field)));
    });
  };
};

export { persist };

const KEY = 'user';

export const saveUser = (user) => (
  sessionStorage.setItem(KEY, JSON.stringify(user))
);

export const fetchInitialValues = () => (
  JSON.parse(sessionStorage.getItem(KEY)) || null
);

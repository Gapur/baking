import axios from 'axios';

const KEY = 'user';

export const saveUser = (user) => {
  sessionStorage.setItem(KEY, JSON.stringify(user));
  axios.defaults.headers.common['X-CSRF-TOKEN'] = user.token;
};

export const fetchInitialValues = () => {
  const initialValues = JSON.parse(sessionStorage.getItem(KEY));
  axios.defaults.headers.common['X-CSRF-TOKEN'] = initialValues ? initialValues.token : null;
  return initialValues || null;
};

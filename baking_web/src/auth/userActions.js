import axios from 'axios';

export const login = (payload) => (dispatch) => (
  axios.post('/login', payload)
    .then((res) => {
      console.log(res);
      dispatch({ type: 'LOGIN', payload: res.data });
      axios.defaults.headers.common['X-CSRF-TOKEN'] = res.data.token;
    })
);

export const signup = (payload) => (dispatch) => (
  axios.post('/signup', payload)
    .then((res) => dispatch({ type: 'SIGNUP', payload: res.data }))
);

export const logout = () => (dispatch) => (
  axios.delete('/logout')
    .then((res) => dispatch({ type: 'LOGOUT' }))
);

export const updateUserInfo = (payload) => (dispatch) => (
  axios.put('/account', { customer: payload })
    .then((res) => dispatch({ type: 'UPDATE_ACCOUNT', payload: res.data }))
);

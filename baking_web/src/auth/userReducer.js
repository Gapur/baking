export default (state = null, action) => {
  switch (action.type) {
    case 'UPDATE_ACCOUNT':
    case 'SIGNUP':
    case 'LOGIN': {
      return action.payload;
    }
    case 'LOGOUT': {
      return null;
    }
  }
  return state;
}

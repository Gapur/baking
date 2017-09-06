import {
  FETCH_NOTES_SUCCESS,
} from '../shared/constants/actionTypes';

const INITIAL_STATE = {
  notes: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_NOTES_SUCCESS:
      return { ...state, notes: action.payload };
    default:
      return state;
  }
};

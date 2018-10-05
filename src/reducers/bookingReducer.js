import { FETCH_BOOKING, CREATE_BOOKING } from '../actions/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_BOOKING:
      return action.payload;
    case CREATE_BOOKING:
      return;
    default:
      return state;
  }
};

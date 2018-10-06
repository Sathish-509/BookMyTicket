import { FETCH_BOOKING, CREATE_BOOKING } from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_BOOKING:
      return state;
    case CREATE_BOOKING:
      return [...state, action.payload];
    default:
      return state;
  }
};

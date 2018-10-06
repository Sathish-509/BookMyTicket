import { FETCH_EVENTS, CREATE_EVENT } from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_EVENTS:
      return state;
    case CREATE_EVENT:
      return [...state, action.payload];
    default:
      return state;
  }
};

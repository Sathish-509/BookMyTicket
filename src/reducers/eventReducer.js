import { FETCH_EVENTS, CREATE_EVENT } from '../actions/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_EVENTS:
      return action.payload;
    case CREATE_EVENT:
      return;
    default:
      return state;
  }
};

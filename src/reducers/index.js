import { combineReducers } from 'redux';
import booking from './bookingReducer';
import event from './eventReducer';

export default combineReducers({
  booking,
  event
});

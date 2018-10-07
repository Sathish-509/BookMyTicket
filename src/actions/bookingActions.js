import { bookingsRef } from '../config/firebase';
import { FETCH_BOOKING } from './actionTypes';

export const createBooking = newBooking => async dispatch => {
  bookingsRef.push().set(newBooking);
};

export const fetchBooking = () => async dispatch => {
  bookingsRef.on('value', snapshot => {
    let listofbookings = [];
    snapshot.forEach(function(childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      listofbookings.push(...childData);
    });
    dispatch({
      type: FETCH_BOOKING,
      payload: listofbookings
    });
  });
};

/*
export function fetchBooking() {
  return { type: types.FETCH_BOOKING };
};

export function createBooking(bookingDetails) {
  return { type: types.CREATE_BOOKING, payload: bookingDetails };
}
*/

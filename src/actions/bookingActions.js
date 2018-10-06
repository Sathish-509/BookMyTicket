import * as types from './actionTypes';

export function fetchBooking() {
  return { type: types.FETCH_BOOKING };
}

export function createBooking(bookingDetails) {
  return { type: types.CREATE_BOOKING, payload: bookingDetails };
}

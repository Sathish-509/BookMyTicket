import * as types from './actionTypes';

export function fetchEvents() {
  return { type: types.FETCH_EVENTS };
}

export function createEvent(eventDetails) {
  return { type: types.CREATE_EVENT, payload: eventDetails };
}

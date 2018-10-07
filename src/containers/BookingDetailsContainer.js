import React from 'react';
import SelectTickets from './../components/chooseSeats/SelectTickets';
import * as bookingActions from './../actions/bookingActions';
import * as actions from './../actions/actionTypes';
import { connect } from 'react-redux';

class BookingDetailsContainer extends React.Component {
  constructor() {
    super();
    this.selectedTickets = this.selectedTickets.bind(this);
  }

  componentWillMount() {
    this.props.fetchBooking();
  }

  selectedTickets(bookingDetails) {
    this.props.createBooking(bookingDetails);
  }

  render() {
    return (
      <div>
        <SelectTickets selectedTickets={this.selectedTickets} />
      </div>
    );
  }
}

export default connect(
  null,
  bookingActions
)(BookingDetailsContainer);

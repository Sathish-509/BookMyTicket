import React from 'react';
import SelectTickets from './../components/chooseSeats/SelectTickets';
import * as bookingActions from './../actions/bookingActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class BookingDetailsContainer extends React.Component {
  constructor() {
    super();
    this.selectedTickets = this.selectedTickets.bind(this);
  }

  selectedTickets(bookingDetails) {
    debugger;
    this.props.actions.createBooking(bookingDetails);
  }

  render() {
    return (
      <div>
        <SelectTickets selectedTickets={this.selectedTickets} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...bookingActions }, dispatch)
  };
}

export default connect(
  null,
  mapDispatchToProps
)(BookingDetailsContainer);

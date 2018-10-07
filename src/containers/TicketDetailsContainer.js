import React from 'react';
import { connect } from 'react-redux';
import TicketDetails from './../components/TicketInformation/TicketDetails';
import * as bookingActions from './../actions/bookingActions';

class TicketDetailsContainer extends React.Component {
  componentWillMount() {
    this.props.fetchBooking();
  }

  render() {
    this.props.listOfBookings;
    return (
      <div>
        <TicketDetails listOfTickets={this.props.listOfBookings} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    listOfBookings: state.booking
  };
}

export default connect(
  mapStateToProps,
  bookingActions
)(TicketDetailsContainer);

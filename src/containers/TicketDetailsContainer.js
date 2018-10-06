import React from 'react';
import { connect } from 'react-redux';

class TicketDetailsContainer extends React.Component {
  render() {
    debugger;
    this.props.listOfBookings;
    return <div>Ticket Information</div>;
  }
}

function mapStateToProps(state, ownProps) {
  return {
    listOfBookings: state.booking
  };
}

export default connect(mapStateToProps)(TicketDetailsContainer);

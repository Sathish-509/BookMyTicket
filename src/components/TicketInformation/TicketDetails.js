import React from 'react';

class TicketDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      listOfTickets: [
        { name: 'Sathish', age: 30, seatNo: 'Middle1' },
        { name: 'AAA', age: 25, seatNo: 'Middle2' },
        { name: 'BBB', age: 22, seatNo: 'Middle3' }
      ]
    };
  }

  render() {
    let bookings = this.props.listOfTickets;
    let ticketList = bookings.map((booking, index) => {
      return (
        <div className="offset-sm-3 field-set" style={{ width: '600px' }}>
          <div className="row">
            <div className="col-sm-12">
              <div>
                <label style={{ fontWeight: 'bold' }}>Name: </label>
                <span className="view">{booking.name}</span>
              </div>
            </div>
          </div>
          <div className="row" style={{ marginTop: '37px' }}>
            <div className="col-sm-3">
              <div>
                <label style={{ fontWeight: 'bold' }}>Age:</label>
                <span className="view">{booking.age}</span>
              </div>
            </div>
            <div className="col-sm-4">
              <div>
                <label style={{ marginRight: '10px', fontWeight: 'bold' }}>
                  Seat No
                </label>
                <span className="view">{booking.seatNo}</span>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return <div style={{ marginLeft: '100px' }}>{ticketList}</div>;
  }
}
export default TicketDetails;

import React from 'react';
import DrawGrid from './DrawGrid';

class SelectTickets extends React.Component {
  /* istanbul ignore next */
  constructor() {
    super();
    this.state = {
      seat: [
        'Front1',
        'Front2',
        'Front3',
        'Middle1',
        'Middle2',
        'Middle3',
        'Back1',
        'Back2',
        'Back3'
      ],
      seatAvailable: [
        'Front1',
        'Front2',
        'Front3',
        'Middle1',
        'Middle2',
        'Middle3',
        'Back1',
        'Back2',
        'Back3'
      ],
      seatReserved: []
    };
  }

  onClickData(seat) {
    if (this.state.seatReserved.indexOf(seat) > -1) {
      this.setState({
        seatAvailable: this.state.seatAvailable.concat(seat),
        seatReserved: this.state.seatReserved.filter(res => res != seat)
      });
    } else {
      this.setState({
        seatReserved: this.state.seatReserved.concat(seat),
        seatAvailable: this.state.seatAvailable.filter(res => res != seat)
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Seat Reservation System</h1>
        <DrawGrid
          seat={this.state.seat}
          available={this.state.seatAvailable}
          reserved={this.state.seatReserved}
          onClickData={this.onClickData.bind(this)}
        />
      </div>
    );
  }
}
export default SelectTickets;

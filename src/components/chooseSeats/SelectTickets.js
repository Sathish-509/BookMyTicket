import React from 'react';
import DrawGrid from './DrawGrid';
import { Button } from 'react-bootstrap';
import FieldSetComponent from '../usedetails/FieldSetComponent';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';

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
      seatReserved: [],
      isLoading: false,
      isPaneOpen: false,
      chosenDetails: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.onFieldSetSave = this.onFieldSetSave.bind(this);
    this.close = this.close.bind(this);
  }

  onFieldSetSave(updatedDetails) {
    this.setState({ isPaneOpen: false });
    debugger;
    this.props.selectedTickets(updatedDetails);
  }

  onClickData(seat) {
    if (this.state.seatReserved.indexOf(seat) > -1) {
      this.setState({
        seatAvailable: this.state.seatAvailable.concat(seat),
        seatReserved: this.state.seatReserved.filter(res => res !== seat),
        chosenDetails: this.state.chosenDetails.filter(
          res => res.seatNo !== seat
        )
      });
    } else {
      this.setState({
        seatReserved: this.state.seatReserved.concat(seat),
        seatAvailable: this.state.seatAvailable.filter(res => res !== seat),
        chosenDetails: this.state.chosenDetails.concat({ seatNo: seat })
      });
    }
  }
  handleClick() {
    this.setState({ isPaneOpen: true });
  }
  close() {
    this.setState({ showModal: false });
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div>
        <h1>Choose your seat</h1>
        <DrawGrid
          seat={this.state.seat}
          available={this.state.seatAvailable}
          reserved={this.state.seatReserved}
          onClickData={this.onClickData.bind(this)}
        />
        <Button
          bsStyle="primary"
          disabled={isLoading}
          onClick={!isLoading ? this.handleClick : null}
        >
          Enter User Information
        </Button>
        <a href="/ticketdetails">CheckOut</a>
        <div>
          <SlidingPane
            isOpen={this.state.isPaneOpen}
            title="Enter User Details"
            subtitle=""
            width="500px"
            onRequestClose={() => {
              // triggered on "<" on left top click or on outside click
              this.setState({ isPaneOpen: false });
            }}
          >
            <div>
              <FieldSetComponent
                chosenDetails={this.state.chosenDetails}
                onFieldSetSave={this.onFieldSetSave}
              />
            </div>
            <br />
          </SlidingPane>
        </div>
      </div>
    );
  }
}
export default SelectTickets;

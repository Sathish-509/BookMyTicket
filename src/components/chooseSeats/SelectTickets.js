import React from 'react';
import DrawGrid from './DrawGrid';
import { Button } from 'react-bootstrap';
import FieldSetComponent from '../usedetails/FieldSetComponent';
import Modal from 'react-modal';
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
      showuserDetails: false,
      showModal: false,
      isPaneOpen: false,
      chosenDetails: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.close = this.close.bind(this);
  }

  componentDidMount() {
    Modal.setAppElement(this.el);
  }
  onFieldSetSave(updatedDetails) {
    debugger;
    console.log(updatedDetails);
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
    this.setState({ showuserDetails: true, showModal: true, isPaneOpen: true });
  }
  close() {
    this.setState({ showModal: false });
  }

  render() {
    const { isLoading } = this.state;
    /*let chosenDetails  = [
      {
        seatNo: '2'
      },
      {
        seatNo: '3'
      }
    ];*/
    debugger;

    return (
      <div>
        <h1>Seat Reservation System</h1>
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
          Primary
        </Button>
        <div>
          <SlidingPane
            isOpen={this.state.isPaneOpen}
            title="Hey, it is optional pane title.  I can be React component too."
            subtitle="Optional subtitle."
            width="500px"
            onRequestClose={() => {
              // triggered on "<" on left top click or on outside click
              this.setState({ isPaneOpen: false });
            }}
          >
            <div>
              And I am pane content. BTW, what rocks?
              <FieldSetComponent
                chosenDetails={this.state.chosenDetails}
                onFieldSetSave={this.onFieldSetSave}
              />
            </div>
            <br />
          </SlidingPane>
        </div>
        {/*
        <div>
        <Modal className="modal-container" 
          show={this.state.showModal} 
          onHide={this.close}
          animation={true} 
          bsSize="medium"
        >

          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <FieldSetComponent chosenDetails={chosenDetails} onFieldSetSave={this.onFieldSetSave}/> :
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
            <Button bsStyle="primary">Save changes</Button>
          </Modal.Footer>         
        </Modal> 
        </div> */}
      </div>
    );
  }
}
export default SelectTickets;

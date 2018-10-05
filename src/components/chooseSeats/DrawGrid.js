import React from 'react';
import AvailableList from './AvailableList';
import ReservedList from './ReservedList';

class DrawGrid extends React.Component {
  render() {
    return (
      <div className="container">
        <h2 />
        <table className="grid">
          <tbody>
            <tr>
              {this.props.seat.map(row => (
                <td
                  className={
                    this.props.reserved.indexOf(row) > -1
                      ? 'reserved'
                      : 'available'
                  }
                  key={row}
                  onClick={e => this.onClickSeat(row)}
                >
                  {row}{' '}
                </td>
              ))}
            </tr>
          </tbody>
        </table>

        <AvailableList available={this.props.available} />
        <ReservedList reserved={this.props.reserved} />
      </div>
    );
  }

  onClickSeat(seat) {
    this.props.onClickData(seat);
  }
}
export default DrawGrid;

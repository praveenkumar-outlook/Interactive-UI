import React, {Component} from "react";

class CardBackView extends Component {
  render() {
    const {cvv} = this.props;

    return (
      <g className="card-bank-view">
        <rect className="card-bar"
          x="0" y="30"
          height="40"
          width="350"
        />
        <text className="card-text cvv"
          x="307" y="90">
          CVV
        </text>
        <rect className="card-name-holder"
          x="40" y="100"
          rx="5" ry="5"
          height="25"
          width="270"
        />
        <text className="card-text cvv-number"
          x="305" y="117">
          {cvv}
        </text>
      </g>
    );
  }
}

export default CardBackView;

import React, {Component} from "react";
import Chip from "./chip.png";
import Logo from "./logo.png";

class CardFrontView extends Component {
  render() {
    const {number, name, date} = this.props;

    return (
      <g className="card-front-view">
        <rect className="chip"
          x="25" y="27"
          rx="3" ry="3"
          height="35" width="40"
        />
        <image href={Chip}
          x="25" y="25"
          height="40" width="40"
        />
        <image href={Logo}
          x="275" y="25"
          height="40" width="60"
        />
        <text className="card-text"
          x="25" y="100">
          {number}
        </text>
        <text className="card-text name"
          x="25" y="135">
          {name}
        </text>
        <text className="card-text date"
          x="25" y="170">
          {date}
        </text>
      </g>
    );
  }
}

export default CardFrontView;

import React, {Component} from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import * as d3 from "d3";
import {Button} from "@material-ui/core";

class CricketField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fielders: 9,
      outerFielders: 5,
      innerFielders: 9,
      width: 0
    };
  };

  componentDidMount() {
    this.el = $(ReactDOM.findDOMNode(this));
    d3.select(".outer-field")
      .on("click", this.handleOuterField);
    d3.select(".inner-field")
      .on("click", this.handleInnerField);
    window.addEventListener("orientationchange", this.reloadWindow);
    this.setState({
      width: this.el.width()
    });
  }

  componentWillUnmount() {
    window.removeEventListener("orientationchange", this.reloadWindow);
  }

  reloadWindow = () => {
    window.location.reload();
  }

  handleOuterField = () => {
    if (this.state.fielders && this.state.outerFielders) {
      const position = d3.mouse(d3.event.target);
      d3.select(".field-chart")
        .append("circle")
        .attr("class", "fielder")
        .attr("cx", position[0])
        .attr("cy", position[1])
        .attr("r", 10)
        .attr("fill", "#f00")
        .attr("stroke", "#000")
        .attr("stroke-width", 1)
        .on("dblclick", () => this.deleteFielder("outer"));
      this.setState({
        fielders: this.state.fielders - 1,
        outerFielders: this.state.outerFielders - 1
      });
    } else {
      alert("Outer Fielders count exceeded!!!!");
    }
  }

  handleInnerField = () => {
    if (this.state.fielders && this.state.innerFielders) {
      const position = d3.mouse(d3.event.target);
      d3.select(".field-chart")
        .append("circle")
        .attr("class", "fielder")
        .attr("cx", position[0])
        .attr("cy", position[1])
        .attr("r", 10)
        .attr("fill", "#f00")
        .attr("stroke", "#000")
        .attr("stroke-width", 1)
        .on("dblclick", () => this.deleteFielder("inner"));
      this.setState({
        fielders: this.state.fielders - 1,
        innerFielders: this.state.innerFielders - 1
      });
    } else {
      alert("Fielders count exceeded!!!!");
    }
  }

  deleteFielder(field) {
    d3.select(d3.event.target).remove();
    this.setState({
      fielders: this.state.fielders + 1,
      [`${field}Fielders`]: this.state[`${field}Fielders`] + 1
    });
  }

  handleSave = () => {
    const uri = "data:image/svg+xml;base64," + window.btoa(
      unescape(
        encodeURIComponent(
          new XMLSerializer().serializeToString(this.el.find(".field-chart")[0])
        )
      )
    );
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    const svg = new Image();
    svg.src = uri;
    svg.onload = () => {
      canvas.height = svg.height;
      canvas.width = this.state.width;
      context.drawImage(svg, 0, 0);
      const png = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = "fielding";
      link.href = png;
      document.body.appendChild(link);
      link.click();
    };
  }

  resetFielders = () => {
    d3.selectAll(".fielder").remove();
    this.setState({
      fielders: 9,
      outerFielders: 5,
      innerFielders: 9
    });
  }

  render() {
    return (
      <div className="ui-cricket-field">
        <Button variant="outlined" color="primary"
          onClick={this.handleSave}>Save As Image</Button>
        <Button variant="outlined" color="primary"
          onClick={this.resetFielders}>Reset</Button>
        <svg id="cricket-field" className="field-chart" width="100%" height="500">
          <circle className="outer-field" cx="50%" cy="50%" r="200"
            fill="#93e376" stroke="#000" strokeWidth="1"></circle>
          <circle className="inner-field" cx="50%" cy="50%" r="100"
            fill="#549d3a" stroke="#000" strokeWidth="1"></circle>
          <line x1="50%" x2="50%" y1="0%" y2="100%"
            stroke="#000" strokeWidth="1" strokeDasharray="1, 1"></line>
          <foreignObject x="calc(50% - 150)" y="50%" width="50" height="40">
            <span>OFF SIDE</span>
          </foreignObject>
          <foreignObject x="calc(50% + 125)" y="50%" width="50" height="40">
            <span>ON SIDE</span>
          </foreignObject>
          <rect x={(this.state.width / 2) - 20} y="calc(50% - 50)"
            width="40" height="80"
            fill="#e3e27e" stroke="#000" strokeWidth="1"></rect>
          <circle cx={this.state.width / 2} cy="calc(50% - 50)" r="10"
            fill="#0ff" stroke="#000" strokeWidth="1"></circle>
          <circle cx={this.state.width / 2} cy="calc(50% + 30)" r="10"
            fill="#0ff" stroke="#000" strokeWidth="1"></circle>
        </svg>
      </div>
    );
  }
}

export default CricketField;

import React, {Component} from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import * as d3 from "d3";
import {
  Button,
  Dialog,
  Grid,
  TextField
} from "@material-ui/core";

class CricketField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fielders: 9,
      outerFielders: 5,
      innerFielders: 9,
      onFielders: 5,
      width: 0,
      dialog: false,
      position: [],
      circle: "",
      name: ""
    };
  };

  componentDidMount() {
    this.el = $(ReactDOM.findDOMNode(this));
    d3.select(".outer-field")
      .on("click", () => this.handleOpenModal("outer"));
    d3.select(".inner-field")
      .on("click", () => this.handleOpenModal("inner"));
    window.addEventListener("orientationchange", this.reloadWindow);
    this.setState({
      width: this.el.width()
    });
  }

  handleOpenModal = (circle) => {
    this.setState({
      dialog: true,
      position: d3.mouse(d3.event.target),
      circle: circle
    });
  }

  handleCloseModal = (event) => {
    event.preventDefault();
    this.setState({
      dialog: false
    });
    this.handleField(this.state.circle, this.state.position);
  }

  componentWillUnmount() {
    window.removeEventListener("orientationchange", this.reloadWindow);
  }

  handleName = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  reloadWindow = () => {
    window.location.reload();
  }

  handleField = (circle, position) => {
    let {onFielders} = this.state;
    if (this.state.fielders && this.state[`${circle}Fielders`]) {
      if (position[0] > (this.state.width / 2)) {
        if (onFielders) {
          onFielders -= 1;
        } else {
          alert("On side Fielders count exceeded!!!!");
          return;
        }
      }
      d3.select(".field-chart")
        .append("circle")
        .attr("class", "fielder")
        .attr("cx", position[0])
        .attr("cy", position[1])
        .attr("r", 10)
        .attr("fill", "#f00")
        .attr("stroke", "#000")
        .attr("stroke-width", 1);
      d3.select(".field-chart")
        .append("text")
        .attr("class", "fielder-name")
        .attr("x", position[0])
        .attr("y", position[1] - 15)
        .attr("text-anchor", "middle")
        .attr("font-size", 11)
        .attr("font-weight", 700)
        .text(this.state.name);
      this.setState({
        fielders: this.state.fielders - 1,
        [`${circle}Fielders`]: this.state[`${circle}Fielders`] - 1,
        onFielders,
        name: ""
      });
    } else {
      let message;
      if (!this.state.fielders) {
        message = "Fielders count exceeded!!!!";
      } else if (!this.state.outerFielders) {
        message = "Outer Circle Fielders count exceeded!!!!";
      }
      alert(message);
    }
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
    d3.selectAll(".fielder-name").remove();
    this.setState({
      fielders: 9,
      outerFielders: 5,
      innerFielders: 9,
      onFielders: 5
    });
  }

  render() {
    return (
      <div className="ui-cricket-field">
        <Dialog open={this.state.dialog}>
          <form onSubmit={this.handleCloseModal}>
            <Grid container alignItems="center" style={{padding: '10px'}}>
              <Grid item>
                <TextField
                  label="Player Name"
                  value={this.state.name}
                  onChange={this.handleName}
                  margin="normal"
                  autoFocus
                />
              </Grid>
              <Grid item>
                <Button type="submit">OK</Button>
              </Grid>
            </Grid>
          </form>
        </Dialog>
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

import React, {Component} from "react";
import ReactDOM from "react-dom";
import * as d3 from "d3";
import $ from "jquery";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  RadioGroup,
  Radio
} from "@material-ui/core";
import "./style.scss";

class DrawEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      simulate: false,
      count: 1,
      path: "M",
      color: ""
    }
  }

  componentDidMount() {
    d3.select(".chart")
      .on("mousedown", () => this.triggerSimulation(true))
      .on("touchstart", () => this.triggerSimulation(true))
      .on("touchend", () => this.triggerSimulation(false))
      .on("mousemove", this.simulateDraw)
      .on("touchmove", this.simulateDraw);
  }

  colorChange = (event) => {
    this.setState({
      color: event.target.value
    });
  }

  triggerSimulation = (simulate) => {
    let {count, path, color} = this.state;
    if (simulate) {
      d3.select(".drawings")
        .append("path")
        .attr("class", `drawing path-${count} ${color}`)
        .on("touchend", () => this.triggerSimulation(false))
        .on("mouseup", () => this.triggerSimulation(false));
    } else {
      count += 1;
      path = "M";
    }
    this.setState({
      simulate: simulate,
      count: count,
      path: path
    });
  }

  simulateDraw = () => {
    const {simulate, count} = this.state;
    let {path} = this.state;
    if (simulate) {
      const position = d3.mouse(d3.event.target);
      if (path === "M") {
        path = path + position[0] + " " + position[1];
      } else {
        path = path + "L" + position[0] + " " + position[1];
      }
      d3.select(`.path-${count}`)
        .attr("d", `${path}`);
      this.setState({
        path: path
      });
    }
  }

  render() {
    return (
      <div className="ui-draw-editor">
        <Grid container>
          <Grid item md={8}>
            <svg width="100%" height="400">
              <rect width="100%" height="100%" rx="5"
                className="chart" />
              <g className="drawings"></g>
            </svg>
          </Grid>
          <Grid item md={4}>
            <Grid container justify="center">
              <Grid item>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Choose a color</FormLabel>
                  <RadioGroup
                    aria-label="Color"
                    value={this.state.color}
                    onChange={this.colorChange}
                    >
                    <FormControlLabel value="" control={<Radio className="radio black" />} label="Black" />
                    <FormControlLabel value="red" control={<Radio className="radio red" />} label="Red" />
                    <FormControlLabel value="blue" control={<Radio className="radio blue" />} label="Blue" />
                    <FormControlLabel value="green" control={<Radio className="radio green" />} label="Green" />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default DrawEditor;

import React, {Component} from "react";
import ReactDOM from "react-dom";
import * as d3 from "d3";
import $ from "jquery";
import pulse from "./pulse";
import "./style.scss";

class PulseTransition extends Component {
  componentDidMount() {
    this.el = $(ReactDOM.findDOMNode(this));
    setInterval(() => {
      this.renderPulse();
    }, 1600);
    this.renderGrid();
  }

  renderGrid = () => {
    const xGrid = [3, 13, 23, 33, 43, 53, 63, 73, 83, 93],
      yGrid = [15, 50, 85],
      width = this.el.width(),
      x = d3.scaleLinear().range([0, width]).domain([0, 100]),
      y = d3.scaleLinear().range([0, 250]).domain([0, 100]);

    d3.select(".grid")
      .selectAll(".x-grid")
      .data(xGrid)
      .enter()
      .append("line")
      .attr("class", "grid-line x-grid")
      .attr("x1", (d) => x(d))
      .attr("x2", (d) => x(d))
      .attr("y1", 0)
      .attr("y2", 250);

    d3.select(".grid")
      .selectAll(".y-grid")
      .data(yGrid)
      .enter()
      .append("line")
      .attr("class", "grid-line y-grid")
      .attr("x1", 0)
      .attr("x2", width)
      .attr("y1", (d) => y(d))
      .attr("y2", (d) => y(d));
  }

  renderPulse = () => {
    const height = 250,
      width = this.el.width(),
      x = d3.scaleLinear().range([0, width]).domain([0, 100]),
      y = d3.scaleLinear().range([0, 250]).domain([0, 100]),
      line = d3.line()
        .x((d) => x(d.x))
        .y((d) => y(d.y))
        .curve(d3.curveMonotoneX);

    d3.select(".pulse")
      .datum(pulse)
      .attr("d", line)
      .call((path) => {
        path.transition()
          .duration(1200)
          .attrTween("stroke-dasharray", this.pulseTransition);
      });

    setTimeout(() => {
      d3.select(".pulse")
        .attr("d", null);
    }, 1200);
  }

  pulseTransition() {
    const length = this.getTotalLength(),
      index = d3.interpolateString("0," + length, length + "," + length);
      return (t) => index(t);
  }

  render() {
    return (
      <div className="ui-pulse-transition">
        <svg width="100%" height="250">
          <rect className="background" x="0" y="0" width="100%" height="100%" />
          <defs>
            <filter id="shadow">
              <feOffset result="offOut" in="SourceGraphic" />
              <feGaussianBlur result="blurOut" in="offOut" stdDeviation="10" />
              <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
            </filter>
          </defs>
          <path className="pulse" filter="url(#shadow)" />
          <g className="grid" />
        </svg>
      </div>
    );
  }
}

export default PulseTransition;

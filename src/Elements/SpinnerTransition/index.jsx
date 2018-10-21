import React, {Component} from "react";
import ReactDOM from "react-dom";
import * as d3 from "d3";
import $ from "jquery";
import "./style.scss";

class SpinnerTransition extends Component {
  componentDidMount() {
    this.el = $(ReactDOM.findDOMNode(this));
    setInterval(() => {
      this.animateSpinner();
    }, 2000);
    this.renderSpinner();
  }

  renderSpinner = () => {
    const width = this.el.width(),
      height = 250,
      radius = 100,
      arc = d3.arc(),
      container = d3.select(".spinner-container");

    container
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    container
      .selectAll(".spinner")
      .data([{
        innerRadius: radius * 0.75,
        outerRadius: radius * 0.75,
        startAngle: 0,
        endAngle: 0.66 * Math.PI
      }, {
        innerRadius: radius * 0.5,
        outerRadius: radius * 0.5,
        startAngle: 0,
        endAngle: 0.5 * Math.PI
      }, {
        innerRadius: radius * 0.25,
        outerRadius: radius * 0.25,
        startAngle: 0,
        endAngle: 0.33 * Math.PI
      }])
      .enter()
      .append("path")
      .attr("class", (data, index) => {
        if (index % 2) {
          return "spinner odd";
        }
        return "spinner"
      })
      .attr("d", arc);
  }

  spinTransition = (spinner) => {
    spinner.transition()
      .duration((data, index) => (index * 500) + 1000)
      .attrTween("transform", () =>
        d3.interpolateString("rotate(0)", "rotate(360)")
      )
  }

  animateSpinner = () => {
    const container = d3.select(".spinner-container");
    container
      .selectAll(".spinner")
      .call(this.spinTransition);
  }

  render() {
    return (
      <div className="ui-spinner-transition">
        <svg width="100%" height="250">
          <g className="spinner-container">
            <circle className="spinner-center"></circle>
          </g>
        </svg>
      </div>
    );
  }
}

export default SpinnerTransition;

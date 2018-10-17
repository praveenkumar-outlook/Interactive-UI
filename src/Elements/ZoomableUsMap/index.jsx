import React, {Component} from "react";
import ReactDOM from "react-dom";
import * as d3 from "d3";
import $ from "jquery";
import "./style.scss";
import US from "./us";

class ZoomableUsMap extends Component {
  constructor() {
    super();
    this.state = {
      centered: null
    };
  }

  componentDidMount() {
    this.el = $(ReactDOM.findDOMNode(this));
    const height = 500,
      width = this.el.find("#zoomable-us-map").width(),
      map = d3.select("#zoomable-us-map .map"),
      projection = d3.geoAlbersUsa()
        .scale(1070)
        .translate([width / 2, 250]),
      path = d3.geoPath()
        .projection(projection);

    map.selectAll("path")
      .data(US.features)
      .enter()
      .append("path")
      .attr("d", path)
      .attr("class", "state")
      .on("click", this.zoomMap);
  }

  zoomMap = (d) => {
    const height = 500,
      width = this.el.find("#zoomable-us-map").width(),
      map = d3.select("#zoomable-us-map .map"),
      projection = d3.geoAlbersUsa()
        .scale(1070)
        .translate([width / 2, 250]),
      path = d3.geoPath()
        .projection(projection);
    let x, y, k,
      {centered} = this.state;

    if (d && centered !== d) {
      const centroid = path.centroid(d);
      x = centroid[0];
      y = centroid[1];
      k = 4;
      centered = d;
    } else {
      x = width / 2;
      y = height / 2;
      k = 1;
      centered = null;
    }

    this.setState({
      centered: centered
    });

    map.selectAll("path")
      .classed("active", (d) => {
        return centered && d === centered;
      });

    map.transition()
      .duration(750)
      .attr("transform", `translate(${width / 2}, ${height / 2})scale(${k})translate(${-x}, ${-y})`)
      .style("stroke-width", 1.5 / k + "px");
  }

  render() {
    return (
      <div className="ui-zoomable-us-map">
        <svg id="zoomable-us-map" width="100%" height="500">
          <g className="map" />
          <rect className="background"
            x="0" y="0" width="100%" height="500" />
        </svg>
      </div>
    );
  }
}

export default ZoomableUsMap;

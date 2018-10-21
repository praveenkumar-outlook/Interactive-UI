import ZoomableUsMap from "../Elements/ZoomableUsMap";
import PulseTransition from "../Elements/PulseTransition";
import SpinnerTransition from "../Elements/SpinnerTransition";

export default [{
  key: "zoomable-us-map",
  path: "/zoomable-us-map",
  component: ZoomableUsMap,
  description: "Zoomable US Map using transform in d3.js",
  tags: ["d3", "svg", "transform"]
}, {
  key: "pulse-transition",
  path: "/pulse-transition",
  component: PulseTransition,
  description: "Pulse-Transition in d3.js",
  tags: ["d3", "svg", "transition"]
}, {
  key: "spinner-transition",
  path: "/spinner-transition",
  component: SpinnerTransition,
  description: "Spiner-Transition in d3.js",
  tags: ["d3", "svg", "transition"]
}];

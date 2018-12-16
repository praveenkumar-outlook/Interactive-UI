import ZoomableUsMap from "../Elements/ZoomableUsMap";
import PulseTransition from "../Elements/PulseTransition";
import SpinnerTransition from "../Elements/SpinnerTransition";
import CustomerCard from "../Elements/CustomerCard";
import DrawEditor from "../Elements/DrawEditor";

export default [{
  key: "zoomable-us-map",
  path: "/zoomable-us-map",
  component: ZoomableUsMap,
  description: "Zoomable US Map using transform in d3.js",
  tags: ["d3", "svg", "transform"],
  date: "10/17/2018"
}, {
  key: "pulse-transition",
  path: "/pulse-transition",
  component: PulseTransition,
  description: "Pulse-Transition in d3.js",
  tags: ["d3", "svg", "transition"],
  date: "10/19/2018"
}, {
  key: "spinner-transition",
  path: "/spinner-transition",
  component: SpinnerTransition,
  description: "Spiner-Transition in d3.js",
  tags: ["d3", "svg", "transition"],
  date: "10/21/2018"
}, {
  key: "customer-card",
  path: "/customer-card",
  component: CustomerCard,
  description: "Customer card generation by user",
  tags: ["html", "form"],
  date: "10/21/2018"
}, {
  key: "draw-editor",
  path: "/draw-editor",
  component: DrawEditor,
  description: "Editor to draw and download as image",
  tags: ["svg", "d3", "html"],
  date: "12/16/2018"
}];

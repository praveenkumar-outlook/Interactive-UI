import Loadable from "react-loadable";
import Loader from "../Components/Loader";

export default [{
  key: "zoomable-us-map",
  path: "/zoomable-us-map",
  component: Loadable({
    loader: () => import("../Elements/ZoomableUsMap"),
    loading: Loader
  }),
  description: "Zoomable US Map using transform in d3.js",
  tags: ["d3", "svg", "transform"],
  date: "10/17/2018"
}, {
  key: "pulse-transition",
  path: "/pulse-transition",
  component: Loadable({
    loader: () => import("../Elements/PulseTransition"),
    loading: Loader
  }),
  description: "Pulse-Transition in d3.js",
  tags: ["d3", "svg", "transition"],
  date: "10/19/2018"
}, {
  key: "spinner-transition",
  path: "/spinner-transition",
  component: Loadable({
    loader: () => import("../Elements/SpinnerTransition"),
    loading: Loader
  }),
  description: "Spiner-Transition in d3.js",
  tags: ["d3", "svg", "transition"],
  date: "10/21/2018"
}, {
  key: "customer-card",
  path: "/customer-card",
  component: Loadable({
    loader: () => import("../Elements/CustomerCard"),
    loading: Loader
  }),
  description: "Customer card generation by user",
  tags: ["html", "form"],
  date: "10/21/2018"
}, {
  key: "draw-editor",
  path: "/draw-editor",
  component: Loadable({
    loader: () => import("../Elements/DrawEditor"),
    loading: Loader
  }),
  description: "Editor to draw and download as image",
  tags: ["svg", "d3", "html"],
  date: "12/16/2018"
}];

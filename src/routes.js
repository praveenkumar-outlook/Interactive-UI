import React from "react";
import {HashRouter as Router, Route} from "react-router-dom";
import App from "./Components/App";

const AppRouter = () => (
  <Router basename="/">
    <Route path="/" component={App}></Route>
  </Router>
);
export default AppRouter;

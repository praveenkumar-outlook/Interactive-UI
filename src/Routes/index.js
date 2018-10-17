import React from "react";
import {HashRouter as Router, Route} from "react-router-dom";
import App from "../App";
import Elements from "./elements";

const AppRouter = () => (
  <Router basename="/">
    <div className="ui-route">
      {
        Elements.map((route) => (
          <Route
            exact
            key={route.key}
            path={route.path}
            component={route.component}
          />
        ))
      }
      <Route exact path="/" component={App}></Route>
    </div>
  </Router>
);
export default AppRouter;

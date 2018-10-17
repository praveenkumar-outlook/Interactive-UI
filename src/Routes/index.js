import React from "react";
import {HashRouter as Router, Route} from "react-router-dom";
import {Grid} from "@material-ui/core";
import App from "../App";
import Elements from "./elements";

const AppRouter = () => (
  <Router basename="/">
    <div className="ui-route">
      <Grid container justify="center" spacing={16}>
        <Grid item md={10}>
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
        </Grid>
      </Grid>
    </div>
  </Router>
);
export default AppRouter;

import React from "react";
import {Link, HashRouter as Router, Route} from "react-router-dom";
import {
  Avatar,
  Button,
  Chip,
  Grid,
  Typography
} from "@material-ui/core";
import App from "../App";
import Header from "../Components/Header";
import Elements from "./elements";
import "./common.scss";

const AppRouter = () => (
  <Router basename="/">
    <div className="ui-route">
      <Header />
      <Grid container justify="center" spacing={16}>
        <Grid item xs={12} sm={12} md={10}>
          {
            Elements.map((route) => (
              <Route
                exact
                key={route.key}
                path={route.path}
                render={() =>
                  <Grid container>
                    <Grid item xs={12} sm={12} md={12}>
                      <Grid className="margin-tb-20" container
                        justify="space-between">
                        <Grid item>
                          <Grid container>
                            <Grid item>
                              <Typography variant="h6" color="inherit">
                                {route.key.toUpperCase()}
                              </Typography>
                            </Grid>
                            <Grid item>
                              {
                                route.tags.map((tag) => (
                                  <Chip
                                    className="margin-l-10"
                                    key={tag.toUpperCase()}
                                    avatar={<Avatar>{tag.slice(0, 1)}</Avatar>}
                                    label={tag}
                                  />
                                ))
                              }
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Button variant="outlined">
                            <Link to="/">Back</Link>
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                      <route.component />
                    </Grid>
                  </Grid>
                }
              />
            ))
          }
          <Grid item>
            <Route exact path="/" component={App}></Route>
          </Grid>
        </Grid>
      </Grid>
    </div>
  </Router>
);
export default AppRouter;

import React, {Component} from "react";
import {Avatar, CircularProgress, Grid} from "@material-ui/core";

class Loader extends Component {
  render() {
    return (
      <Grid className="ui-loader" container
        justify="center" alignItems="center">
        <Grid item>
          <CircularProgress size={40} />
        </Grid>
      </Grid>
    );
  }
}

export default Loader;

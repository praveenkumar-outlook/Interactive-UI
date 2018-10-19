import React, {Component} from "react";
import {
  AppBar,
  Badge,
  Grid,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from "@material-ui/core";
import {
  AccountCircle,
  Mail,
  More,
  Notifications,
  Search
} from "@material-ui/icons";
import "./style.scss";

class Header extends Component {
  render() {
    return (
      <AppBar className="ui-header" position="static">
        <Toolbar>
          <Grid container>
            <Grid item md={10}>
              <Typography className="title" variant="h6" color="inherit" noWrap>
                Interactive-UI
              </Typography>
            </Grid>
            <Grid item>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <Mail />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <Notifications />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <AccountCircle />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;

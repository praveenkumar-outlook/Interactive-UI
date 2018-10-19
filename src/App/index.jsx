import React from "react";
import {Grid} from "@material-ui/core";
import ElementCard from "../Components/ElementCard";
import Elements from "../Routes/elements";
import "./style.scss";

class App extends React.Component {
  render() {
    return (
      <div className="ui-app">
        <Grid container>
          {
            Elements.map((element) => (
              <Grid item xs={12} sm={6} md={4}
                key={element.key}>
                <ElementCard
                  attributes={element}
                  />
              </Grid>
            ))
          }
        </Grid>
      </div>
    );
  }
}

export default App;

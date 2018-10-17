import React from "react";
import ElementCard from "../Components/ElementCard";
import Elements from "../Routes/elements";
import "./style.scss";

class App extends React.Component {
  render() {
    return (
      <div className="ui-app">
        {
          Elements.map((element) => (
            <ElementCard
              key={element.key}
              attributes={element}
            />
          ))
        }
      </div>
    );
  }
}

export default App;

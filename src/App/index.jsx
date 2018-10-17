import React from "react";
import ElementCard from "../Components/ElementCard";
import Elements from "../Routes/elements";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <div className="app">
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

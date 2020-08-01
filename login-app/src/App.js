import React, { Component } from "react";
import "./App.css";
import FormValidation from "./form/FormValidation";
class App extends Component {
  state = {
    visible: true,
  };

  render() {
    return (
      <div className="App">
        <FormValidation />
      </div>
    );
  }
}

export default App;

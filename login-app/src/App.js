import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateExercise from "./components/create-exercise.component";

function App() {
  return (
    <Router>
      <div className="container">
        <br />

        <Route path="/" exact component={CreateExercise} />
      </div>
    </Router>
  );
}

export default App;

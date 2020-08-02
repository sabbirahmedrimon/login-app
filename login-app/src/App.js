import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component";
import CreateUser from "./components/create-user.component";
import CreateName from "./components/create-name.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
        <br />
        <Route path="/user" component={CreateUser} />
        <Route path="/signup" exact component={CreateName} />
      </div>
    </Router>
  );
}

export default App;

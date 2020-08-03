import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component";
import CreateLogin from "./components/create-login.component";
import CreateSignup from "./components/create-signup.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
        <br />
        <Route path="/user" component={CreateLogin} />
        <Route path="/signup" exact component={CreateSignup} />
      </div>
    </Router>
  );
}

export default App;

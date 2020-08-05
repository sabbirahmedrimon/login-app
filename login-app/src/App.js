import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component";
import CreateSignup from "./components/create-signup.component";
import CreateLogin from "./components/create-login.component";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/signup" exact component={CreateSignup} />
        <Route path="/user" component={CreateLogin} />
        <Route exact path="/profile" component={Profile} />
      </div>
    </Router>
  );
}

export default App;

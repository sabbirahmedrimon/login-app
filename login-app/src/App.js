import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateNavbar from "./components/create-navbar-component";
import CreateHome from "./components/create-home.component";
import CreateLogin from "./components/create-login.component";
import CreateSignUp from "./components/create-signup.component";
import CreateUser from "./components/create-user.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <CreateNavbar />
          <Route exact path="/" component={CreateHome} />
          <div className="container">
            <Route exact path="/register" component={CreateSignUp} />
            <Route exact path="/login" component={CreateLogin} />
            <Route exact path="/profile" component={CreateUser} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

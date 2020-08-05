import React, { Component } from "react";
import jwt_decode from "jwt-decode";

class CreateUser extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      errormessage: ''
    };
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    try {
      const decoded = jwt_decode(token);
      this.setState({
        email: decoded.email,
        name: decoded.name,
      });
    } catch (errors) {
      this.setState({
        email: " Email or password doesn't match",
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center"> Personal Details</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Name</td>
                <td>{this.state.name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.state.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default CreateUser;

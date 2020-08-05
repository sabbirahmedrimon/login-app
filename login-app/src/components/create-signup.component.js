import React, { Component } from "react";
import { register } from "./create.functions.component";

export default class CreateSignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
    };

    register(newUser).then((res) => {
      this.props.history.push(`/login`);
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Signup</h1>
              <div className="form-group">
                <label> First name</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  name="firstname"
                  placeholder="Enter your first name"
                  value={this.state.firstname}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label>Last name</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  name="lastname"
                  placeholder="Enter your lastname name"
                  value={this.state.lastname}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label>Email </label>
                <input
                  type="email"
                  required
                  className="form-control"
                  name="email"
                  placeholder="Enter your email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  required
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Signup
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

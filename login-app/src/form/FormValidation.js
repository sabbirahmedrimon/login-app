import React from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
  nameError: "",
  emailError: "",
  passwordError: "",
};

export default class FormValidation extends React.Component {
  state = initialState;

  handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    let passwordError = "";

    if (!this.state.name) {
      nameError = "Name can't be blank";
    }

    if (!this.state.email.includes("@")) {
      emailError = "Invalid email";
    }

    if (emailError || nameError) {
      this.setState({ emailError, nameError });
      return false;
    }
    if(emailError || nameError || passwordError){
      this.setState({ emailError, nameError, passwordError});
      return "login failed";
      
    }
    

    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);

      // clear form
      this.setState(initialState);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Name:
            <input
              name="name"
              placeholder="Full Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>

          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.nameError}
          </div>
        </div>
        <div>
          <label>
            Email:
            <input
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>

          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.emailError}
          </div>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>

          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.passwordError}
          </div>
        </div>
        <button type="submit">Login</button>
      </form>
    );
  }
}

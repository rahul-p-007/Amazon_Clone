import React, { Component } from "react";

import "./Login.css";

import GoogleButton from "react-google-button";

class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);

    if (!e.target.email.value) {
      alert("Email is required");
    } else if (!e.target.email.value) {
      alert("Valid email is required");
    } else if (!e.target.password.value) {
      alert("Password is required");
    } else if (
      e.target.email.value === "me@example.com" &&
      e.target.password.value === "123456"
    ) {
      alert("Successfully logged in");
      e.target.email.value = "";
      e.target.password.value = "";
    } else {
      alert("Wrong email or password combination");
    }
  };

  handleClick = (e) => {
    e.preventDefault();

    alert("Goes to registration page");
  };

  render() {
    return (
      <div className="App_center">
        <div className="App">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
            className="logo"
            alt="Business view - Reports"
          />
          <form className="form" onSubmit={this.handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="nome@email.com.br"
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" />
            </div>
            <button className="primary">Enter</button>
          </form>
          <div className="google">
            <GoogleButton
              className="google-button"
              onClick={() => {
                console.log("Google button clicked");
              }}
            />
          </div>
          <button className="secondary" onClick={this.handleClick}>
            Sign Up
          </button>
        </div>
      </div>
    );
  }
}

export default Login;

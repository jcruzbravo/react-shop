import React from "react";
import '../styles/Login.scss';

const Login = () => {
  return (
    <div className="login">
      <div className="form-container">
        <img
          src="./assets/logos/coffe-and-code.jpg"
          alt="logo"
          className="logo"
        />
        <form action="/" className="form">
          <label for="email" className="label">
            Email address
          </label>
          <input
            type="text"
            id="email"
            placeholder="platzi@example.com"
            className="input input-email"
          />
          <label for="password" className="label">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="*********"
            className="input input-password"
          />
          <input
            type="submit"
            value="Log in"
            className="primary-button login-button"
          />
          <a href="/">Forgot my password</a>
        </form>
        <button className="secondary-button signup-button">Sign up</button>
      </div>
    </div>
  );
};

export default Login;

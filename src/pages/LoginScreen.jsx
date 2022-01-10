import React, { useState } from "react";
import GoogleButton from "react-google-button";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { emailAndPasswordLogin, googleLogin } from "../actions/auth";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = data;
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleGoogleLogin = () => {
    dispatch(googleLogin());
  };

  const handleEmailLogin = (e) => {
    e.preventDefault();
    if (email.trim() === "" || !email.trim().includes("@")) {
      return;
    }
    if (password.trim().length < 6) {
      return;
    }

    dispatch(emailAndPasswordLogin(email, password));
  };

  return (
    <div className="container">
      <h3>Login page</h3>
      <hr />
      <div className="row container">
        <form onSubmit={handleEmailLogin} className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">email</i>
              <input
                onChange={handleChange}
                value={email}
                name="email"
                id="icon_prefix1"
                className="materialize-textarea"
                type="text"
              ></input>
              <label htmlFor="icon_prefix1">Email</label>
            </div>

            <div className="input-field col s12">
              <i className="material-icons prefix">vpn_key</i>
              <input
                id="icon_prefix2"
                onChange={handleChange}
                value={password}
                name="password"
                className="materialize-textarea"
                type="password"
              ></input>
              <label htmlFor="icon_prefix2">Password</label>
            </div>
          </div>
          <button className="btn blue" type="submit">
            Enviar
          </button>
          <hr />
          <GoogleButton type="light" onClick={handleGoogleLogin} />
          <Link to="/auth/register">Register in the platform</Link>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;

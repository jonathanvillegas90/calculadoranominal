import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../actions/auth";

const RegisterScreen = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: "",
    password: "",
    password2: "",
    username: "",
  });

  const { email, password, password2, username } = data;
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleRegister = (e) => {
    e.preventDefault();

    if (email.trim() === "" || !email.trim().includes("@")) {
      return;
    }
    if (username.trim().length < 2) {
      return;
    }
    if (password.trim().length < 6) {
      return;
    } else {
      if (password.trim() !== password.trim()) {
        return;
      }
    }

    dispatch(register(email, password, username));
  };

  return (
    <div className="container">
      <h3>Login page</h3>
      <hr />
      <div className="row container">
        <form onSubmit={handleRegister} className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">email</i>
              <input
                onChange={handleChange}
                value={email}
                name="email"
                id="icon_prefix1"
                className="materialize-textarea"
                type="email"
              ></input>
              <label htmlFor="icon_prefix1">Email</label>
            </div>
            <div className="input-field col s12">
              <i className="material-icons prefix">assignment_ind</i>
              <input
                onChange={handleChange}
                value={username}
                name="username"
                id="icon_prefix2"
                className="materialize-textarea"
                type="text"
              ></input>
              <label htmlFor="icon_prefix2">Username</label>
            </div>

            <div className="input-field col s12">
              <i className="material-icons prefix">vpn_key</i>
              <input
                onChange={handleChange}
                value={password}
                name="password"
                id="icon_prefix3"
                className="materialize-textarea"
                type="password"
              ></input>
              <label htmlFor="icon_prefix3">Password</label>
            </div>
            <div className="input-field col s12">
              <i className="material-icons prefix">vpn_key</i>
              <input
                onChange={handleChange}
                value={password2}
                name="password2"
                id="icon_prefix4"
                className="materialize-textarea"
                type="password"
              ></input>
              <label htmlFor="icon_prefix4">Confirm password</label>
            </div>
          </div>
          <button className="btn blue" type="submit">
            Enviar
          </button>
          <hr />
          <Link to="/auth/login">Login in the Acount</Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterScreen;

import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../actions/auth";

const NavBar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <>
      <nav className="green">
        <div className="nav-wrapper">
          <span className="brand-logo">Calculadora Nominal</span>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <button onClick={handleLogout} className="btn red">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

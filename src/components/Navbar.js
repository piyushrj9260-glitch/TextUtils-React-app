import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg ${
        props.mode === "dark" ? "navbar-dark" : "navbar-light"
      }`}
      style={{
        backgroundColor: props.mode === "dark" ? "#212529" : "#f8f9fa",
      }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>

        <div className="navbar-nav flex-row">
          {/* <Link className="nav-link px-3" to="/">
            Home
          </Link> */}
          <a className="nav-link px-3" href="#">
            Home
          </a>

          {/* <Link className="nav-link px-3" to="/about">
            {props.aboutText}
          </Link> */}
          <a className="nav-link px-3" href="/about">
            {props.aboutText}
          </a>
        </div>

        <div className="form-check form-switch ms-auto">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="darkModeSwitch"
            checked={props.mode === "dark"}
            onChange={props.toggleMode}
          />

          <label
            className="form-check-label"
            htmlFor="darkModeSwitch"
            style={{
              color: props.mode === "dark" ? "#fff" : "#212529",
            }}
          >
            Enable DarkMode
          </label>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
};

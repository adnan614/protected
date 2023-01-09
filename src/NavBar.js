import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  let navigate = useNavigate();

  let activeStyle = {
    color: "red",
    textDecoration: "none",
  };

  let notActive = {
    color: "blue",
    textDecoration: "none",
  };

  const handleLogout = () => {
    localStorage.removeItem("login");
    navigate("/login");
  };

  return (
    <div>
      <ul style={{ display: "flex", justifyContent: "space-around" }}>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : notActive)}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : notActive)}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : notActive)}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
        <button style={{ cursor: "pointer" }} onClick={handleLogout}>
          Logout
        </button>
      </ul>
    </div>
  );
};

export default NavBar;

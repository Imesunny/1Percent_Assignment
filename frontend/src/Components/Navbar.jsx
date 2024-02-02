import React from "react";
import { NavLink } from "react-router-dom";
import "../Modules/Navbar.css";

export const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="container">
          <NavLink to="/login" className="navele">
            Login
          </NavLink>

          <NavLink to="/" className="navele">
            SignUp
          </NavLink>
          
          <NavLink to="/home" className="navele">
            Home
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

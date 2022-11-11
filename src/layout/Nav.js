import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const navStyle = { color: "white", margin: "20px" };

  return (
    <nav className="navbar navbar-dark bg-dark">
      <h1>Online Jobs</h1>
      <ul>
        <Link style={navStyle} to="/">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/admin">
          <li>Admin</li>
        </Link>

        <Link style={navStyle} to="/freelancer">
          <li>Freelancer</li>
        </Link>
        <Link style={navStyle} to="/recruiter">
          <li>Recruiter</li>
        </Link>
        <Link style={navStyle} to="/Login">
          <li>Login</li>
        </Link>
        <Link style={navStyle} to="/registration">
          <li>Register</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;

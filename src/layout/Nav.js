import React from "react";
import {Link} from "react-router-dom";


const Nav = () => {
  const navStyle = { color: "white" };
  
  return (
    <nav className="navbar navbar-dark bg-dark">
      <h1>Online Jobs</h1>
      <ul>
        <Link style={navStyle} to="/">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/bookmarked_freelancer">
          <li>Bookmarked Freelancer</li>
        </Link>
        <Link style={navStyle} to="/bookmarked_by">
          <li>Bookmarked Job</li>
        </Link>
        <Link style={navStyle} to="/feedback">
          <li>Feedback</li>
        </Link>
        <Link style={navStyle} to="/freelancer">
          <li>Freelancer</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;

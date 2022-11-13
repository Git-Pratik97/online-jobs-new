import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const navStyle = { color: "white", marginRight: "30px", marginLeft: "5px"};

  return (
    <nav className="navbar navbar-dark bg-dark d-flex justify-content-around">
      <h1>Online Jobs</h1>
      <ul>
      <div class="d-inline-flex justify-content-start">
  <input type="text" class="form-control" placeholder="Search Box" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button class="btn btn-outline-info" type="button" id="button-addon2">Search</button>
</div>
        <Link style={navStyle} to="/">
          <li>Home</li>
        </Link>
        
        {/* <Link style={navStyle} to="/admin">
          <li>Admin</li>
        </Link>
    
        <Link style={navStyle} to="/freelancer">
          <li>Freelancer</li>
        </Link>
        <Link style={navStyle} to="/recruiter">
          <li>Recruiter</li>
        </Link> */}
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

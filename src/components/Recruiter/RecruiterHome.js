import React from "react";
import { Link } from "react-router-dom";

function RecruiterHome() {
  return (
    <div className="container overflow-hidden text-center">
  <div className="row gx-5">
    <div className="card">
      <div className="card-header">
        <h2>RecruiterHome</h2>
      </div>
      <br/>
      <div id="list-example" className="list-group">
      <div className="card-title">
      <div className="p-1 mb-2 bg-dark text-white bg-opacity-75">
          <Link className="list-group-item list-group-item-action" to="/PostJob/">Post Job</Link>
        </div>
      </div>
      <div className="card-title">
      <div className="p-1 mb-2 bg-dark text-white bg-opacity-75">
          <Link className="list-group-item list-group-item-action" to="/closejob">Close Job</Link>
        </div>
      </div>

      <div className="card-title">

      <div className="p-1 mb-2 bg-dark text-white bg-opacity-75">
          <Link className="list-group-item list-group-item-action" to="/bookmarked_freelancer">Bookmarked Freelancer</Link>
        </div>
 
      </div>
      <div className="card-title">
      <div className="p-1 mb-2 bg-dark text-white bg-opacity-75">
          <Link className="list-group-item list-group-item-action" to="/createfeedback">Create Feedback</Link>
        </div>
      </div>
      <div className="card-title">
      <div className="p-1 mb-2 bg-dark text-white bg-opacity-75">
          <Link className="list-group-item list-group-item-action" to="/awardjob">Award Job to freelancer</Link>
        </div>
      </div>
      <div className="card-title">
      <div className="p-1 mb-2 bg-dark text-white bg-opacity-75">
          <Link className="list-group-item list-group-item-action" to="/findalljobs">Find All Job Applications</Link>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default RecruiterHome;

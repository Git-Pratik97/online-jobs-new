import React from "react";
import { Link } from "react-router-dom";

function RecruiterHome() {
  return (
    <div className="container overflow-hidden text-center">
      <div className="card align-middle shadow-lg p-3 mb-5 mt-5 bg-body rounded">
        <div className="card align-self-center shadow-lg p-3 mb-3 bg-body rounded">
          <div className="card-header">
            <h2>RecruiterHome</h2>
          </div>
          <br />
          <div id="list-example" className="list-group">
            <div className="card-title">
              <div className="card shadow-lg p-2 mb-1 bg-body rounded">
                <Link className="list-group-item " to="/PostJob/">
                  Post Job
                </Link>
              </div>
              {/* </div> */}
              {/* <div className="card-title">
      <div className="p-1 mb-2 bg-dark text-white bg-opacity-75">
          <Link className="list-group-item " to="/closejob">Close Job</Link>
        </div>
      </div> */}

              {/* <div className="card-title"> */}
              <div className="card shadow-lg p-2 mb-1 bg-body rounded">
                <Link className="list-group-item " to="/bookmarked_freelancer">
                  Bookmarked Freelancer
                </Link>
              </div>
              {/* </div>
            <div className="card-title"> */}
              <div className="card shadow-lg p-2 mb-1 bg-body rounded">
                <Link className="list-group-item " to="/createfeedback">
                  Create Feedback
                </Link>
              </div>
              {/* </div> */}
              {/* <div className="card-title"> */}
              <div className="card shadow-lg p-2 mb-1 bg-body rounded">
                <Link className="list-group-item " to="/awardjob">
                  Award Job to freelancer
                </Link>
              </div>
              {/* </div> */}
              {/* <div className="card-title"> */}
              <div className="card shadow-lg p-2 mb-1 bg-body rounded">
                <Link className="list-group-item " to="/findalljobapps">
                  Find All Job Applications
                </Link>
              </div>
              <div className="card shadow-lg p-2 mb-1 bg-body rounded">
                <Link className="list-group-item " to="/findbyid">
                  Find Freelancer By ID
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecruiterHome;

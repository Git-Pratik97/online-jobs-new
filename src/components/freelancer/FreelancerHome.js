import React from "react";
import { Link } from "react-router-dom";

const FreelancerHome = () => {
  return (
    <div className="container">
      <div className="card align-middle shadow-lg p-3 mb-5 mt-3 bg-body rounded">
        <div className="card align-self-center shadow-lg p-3 mb-3 bg-body rounded">
          <div className="card-header">
            <h2>Freelancer Home</h2>
          </div>
          <br />
          <div id="list-example" className="list-group">
            {/* <div className="card-title "> */}
            <div className="card shadow-lg p-2 mb-1 bg-body rounded">
              <Link
                className="list-group-item "
                to="/showalljobapplicationsbyfreelancer"
              >
                Show All job Applications by Freelancer ID
              </Link>
            </div>
            {/* </div> */}
            {/* <div className="card-title">
      <div className="p-3 border bg-light">
        <Link className="list-group-item list-group-item-action" to="/SkillExperience/">SkillExperience</Link>
        </div>
      </div> */}

            <div className="card-title">
              <div className="card shadow-lg p-2 mb-1 bg-body rounded">
                <Link className="list-group-item " to="/MySkills/">
                  MySkills
                </Link>
              </div>
            </div>
            {/* <div className="card-title"> */}
            <div className="card shadow-lg p-2 mb-1 bg-body rounded">
              <Link className="list-group-item " to="/bookmarkjobs">
                Bookmark Jobs
              </Link>
            </div>
            {/* </div> */}
            {/* <div className="card-title"> */}
            <div className="card shadow-lg p-2 mb-1 bg-body rounded">
              <Link className="list-group-item " to="/searchjobs">
                Search Jobs
              </Link>
            </div>
            {/* </div> */}
            {/* <div className="card-title"> */}
            <div className="card shadow-lg p-2 mb-1 bg-body rounded">
              <Link className="list-group-item " to="/findbyid">
                Find Freelancer By ID
              </Link>
            </div>
            {/* </div> */}
            {/* <div className="card-title"> */}
            <div className="card shadow-lg p-2 mb-1 bg-body rounded">
              <Link className="list-group-item " to="/findfeedbacksbyid">
                Find Feedbacks By Id
              </Link>
            </div>
            {/* </div> */}
            {/* <div className="card-title"> */}
            <div className="card shadow-lg p-2 mb-1 bg-body rounded">
              <Link className="list-group-item " to="/applyforjob">
                Apply For Job{" "}
              </Link>
            </div>
            {/* </div> */}
            {/* <div className="card-title"> */}
            <div className="card shadow-lg p-2 mb-1 bg-body rounded">
              <Link className="list-group-item " to="/findalljobs">
                Find All Jobs{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancerHome;

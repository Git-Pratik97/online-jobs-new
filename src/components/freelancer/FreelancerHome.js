import React from "react";
import { Link } from "react-router-dom";

const FreelancerHome = () => {
  return (
    <div className="container">
  <div className="row gx-5">
    <div className="card">
      <div className="card-header">
        <h2>Freelancer Home</h2>
        </div>
        <br/>
      <div id="list-example" className="list-group">
      <div className="card-title ">
      <div className="p-1 mb-2 bg-dark text-white bg-opacity-75">
        <Link className="list-group-item list-group-item-action " to="/showalljobapplicationsbyfreelancer">
          Show All job Applications by Freelancer ID
        </Link>
        </div>
      </div>
      {/* <div className="card-title">
      <div className="p-3 border bg-light">
        <Link className="list-group-item list-group-item-action" to="/SkillExperience/">SkillExperience</Link>
        </div>
      </div> */}

      <div className="card-title">

      <div className="p-1 mb-2 bg-dark text-white bg-opacity-75 ">
        <Link className="list-group-item list-group-item-action" to="/MySkills/">MySkills</Link>
        </div>
 
 </div>
 <div className="card-title">
 <div className="p-1 mb-2 bg-dark text-white bg-opacity-75">
        <Link className="list-group-item list-group-item-action" to="/bookmarkjobs">Bookmark Jobs</Link>
        </div>
      </div>
      <div className="card-title">
      <div className="p-1 mb-2 bg-dark text-white bg-opacity-75">
        <Link className="list-group-item list-group-item-action" to="/searchjobs">Search Jobs</Link>
        </div>
      </div>
      <div className="card-title">
      <div className="p-1 mb-2 bg-dark text-white bg-opacity-75">
        <Link className="list-group-item list-group-item-action" to="/findbyid">Find Freelancer By ID</Link>
        </div>
      </div>
      <div className="card-title">
      <div className="p-1 mb-2 bg-dark text-white bg-opacity-75">
        <Link className="list-group-item list-group-item-action" to="/findfeedbacksbyid">Find Feedbacks By Id</Link>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default FreelancerHome;

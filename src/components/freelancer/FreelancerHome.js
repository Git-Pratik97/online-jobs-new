import React from "react";
import { Link } from "react-router-dom";

const FreelancerHome = () => {
  return (
    <div class="card">
      <div class="card-header">
        <h2>Freelancer Home</h2>
      </div>
      <div class="card-body">
        <Link to="/showalljobapplicationsbyfreelancer">
          Show All job Applications by Freelancer ID
        </Link>
      </div>
      {/* <div><Link to='/freelancer/awardjob'>Award Job to Freelancer</Link></div> */}

      <div class="card-title">
        <Link to="/SkillExperience/">SkillExperience</Link>
      </div>

      <div class="card-title">
        <Link to="/MySkills/">MySkills</Link>
      </div>

      {/* <li className="nav-item"> */}
      <div class="card-title">
        <Link to="/bookmarkjobs">Bookmark Jobs</Link>
      </div>
      <div class="card-title">
        <Link to="/searchjobs">Search Jobs</Link>
      </div>
      <div class="card-title">
        <Link to="/findbyid">Find Freelancer By ID</Link>
      </div>
      <div class="card-title">
        <Link to="/findfeedbacksbyid">Find Feedbacks By Id</Link>
      </div>

      {/* </li> */}
    </div>
  );
};

export default FreelancerHome;

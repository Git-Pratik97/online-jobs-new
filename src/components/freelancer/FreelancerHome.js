import React from "react";
import { Link } from "react-router-dom";

const FreelancerHome = () => {
  return (
    <div>
      <h2>Freelancer Home</h2>

      
      
      <div>
        <Link to="/showalljobapplicationsbyfreelancer">
          Show All job Applications by Freelancer ID
        </Link>
      </div>
      {/* <div><Link to='/freelancer/awardjob'>Award Job to Freelancer</Link></div> */}

      <div>
        <Link to="/SkillExperience/">SkillExperience</Link>
      </div>

      <div>
        <Link to="/MySkills/">MySkills</Link>
      </div>

      {/* <li className="nav-item"> */}
      <div>
        <Link to="/bookmarkjobs">Bookmark Jobs</Link>
      </div>
      <div>
        <Link to="/searchjobs">Search Jobs</Link>
      </div>
      <div>
        <Link to="/findbyid">Find By ID</Link>
      </div>
      <div><Link to='/findfeedbacksbyid'>Find Feedbacks By Id</Link></div>
      

      {/* </li> */}
    </div>
  );
};

export default FreelancerHome;

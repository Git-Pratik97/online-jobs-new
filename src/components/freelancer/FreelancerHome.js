import React from "react";
import { Link } from "react-router-dom";

const FreelancerHome = () => {
  return (
    <div class="container">
  <div class="row gx-5">
    <div class="card">
      <div class="card-header">
        <h2>Freelancer Home</h2>
        </div>
        <br/>
      <div id="list-example" class="list-group">
      <div class="card-title ">
      <div class="p-3 border bg-light">
        <Link className="list-group-item list-group-item-action " to="/showalljobapplicationsbyfreelancer">
          Show All job Applications by Freelancer ID
        </Link>
        </div>
      </div>
      <div class="card-title">
      <div class="p-3 border bg-light">
        <Link className="list-group-item list-group-item-action" to="/SkillExperience/">SkillExperience</Link>
        </div>
      </div>

      <div class="card-title">

      <div class="p-3 border bg-light">
        <Link className="list-group-item list-group-item-action" to="/MySkills/">MySkills</Link>
        </div>
 
 </div>
 <div class="card-title">
 <div class="p-3 border bg-light">
        <Link className="list-group-item list-group-item-action" to="/bookmarkjobs">Bookmark Jobs</Link>
        </div>
      </div>
      <div class="card-title">
      <div class="p-3 border bg-light">
        <Link className="list-group-item list-group-item-action" to="/searchjobs">Search Jobs</Link>
        </div>
      </div>
      <div class="card-title">
      <div class="p-3 border bg-light">
        <Link className="list-group-item list-group-item-action" to="/findbyid">Find Freelancer By ID</Link>
        </div>
      </div>
      <div class="card-title">
      <div class="p-3 border bg-light">
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

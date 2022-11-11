import React from 'react';
import { Link } from 'react-router-dom';

const MySkills=()=>{

return(
    <div>
        <ul className="nav nav-tabs">

          <li className="nav-item">
            <Link className="nav-link" to="/freelancer/MySkills/AddSkill">
            <div className="bg-success p-2 text-white bg-opacity-75">Add Skill</div>
              
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/freelancer/MySkills/UpdateSkill">
            <div className="bg-success p-2 text-white bg-opacity-75">Update Skill</div>
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/freelancer/MySkills/RemoveSkill">
            <div className="bg-success p-2 text-white bg-opacity-75">Remove Skill</div>
            </Link>
          </li> */}
        </ul>

    </div>
        
)
}

export default MySkills;
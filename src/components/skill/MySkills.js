import React from 'react';

const MySkills=()=>{

return(
    <div>
    
        <ul className="nav nav-tabs">
        

          <li className="nav-item">
            <a className="nav-link" href="/freelancer/MySkills/AddSkill">
              Add Skill
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/freelancer/MySkills/UpdateSkill">
              Update Skill
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/freelancer/MySkills/RemoveSkill">
              Remove Skill
            </a>
          </li>
        </ul>

    </div>
        
)
}

export default MySkills;

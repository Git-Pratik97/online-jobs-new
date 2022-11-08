import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const bookmarkedFreelancerFindBySkill = () => {
  // const [freelancer, setFreelancer] = useState("");

  const loadfreelancer = async () => {
    const result = await axios.get(`http://localhost:8080/jobportal/bookmarkedfreelancer/findbookmarkedfreelancerbyskillName/Name`);
    console.log(result.data);
    // setFreelancer(result.data);
  };

  // const handleInput = (e) => {
  //   setFreelancer(e.target.value);
  // };


  return (
    <div>
      <h1>Bookmarked Freelancer Find By Skill</h1>
        
      <ul className="nav nav-tabs">
        
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/bookmarked_freelancer/bookmark">
            Bookmark Freelancer
          </a>
        </li>
        
        
        <li className="nav-item">
          <a className="nav-link" href="/bookmarked_freelancer/findbyid">
            Find By ID
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/bookmarked_freelancer/findbyskill">
            Find By Skill
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/bookmarked_freelancer/remove">
            Remove Bookmark
          </a>
        </li>
      </ul>
      <div className="position-absolute top-50 start-50 translate-middle">
    <span className="align-middle"><br/>
      <p>
      <h2>Bookmarked Freelancer Find By Skill</h2>
      </p>
      <form>
  <div className="mb-3">
  <label for="basic-url" class="form-label">Skill</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">.</div>
  </div>
  <button type="submit" className="btn btn-primary">Find It</button>
</form>
     </span>
    </div>
    </div>
  )
}

export default bookmarkedFreelancerFindBySkill
import React from "react";
import {useState, useEffect} from 'react';
import axios from 'axios';


const FreelancerBookmarkJobs = () => {
  const [freelancer, setFreelancer] = useState("");
  const [input, setInput] = useState();

  const loadfreelancer = async () => {
    const result = await axios.get(`http://localhost:8080/jobportal/bookmarkedjob/findbyid/${input}`);
    //http://localhost:8080/swagger-ui.html#!/freelancer-api/findByIdUsingGET_3
    //http://localhost:8080/jobportal/bookmarkedjob/findbyid/1
    console.log(result.data);
    setFreelancer(result.data);
  };

// loadfreelancer();

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
    <div>
      <h1></h1>
        
      <ul className="nav nav-tabs">
        
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/bookmarkjobs">
            Bookmark Jobs
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/searchjobs">
            Search Jobs
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/findbyid">
            Find By ID
          </a>
        </li>
      </ul>
    </div>
    <div className="position-absolute top-50 start-50 translate-middle">
    <span className="align-middle"><br/>
      
      <h2>Freelancer Search Bookmarked Jobs By ID</h2>
      
      <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Search Bookmark Job</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleInput}/>
    {/* <p> Text Typed:{freelancer}</p> */}
    <div id="emailHelp" className="form-text">.</div>
  </div>
  <button type="submit" className="btn btn-primary" onClick={loadfreelancer}>Find It</button>
</form>
     </span>
     <table className="table">
  <thead>
    <tr>
      <th scope="col">Bookmark Job ID</th>
      <th scope="col">Freelancer ID</th>
      <th scope="col">Skill ID</th>
    </tr>
  </thead>
  {freelancer &&
  <tbody>
    <tr>
      <th scope="row">{freelancer.id}</th>
      <td>{freelancer.freelancer.id}</td>
      <td>{freelancer.skill.id}</td>
    </tr>
  </tbody>
}
</table>
  
    </div>
    </div>
    
  );
};

export default FreelancerBookmarkJobs;

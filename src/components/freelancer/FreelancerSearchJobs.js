import React from "react";
import {useState, useEffect} from 'react';
import axios from 'axios';


const FreelancerSearchJobs = () => {
  const [freelancer, setFreelancer] = useState("");
  const [input, setInput] = useState();

  const loadfreelancer = async (e) => {
    // e.preventDefault();
    const result = await axios.get(`http://localhost:8080/jobportal/job/findbyid/${input}`);
    //http://localhost:8080/swagger-ui.html#!/freelancer-api/findByIdUsingGET_3
    //http://localhost:8080/jobportal/job/findbyid/1
    console.log(result.data);
    setFreelancer(result.data);
  };

//loadfreelancer();
//useeffect with blanc array
//useEffect(() => {
  // Update the document title using the browser API
  //document.title = `You clicked ${count} times`;
  //loadfreelancer();
//});

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
    <div>
      <h1></h1>
        
      <ul className="nav nav-tabs">
        
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/freelancer/bookmarkjobs">
            Bookmark Jobs
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/freelancer/searchjobs">
            Search Jobs
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/freelancer/findbyid">
            Find By ID
          </a>
        </li>
      </ul>
    </div>
    <div className="position-absolute top-50 start-50 translate-middle">
    <span className="align-middle"><br/>
      
      <h2>Freelancer Search Jobs By ID</h2>
      
      <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Search Job ID</label>
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
      <th scope="col">Job ID</th>
      <th scope="col">Job Status</th>
      <th scope="col">Posted Date</th>
      <th scope="col">Skill Name</th>
      <th scope="col">Skill Description</th>
    </tr>
  </thead>

  <tbody>
  {freelancer &&(
    <tr>
      <th scope="row">{freelancer.id}</th>
      <td>{String(freelancer.active)}</td>
      <td>{freelancer.postedDate}</td>
      <td>{freelancer.skill.name}</td>
      <td>{freelancer.skill.description}</td>
    </tr>
    )}
  </tbody>

</table>
    </div>
    </div>
    
  );
};

export default FreelancerSearchJobs;

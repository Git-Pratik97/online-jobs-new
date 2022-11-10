import React from "react";
import {useState, useEffect} from 'react';
import axios from 'axios';


const FreelancerFindById = () => {
  const [freelancer, setFreelancer] = useState("");

  const loadfreelancer = async () => {
    const result = await axios.get(`http://localhost:8080/jobportal/freelancer/getallfreelancersbyid/${freelancer}`);
    //http://localhost:8080/swagger-ui.html#!/freelancer-api/findByIdUsingGET_3
    console.log(result.data);
    setFreelancer(result.data);
  };

// loadfreelancer();

  const handleInput = (e) => {
    setFreelancer(e.target.value);
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
          <a className="nav-link" aria-current="page" href="/freelancer/searchjobs">
            Search Jobs
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/freelancer/findbyid">
            Find By ID
          </a>
        </li>
      </ul>
    </div>
    <div className="position-absolute top-50 start-50 translate-middle">
    <span className="align-middle"><br/>
      
      <h2>Freelancer Find By ID</h2>
      
      <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Search Freelancer ID</label>
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
      <th scope="col">Freelancer ID</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{freelancer.id}</th>
      <td>{freelancer.firstName}</td>
      <td>{freelancer.lastName}</td>
    </tr>
  </tbody>
</table>
    </div>
    </div>
    
  );
};

export default FreelancerFindById;

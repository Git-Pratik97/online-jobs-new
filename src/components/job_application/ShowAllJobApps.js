import {useEffect, useState } from 'react';
import axios from "axios";

function ShowAllJobApps(){

const [input, setInput] = useState("")
const [jobApps,setjobApps] = useState([])
const handleInput = (e) => {
  setInput(e.target.value);
};

const loadJobs = async (e) => {
  e.preventDefault();
  await axios.get(`http://localhost:8080/jobportal/jobapplication/findbyfreelancer/${input}`)
                            .then((data)=>setjobApps(data.data))
                            .catch((error)=>alert(error));

//   console.log(result);
//   console.log(result.data.id)
};
// loadJobs();



return (
  <div className="card" >
      <div className="order-2 p-2">
        <span className="align-middle">
    <h1>Show All Job Applications By Freelancer ID</h1>
   <div className="order-2 p-2">
   <div className="card">
  <div>
  <form className="was-validated">
  <label htmlFor="exampleInputEmail1" className="form-label">
    Enter your Freelancer ID
    </label>
    <br/>
      <input type="number" onChange={handleInput} ></input>
      <br/>
      <br/>
      <button type="submit"
              className="btn btn-primary" onClick={loadJobs} >Submit</button>
    </form>
  </div>
  
  <div id="applied-jobs">
  <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Freelancer ID</th>
          <th scope="col">Job ID</th>
          <th scope="col">Cover Letter</th>
          <th scope="col">Applied Date</th>
        </tr>
      </thead>
      <tbody>
          {
            jobApps.map((job) => (
              <tr>
                <th scope="row">{job.id}</th>
                <td>{job.freelancerId}</td>
                <td>{job.jobId}</td>
                <td>{job.coverLetter}</td>
                <td>{job.appliedDate}</td>
              </tr>
              ))
          }
      </tbody>
    </table>
   </div>
   </div>
   </div>
   </span>
   </div>
   </div>
   
);
}

export default ShowAllJobApps;
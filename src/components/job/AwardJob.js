import React from 'react'
import {useEffect, useState } from 'react';
import axios from "axios";

function AwardJob() {

  const [jobId, setjobId] = useState();
  const [freelancerId, setfreelancerId] = useState();
  
  const handleJobId = (e) => {
    setjobId(e.target.value);
  };

  const handleFreelancerId = (e) => {
    setfreelancerId(e.target.value);
  };

  const hire = (e) => {
    axios.put(`http://localhost:8080/jobportal/job/awardJob/${jobId}/${freelancerId}`)
        .then(alert("Hired the freelancer"))
        .catch((error) => alert(error));
  }

  return (
    <div className="card" >
      <form>
        <label>Enter the Job ID</label><br/>
        <input type="number" onChange={handleJobId}></input><br/>
        <label>Enter the Freelancer ID</label><br/>
        <input type="number" onChange={handleFreelancerId}></input><br/><br/>
        <button onClick={hire}>Award job </button><p></p>
      </form>
    </div>
  )
}

export default AwardJob;
import React from "react";
import { useState } from "react";
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
    axios
      .put(
        `http://localhost:8080/jobportal/job/awardJob/${jobId}/${freelancerId}`
      )
      .then(alert("Hired the freelancer"))
      .catch((error) => alert(error));
  };

  return (
    <div className="card">
      <h1>Award Job to Freelancer</h1>
      <div className="order-2 p-2">
        <span className="align-middle">
          <form>
            <label>Enter the Job ID</label>
            <br />
            <input
              type="number"
              class="form-control"
              id="autoSizingInputGroup"
              onChange={handleJobId}
            ></input>
            <br />
            <label>Enter the Freelancer ID</label>
            <br />
            <input
              type="number"
              class="form-control"
              id="autoSizingInputGroup"
              onChange={handleFreelancerId}
            ></input>
            <br />
            <button type="submit" className="btn btn-primary" onClick={hire}>
              Award job{" "}
            </button>
            <p></p>
          </form>
        </span>
      </div>
    </div>
  );
}

export default AwardJob;

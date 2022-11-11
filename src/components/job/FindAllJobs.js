import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const FindAllJobs = () => {
  const [jobs, setJobs] = useState([]);

  const loadJobs = async () => {
    const result = await axios.get(
      `http://localhost:8080/jobportal/job/findAll`
    );
    console.log(result.data);
    setJobs(result.data);
  };
  //   const loadJobs = async () => {
  //     await axios.get(`http://localhost:8080/`)
  //     const result = await axios.get(`http://localhost:8080/`);
  //     console.log(result.data);
  //     setJobs(result.data);
  //   }

  useEffect(() => {
    loadJobs();
  }, []);

  return (
    <div className="card">
      <div className="order-2 p-2">
        <span className="align-middle">
          <h2>Jobs Available</h2>

          <div id="applied-jobs">
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
                {jobs.map((job) => (
                  <tr>
                    <th scope="row">{job.id}</th>
                    <td>{String(job.active)}</td>
                    <td>{job.postedDate}</td>
                    <td>{job.skill.name}</td>
                    <td>{job.skill.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </span>
      </div>
    </div>
  );
};

export default FindAllJobs;

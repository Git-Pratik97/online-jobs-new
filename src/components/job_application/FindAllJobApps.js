import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function FindAllJobApps() {
  const [jobApps, setjobApps] = useState();
  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    await axios
      .get(`http://localhost:8080/jobportal/jobapplication/findAll`)
      // .then((data) => console.log(data.data))
      .then((data) => setjobApps(data.data))
      .catch((error) => alert(error));

    //   console.log(result);
    //   console.log(result.data.id)
  };

  return (
    <div className="card" >
      {/* {jobApps && jobApps.map((job) => (
        <div>{job.id}</div>
      ))} */}
     
     <div className="order-2 p-2">
        <span className="align-middle">
        <h1>Find All Job Applications</h1>
        {/* <div>
          <form>
            <label>Enter your ID</label>
            <input type="number" ></input>
            <button onClick={loadJobs}>Submit</button>
          </form>
        </div> */}

      <div className="order-2 p-2">
      <div className="card">
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
              {jobApps && jobApps.map((job) => (
                <tr key={job.id}>
                  <th scope="row">{job.id}</th>
                  <td>{job.freelancerId}</td>
                  <td>{job.jobId}</td>
                  <td>{job.coverLetter}</td>
                  <td>{job.appliedDate}</td>
                  <td>
                    <form action="">
                      <Link to='/awardjob'><button className="btn btn-primary" type="submit">Hire</button></Link>
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
        </span>
        </div>
    </div>
  );
}

export default FindAllJobApps;

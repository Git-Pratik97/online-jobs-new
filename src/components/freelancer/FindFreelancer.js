import React from "react";
import axios from "axios";
import { useState } from "react";

function FindFreelancer() {
  const [input, setInput] = useState("");
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const [freelancer, setfreelancer] = useState();
  const findFreelancer = async (e) => {
    e.preventDefault();
    const id = input;
    await axios
      .get(
        `http://localhost:8080/jobportal/freelancer/getallfreelancersbyid/${id}`
      )
      .then((data) => setfreelancer(data))
      // .then((data)=> console.log(data))
      .catch((error) => alert(error));
  };

  return (
    <div className="card">
      <div className="align-middle">
        <span className="align-middle">
          <br />
          <div className="card-header">
            <h2>Freelancer Find By ID</h2>
          </div>
          <form>
            <label htmlFor="exampleInputEmail1" className="form-label">
              Enter Id of Freelancer
            </label>
            <input
              className="form-control"
              id="validationTextarea"
              type="text"
              onChange={handleInput}
            ></input>
            <div>
              <br />
              <button
                type="submit"
                className="btn btn-primary"
                onClick={findFreelancer}
              >
                Submit
              </button>
            </div>
          </form>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Freelancer ID</th>
                <th scope="col">Freelancer First Name</th>
                <th scope="col">Freelancer Last Name</th>
              </tr>
            </thead>
            {freelancer && (
              <tbody>
                <tr>
                  <th scope="row">{1}</th>
                  <td>{freelancer.data.id}</td>
                  <td>{freelancer.data.firstName}</td>
                  <td>{freelancer.data.lastName}</td>
                </tr>
              </tbody>
            )}
          </table>
          {/* <ul class="list-group list-group-flush">
          <li >Freelancer ID: {freelancer.data.id}</li>
          <li>Freelancer Name: {freelancer.data.firstName}</li>
          <li>Freelancer last Name: {freelancer.data.lastName}</li>
        </ul>
      </div>
} */}
        </span>
      </div>
    </div>
  );
}

export default FindFreelancer;

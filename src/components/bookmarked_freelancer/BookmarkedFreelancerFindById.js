import React from "react";
import { useState } from "react";
import axios from "axios";

const BookmarkedFreelancerFindById = () => {
  const [freelancer, setFreelancer] = useState("");

  const loadfreelancer = async (e) => {
    e.preventDefault();
    const result = await axios.get(
      `http://localhost:8080/jobportal/bookmarkedfreelancer/findbyid/${freelancer}`
    );
    // console.log(result.data);
    setFreelancer(result.data);
    console.log(result.data);
  };

  const handleInput = (e) => {
    setFreelancer(e.target.value);
  };

  return (
    <div>
      <div>
        <h1>Bookmarked Freelancer Find By Id</h1>

        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              className="nav-link"
              aria-current="page"
              href="/bookmarked_freelancer/bookmark"
            >
              Bookmark Freelancer
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link active"
              href="/bookmarked_freelancer/findbyid"
            >
              Find By ID
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/bookmarked_freelancer/findbyskill">
              Find By Skill
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/bookmarked_freelancer/remove">
              Remove Bookmark
            </a>
          </li>
        </ul>
      </div>
      <div className="position-absolute top-50 start-50 translate-middle">
        <span className="align-middle">
          <br />

          <h2>Bookmarked Freelancer Find By ID</h2>

          <form className="was-validated">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Bookmarked Freelancer ID
              </label>
              <input
                type="number"
                className="form-control"
                id="validationTextarea"
                aria-describedby="emailHelp"
                onChange={handleInput}
                required
              />
              {/* <p> Text Typed:{freelancer}</p> */}
              <div id="emailHelp" className="form-text">
                .
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={loadfreelancer}
            >
              Find It
            </button>
          </form>
        </span>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Freelancer ID</th>
              <th scope="col">Bookmarked By ID</th>
              <th scope="col">Skill ID</th>
            </tr>
          </thead>
          {freelancer && (
            <tbody>
              <tr>
                <th scope="row">{freelancer.id}</th>
                <td>{freelancer.freelancerId}</td>
                <td>{freelancer.bookmarkedById}</td>
                <td>{freelancer.skillId}</td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default BookmarkedFreelancerFindById;

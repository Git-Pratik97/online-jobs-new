import React from "react";
import { useState } from "react";

import axios from 'axios';

const BookmarkFreelancerAdd = () => {
  // const [freelancer, setFreelancer] = useState({
  //   freelancerId: "",
  //   bookmarkedById: "",
  //   skillId: "",
  // });

  const [input, setInput] = useState({
    freelancerId: "",
    bookmarkedById: "",
    skillId: ""
  });

  const { freelancerId, bookmarkedById, skillId } = input;

  const onInputChange = (e) => {
      setInput({...input, [e.target.name]:e.target.value});
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:8080/jobportal/bookmarkedfreelancer/bookmarkFreelancer/${freelancerId}/${bookmarkedById}/${skillId}`);
    console.log("Success");
  } 

  return (
    <div>
      <div>
        <h1>Bookmarked Freelancer</h1>

        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              className="nav-link active"
              aria-current="page"
              href="/bookmarked_freelancer/bookmark"
            >
              Bookmarked Freelancer
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/bookmarked_freelancer/findbyid">
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
        {/* <BookmarkFreelancerAdd/> */}
        {/* <BookmarkedFreelancerFindById/> */}
      </div>
      <div className="position-absolute top-50 start-50 translate-middle">
        <span className="align-middle">
          <br />

          <h2>Bookmark Freelancer</h2>

          <form className="was-validated" onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="validationTextarea" className="form-label">
                Freelancer ID
              </label>
              <input
                type="number"
                className="form-control"
                id="validationTextarea"
                aria-describedby="emailHelp"
                name="freelancerId"
                value={freelancerId}
                // defaultValue={freelancerId}
                onChange={(e)=>onInputChange(e)}
                required
              />
              <div className="invalid-feedback">
      Please Enter Valid Freelancer ID
    </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Bookmarked By ID
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputEmail1"
                name="bookmarkedById"
                // defaultValue={bookmarkedById}
                value={bookmarkedById}
                onChange={(e)=>onInputChange(e)}
                required
              />
              <div className="invalid-feedback">
              Please Enter Valid Recruiter ID
    </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Skill ID
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputPassword1"
                name="skillId"
                value={skillId}
                // defaultValue={skillId}
                onChange={(e)=>onInputChange(e)}
                required
              />
              <div className="invalid-feedback">
              Please Enter Valid Skill ID
    </div>
            </div>
            <div className="mb-3 form-check">
              {/* <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              /> */}
              
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Add
            </button>
            <a href="/bookmarked_freelancer">
              <button type="submit" className="btn btn-outline-danger mx-2">
                Cancel
              </button>
            </a>
          </form>
        </span>
      </div>
    </div>
  );
};

export default BookmarkFreelancerAdd;

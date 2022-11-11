import React from "react";
import { useState, useEffect } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

const BookmarkFreelancerAdd = () => {
  // const [freelancer, setFreelancer] = useState({
  //   freelancerId: "",
  //   bookmarkedById: "",
  //   skillId: "",
  // });

  const [input, setInput] = useState({
    freelancerId: "",
    bookmarkedById: "",
    skillId: "",
  });

  const { freelancerId, bookmarkedById, skillId } = input;

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const onInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(
      `http://localhost:8080/jobportal/bookmarkedfreelancer/bookmarkFreelancer/${freelancerId}/${bookmarkedById}/${skillId}`
    );
    console.log("Success");
    setIsSubmit(true);
    setFormErrors(formErrors);
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length == 0 && isSubmit) {
      console.log(input);
    }
  }, [formErrors]);

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
      <div className="card">
        <div className="align-middle">
          <span className="align-middle">
            <br />
            <div className="card-header">
              <h2>Bookmark Freelancer</h2>
            </div>

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
                  onChange={(e) => onInputChange(e)}
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
                  onChange={(e) => onInputChange(e)}
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
                  onChange={(e) => onInputChange(e)}
                  required
                />
                <div className="invalid-feedback">
                  Please Enter Valid Skill ID
                </div>
              </div>
              {/* <div className="mb-3 form-check"> */}
                {/* <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              /> */}
              {/* </div> */}
              {Object.keys(formErrors).length === 0 && isSubmit ? (
              <div className="ui message success">Bookmarked Successfully</div>
            ) : (
              <pre>{JSON.stringify(undefined, 2)}</pre>
              // <div className="ui message success">Retrieved Successfully</div>
            )}
              <button type="submit" className="btn btn-outline-primary">
                Add
              </button>
              <Link to="/bookmarked_freelancer">
                <button type="submit" className="btn btn-outline-danger mx-2">
                  Cancel
                </button>
              </Link>
            </form>
            
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookmarkFreelancerAdd;

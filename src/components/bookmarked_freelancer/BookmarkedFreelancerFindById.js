import React from "react";
import { useState } from "react";
import axios from "axios";

const BookmarkedFreelancerFindById = () => {
  const [freelancer, setFreelancer] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const loadfreelancer = async (e) => {
    e.preventDefault();
    const result = await axios.get(
      `http://localhost:8080/jobportal/bookmarkedfreelancer/findbyid/${freelancer}`
    );
    // console.log(result.data);
    setFreelancer(result.data);
    setIsSubmit(true);
    setFormErrors(formErrors);
    console.log(result.data);
  };

  // useEffect(() => {
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).length == 0 && isSubmit) {
  //     console.log(freelancer);
  //   }
  // }, [formErrors]);

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
      <div className="card align-middle shadow-lg p-3 mb-5 bg-body rounded">
        <div className="align-self-center shadow-lg p-3 mb-5 bg-body rounded">
          <span className="align-middle">
            <br />
            <div className="card-header">
              <h2>Bookmarked Freelancer Find By ID</h2>
            </div>
            <form className="was-validated" onSubmit={loadfreelancer}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Bookmarked Freelancer ID</label>
                <input
                  type='number'
                  className="form-control"
                  id="exampleInputPassword1"
                  
                  onChange={handleInput}
                  required
                />
                <div className="invalid-feedback">Please Enter Valid ID</div>
                {/* <p> Text Typed:{freelancer}</p> */}
              </div>
              <button
                type="submit" 
                className="btn btn-outline-primary"
              >
                Find It
              </button>
              {Object.keys(formErrors).length === 0 &&
              isSubmit &&
              freelancer ? (
                <div className="ui message success">Retrieved Successfully</div>
              ) : (
                <pre>{JSON.stringify(undefined, 2)}</pre>
                // <div className="ui message success">Retrieved Successfully</div>
              )}
              {formErrors.errorCode === 404 ? (
                <div className="ui message success">Not Found</div>
              ) : (
                <pre>{JSON.stringify(undefined, 2)}</pre>
                // <div className="ui message success">Retrieved Successfully</div>
              )}
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
    </div>
  );
};

export default BookmarkedFreelancerFindById;

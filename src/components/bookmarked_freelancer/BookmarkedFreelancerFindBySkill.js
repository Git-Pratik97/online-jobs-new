import React from "react";
import { useState } from "react";
import axios from "axios";

const BookmarkedFreelancerFindBySkill = () => {
  // useEffect(() => {
  //   handleSearch();
  // },[]);

  const [freelancers, setFreelancers] = useState([]);
  const [input, setInput] = useState("");
  const [formErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  // console.log(input);

  const handleSearch = (e) => {
    e.preventDefault();
    axios
      .get(
        `http://localhost:8080/jobportal/bookmarkedfreelancer/findbookmarkedfreelancerbyskillName/${input}`
      )
      .then((data) => setFreelancers(data.data))
      .catch((error) => console.log(error));
    setIsSubmit(true);
    // console.log(result.data, "String");
    // const item = await result.json();
    // setFreelancers(result);
    // console.log(item);
  };
  // handleSearch();

  // console.log(input);
  // useEffect(() => {
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(freelancers);
  //   }
  // }, [formErrors]);

  return (
    <div>
      <h1>Bookmarked Freelancer Find By Skill</h1>

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
          <a className="nav-link" href="/bookmarked_freelancer/findbyid">
            Find By ID
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link active"
            href="/bookmarked_freelancer/findbyskill"
          >
            Find By Skill
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/bookmarked_freelancer/remove">
            Remove Bookmark
          </a>
        </li>
      </ul>
      <div className="card shadow-lg p-3 mb-5 bg-body rounded">
        <div className="align-self-center shadow-lg p-3 mb-5 bg-body rounded">
          <span className="align-middle">
            <br />
            <div className="card-header">
              <h2>Bookmarked Freelancer Find By Skill</h2>
            </div>
            <form className="was-validated" onSubmit={handleSearch}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Skill
                </label>

                <input
                  type="text"
                  className="form-control"
                  id="validationTextarea"
                  // id="exampleDataList"
                  // aria-describedby="emailHelp"
                  onChange={handleInput}
                  required
                />
                <div className="invalid-feedback">
                  Please Enter Valid Skill Name
                </div>
                <div id="emailHelp" className="form-text">
                  .
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                required
              >
                Find It
              </button>
            </form>
            {Object.keys(formErrors).length === 0 &&
            isSubmit &&
            freelancers.length !== 0 ? (
              <div className="ui message success">Retrieved Successfully</div>
            ) : (
              <pre>{JSON.stringify(undefined, 2)}</pre>
              // <div className="ui message success">Retrieved Successfully</div>
            )}
            {Object.keys(formErrors).length === 0 &&
            isSubmit &&
            freelancers.length === 0 ? (
              <div className="ui message success">Not Found</div>
            ) : (
              <pre>{JSON.stringify(undefined, 2)}</pre>
              // <div className="ui message success">Retrieved Successfully</div>
            )}
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
            {freelancers &&
              freelancers.map((item) => (
                <tbody key={item.id}>
                  <tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <td>{item.freelancerId}</td>
                    <td>{item.bookmarkedById}</td>
                    <td>{item.skillId}</td>
                  </tr>
                </tbody>
              ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookmarkedFreelancerFindBySkill;

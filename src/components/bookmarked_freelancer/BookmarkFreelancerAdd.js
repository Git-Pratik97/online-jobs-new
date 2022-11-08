import React from "react";


const BookmarkFreelancerAdd = () => {
  return (
    <div>
      <div>
      <h1>Bookmark Freelancer</h1>
        
        <ul className="nav nav-tabs">
          
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/bookmarked_freelancer/bookmark">
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
    <span className="align-middle"><br/>
      <p>
      <h2>Bookmark Freelancer</h2>
      </p>
      <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Freelancer ID</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Bookmarked By ID</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Skill ID</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Add</button>
</form>
     </span>
    </div>
    </div>
  );
};

export default BookmarkFreelancerAdd;

import React from "react";


const BookmarkedFreelancerHome = () => {
  return (
    <div>
      <h1>Bookmarked Freelancer</h1>
        
      <ul className="nav nav-tabs">
        
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/bookmarked_freelancer/bookmark">
            Bookmark Freelancer
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
    
  );
};

export default BookmarkedFreelancerHome;

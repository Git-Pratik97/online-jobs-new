import React from 'react'
import { Link } from 'react-router-dom';

function RecruiterHome() {
  return (
    <div>
        <h2>RecruiterHome</h2>
        <div><Link to='/PostJob/'>Post Job</Link></div>

        <div><Link to='/closejob'>Close Job</Link></div>

        

        <div><Link  to="/bookmarked_freelancer">
          Bookmarked Freelancer
        </Link>
        </div>

        <div>
        <Link to="/createfeedback">Create Feedback</Link>
      </div>

        <div><Link to='/awardjob'>Award Job to freelancer</Link></div>

        <div><Link to='/findalljobs'>Find All Job Applications</Link></div>
    </div>
    
  );
};

export default RecruiterHome;
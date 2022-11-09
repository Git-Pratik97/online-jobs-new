import React from 'react'

function RecruiterHome() {
  return (
    <div>
        <h2>RecruiterHome</h2>
        <div><a href='recruiter/PostJob/'>Post Job</a></div>

        <div><a href='recruiter/closejob'>Close Job</a></div>

        <div><a href='recruiter/findfeedbacksbyid'>Find Feedbacks By Id</a></div>

        <div><a href='freelancer/findfreelancer'>Find Freelancer By ID</a></div>

        <div><a href='freelancer/awardjob'>Award Job to freelancer</a></div>

        <div><a href='recruiter/findalljobs'>Find All Job Applications</a></div>
    </div>
    
  );
};

export default RecruiterHome;
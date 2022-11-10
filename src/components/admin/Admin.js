import React from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
  return (
    <div>
        <h1>Admin</h1>

        <div>
        <Link to="recruiter/findrecruiter">Find Recruiter By ID</Link>
      </div>
      <div>
        <Link to='freelancer/findfreelancer'>Find Freelancer By ID</Link>
        </div>


    </div>
  )
}

export default Admin
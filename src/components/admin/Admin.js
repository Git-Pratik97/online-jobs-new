import React from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
  return (
    <div className="container overflow-hidden text-center">
    <div className="row gx-5">
      <div className="card">
        <div className="card-header">
        <h1>Admin</h1>
        </div>
      <br/>
      <div id="list-example" className="list-group">
      <div className="card-title">
      <div className="p-1 mb-2 bg-dark text-white bg-opacity-75">
        <Link className="list-group-item list-group-item-action" to="recruiter/findrecruiter">Find Recruiter By ID</Link>
        </div>
      </div>
      <div className="card-title">
      <div className="p-1 mb-2 bg-dark text-white bg-opacity-75">
        <Link className="list-group-item list-group-item-action" to='freelancer/findfreelancer'>Find Freelancer By ID</Link>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Admin
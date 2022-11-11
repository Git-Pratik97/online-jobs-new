import React from 'react'
import axios from 'axios';
import {useState} from 'react';


function FindRecruiter() {
  const [input, setInput] = useState("");
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const [recruiter, setRecruiter] = useState()
  const findRecruiter = async(e)=> {
      e.preventDefault();
      const id = input;
      await 
        axios.get(`http://localhost:8080/jobportal/recruiter/findbyid/${id}`)
                  .then((data)=>setRecruiter(data))
                  .catch((error)=>alert(error));
  }
  
  return (
    <div className="container overflow-hidden text-center">
  <div className="row gx-5">
    <div className="card">
      <div className="card-header">
          <h2>Recruiter Find By ID</h2>
          </div>
          <form >
          <label htmlFor="exampleInputEmail1" className="form-label">Enter ID of Recruiter</label>  
        <input className="form-control"
                id="validationTextarea" type="text" onChange={handleInput}></input>
                <div><br/>
        <button type="submit"
              className="btn btn-primary" onClick={findRecruiter}>Submit</button>  
      </div>
      </form>
      <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Recruiter ID</th>
              <th scope="col">Recruiter First Name</th>
              <th scope="col">Recruiter Last Name</th>
            </tr>
          </thead>
     { recruiter && <tbody>
              <tr>
                <th scope="row" >{1}</th>
                <td>{recruiter.data.id}</td>
                <td>{recruiter.data.firstName}</td>
                <td>{recruiter.data.lastName}</td>
              </tr>
            </tbody>
          }
        </table>
     {/* { recruiter && <div>
        <ul>
          <li >Freelancer ID: {recruiter.data.id}</li>
          <li>Freelancer ID: {recruiter.data.firstName}</li>
          <li>Freelancer ID: {recruiter.data.lastName}</li>
        </ul>
      </div>
} */}
    
    </div>
    </div>
    </div>
    
  )
}

export default FindRecruiter;
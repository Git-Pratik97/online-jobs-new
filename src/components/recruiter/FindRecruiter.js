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
    <div>
      <form>
        <label>Enter id of Recruiter</label>  
        <input type="text" onChange={handleInput}></input>
        <button  onClick={findRecruiter}>Submit</button>  
      </form>
     { recruiter && <div>
        <ul>
          <li >Freelancer ID: {recruiter.data.id}</li>
          <li>Freelancer ID: {recruiter.data.firstName}</li>
          <li>Freelancer ID: {recruiter.data.lastName}</li>
        </ul>
      </div>
}
    </div>
  )
}

export default FindRecruiter;
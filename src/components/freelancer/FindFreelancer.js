import React from 'react'
import axios from 'axios';
import {useState} from 'react';


function FindFreelancer() {
  const [input, setInput] = useState("");
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const [freelancer, setfreelancer] = useState()
  const findFreelancer = async(e)=> {
      e.preventDefault();
      const id = input;
      await 
        axios.get(`http://localhost:8080/jobportal/freelancer/getallfreelancersbyid/${id}`)
                  .then((data)=>setfreelancer(data))
                  .catch((error)=>alert(error));
  }
  
  return (
    <div>
      <form>
        <label>Enter id of Freelancer</label>  
        <input type="text" id="FreelancerId" onChange={handleInput}></input>
        <button  onClick={findFreelancer}>Submit</button>  
      </form>
     { freelancer && <div>
        <ul>
          <li >Freelancer ID: {freelancer.data.id}</li>
          <li>Freelancer Name: {freelancer.data.firstName}</li>
          <li>Freelancer last Name: {freelancer.data.lastName}</li>
        </ul>
      </div>
}
    </div>
  )
}

export default FindFreelancer;
import React from 'react'
import axios from 'axios';
import { useState } from 'react';

function DeleteJob() {
    const[input,setInput]=useState({
        jobId:''
    });
    const {jobId} = input;
    
    const onInputChange = (e) => {
        setInput({...input, [e.target.name]:e.target.value});
    }
    
    const onSubmit = async (e) => {
       e.preventDefault();
        await axios.get(`http://localhost:8080/jobportal/job/close/${input}`);
        console.log("Removed");
    }

    // onSubmit();
  return (
    <div className='deleteJob'>
    deleteJob
        <form onSubmit={(e) => onSubmit(e)}>
        <header className='deleteJob-header'>
            <h2>DeleteJob</h2>
            <input type={"text"} className="form-control"  name="jobId" value={jobId} onChange={(e)=>onInputChange(e)}/>
            <button type="submit" className="btn btn-outline-primary">
              Remove
            </button>
        </header>
        </form>
    </div>
  )
  
}

export default DeleteJob
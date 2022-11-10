import { useFormik } from 'formik'
import React, { useState } from 'react'
import axios from 'axios'

const FindFeedback=()=> {

    const[output,setOutput]=useState('');
    const[feedback,setFeedback]=useState([]);
    const formik= useFormik({
        initialValues:{
            freelancerId:''
        },
        onSubmit: (values) => {
            console.log(values);
            axios.get(`http://localhost:8080/jobportal/recruiter/findfeedbacksbyfreelancer/${values.freelancerId}`, values)
            .then(resp=>{
                setFeedback(resp.data);
                console.log("This is your feedback");
                console.log(resp.data);
                
            }).catch(err=>{
                console.error(err.response.data);
           })
        },
        
        validate:(values)=>{
            let errors={};
            if(!values.freelancerId){
              errors.freelancerId="Enter the freelancer Id"
            }
            return errors;
        },
    })
    //console.log(formik.onSubmit(2));
  return (
    <div className='findFeedback'>
        <h2>Find Feedback</h2>
        <form  className="was-validated" autoComplete="off" onSubmit={formik.handleSubmit}>
       
            <div className="form-group">
                 <label htmlFor="freelancerId">Freelancer ID:</label>
                 <input name="freelancerId" type="Integer" className="form-control" id="validationTextarea" value={formik.values.freelancerId} onChange={formik.handleChange} required/>
                 {formik.errors.freelancerId? <div className="errors">{formik.errors.freelancerId}</div> : null}
            </div>

            <div className="btn btn-outline-primary">
                <button type="submit" >Find</button>
            </div>
            
        </form>
        <table className="table">
  <thead>
    <tr>
      {/* <th scope="col">ID</th> */}
      <th scope="col">Recruiter Id</th>
      <th scope="col">Rating</th>
      <th scope="col">Comment</th>
      {/* <th scope="col">Skill Description</th> */}
    </tr>
  </thead>

  <tbody>
  {feedback &&
            feedback.map((item) => (
    <tr>
      {/* <th scope="row">{item.recruiterId}</th> */}
      <td>{item.recruiterId}</td>
      <td>{item.rating}</td>
      <td>{item.comment}</td>
      {/* <td>{item.comment}</td> */}
    </tr>
    ))}
  </tbody>

</table>
        {/* {feedback &&
            feedback.map((item) => (
                <div>
                    <h4>This is your feedback</h4>
                  <p>Recruiter Id:{item.recruiterId}</p>
                  <p>Rating:{item.rating}</p>
                  <p>Comment:{item.comment}</p>
                </div> */}
                
            
    </div>
  )
}

export default FindFeedback;
import { useFormik } from 'formik'
import React from 'react'
import axios from 'axios'

const FindFeedback=()=> {
    const formik= useFormik({
        initialValues:{
            freelancerId:''
        },
        onSubmit: (values) => {
            console.log(values);
            axios.get(`http://localhost:8080/jobportal/recruiter/findfeedbacksbyfreelancer/${values.freelancerId}`, values)
            .then(resp=>{
                console.log("Feddback Created");
                console.log(resp);
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
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
            <div className="form-group">
                 <label htmlFor="freelancerId">Freelancer ID:</label>
                 <input name="freelancerId" type="Integer" className="form-control" id="freelancerId" value={formik.values.freelancerId} onChange={formik.handleChange}/>
                 {formik.errors.freelancerId? <div className="errors">{formik.errors.freelancerId}</div> : null}
            </div>

            <div className="btn btn-outline-primary">
                <button type="submit" >Find</button>
            </div>
        </form>
    </div>
  )
}

export default FindFeedback;
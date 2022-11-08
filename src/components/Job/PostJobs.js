import React from 'react';
import { useFormik } from "formik";
import axios from 'axios';

const PostJob= () => {
    const formik = useFormik({
        initialValues:{
            skillId:'',
            recruiterId:'',
            freelancerId:'',
            postedDate:Date,
            active:Boolean
        },
        onSubmit: (values) => {
            console.log(values);
            axios.post("http://localhost:8080/jobportal/job/postjob", values)
            .then(resp=>{
                console.log("Job Added");
                console.log(resp.data);
            }).catch(err=>{
                console.error(err.response.data);
           })
        },
        validate:(values)=>{
            let errors={};
            if(!values.skillId){
              errors.skillId="Enter the skill Id"
            }
            if(!values.recruiterId){
              errors.recruiterId="Enter the recruiter Id"
            }
            if(!values.freelancerId){
              errors.freelancerId="Enter the freelancer Id"
            }
            if(!values.postedDate){
              errors.postedDate="Enter the date"
            }
            return errors;
          }
    });
  return (
    <div className="postJob"> 
    <h2>Post Job</h2>
    <div>
        <div>
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
          <div className="form-group">
          <label htmlFor="skillId">Skill ID:</label>
          <input name="skillId" type = "Integer" className="form-control" id="skillId" value={formik.values.skillId} onChange={formik.handleChange}/>
          {formik.errors.skillId? <div className="errors">{formik.errors.skillId}</div> : null}
          </div>
          
          <div className="form-group">
            <label htmlFor="postedDate">Date of posting </label>
            <input name="postedDate" className="form-control"  type="date" id="postedDate"  value={formik.values.postedDate} onChange={formik.handleChange}/>
            {formik.errors.postedDate? <div className="errors">{formik.errors.postedDate}</div> : null}

          </div>
          <div className="form-group">
            <label htmlFor ="active">Active</label>
            <input name="active" className="form-control"  type= 'checkbox'id="active"  value={formik.values.active} onChange={formik.handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="recruiterId">Recruiter ID:</label>
            <input name="recruiterId" className="form-control" type="Integer" id="reruiterId" value={formik.values.recruiterId} onChange={formik.handleChange} />
            {formik.errors.recruiterId? <div className="errors">{formik.errors.recruiterId}</div> : null}
          </div>
          <div className="form-group">
            <label htmlFor="freelancerId">Freelancer ID:</label>
            <input name="freelancerId" className="form-control" type="Integer" id="freelancerId" value={formik.values.freelancerId} onChange={formik.handleChange} />
            {formik.errors.freelancerId? <div className="errors">{formik.errors.freelancerId}</div> : null}
          </div>
          <div className="btn btn-outline-primary">
            <button type="submit" >post job</button>
          </div>
        </form>
        </div>    
          
    </div>
    </div>
)

}

export default PostJob;
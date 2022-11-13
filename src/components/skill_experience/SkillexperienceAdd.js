import axios from "axios";
import { useFormik } from "formik";

const SkillExperienceAdd=()=>{

const formik = useFormik({
  initialValues: {
    skillId:"",
    freelancerId:"",
    years: ""
  },
  onSubmit: (values) => {
    console.log(values);
    axios.get(`http://localhost:8080/jobportal/skillexperience/addSkill/${values.skillId}/${values.freelancerId}?years=${values.years}`, values)
    .then(resp=>{
        console.log("Added");
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
        if(!values.freelancerId){
          errors.freelancerId="Enter the freelancer Id"
          }
        if(!values.years){
          errors.years="Enter Years"
           }
        return errors;
         }
});
//console.log(formik.values);
return(
    <div className="addSkillExpereince">
    <div class="bg-success p-2 text-white bg-opacity-75">Add your SkillExperience details</div>
        <form className="was-validated" autoComplete="off" onSubmit={formik.handleSubmit}>
          <div className="form-group">
          <br></br>
          <label htmlFor="skillId">SkillId :</label>
          <input name="skillId" type="number" className="form-control" id="skillId" required value={formik.values.skillId} onChange={formik.handleChange}  />
          {formik.errors.skillId ? <div>{formik.errors.skillId}</div> : null}
          </div>
          
          <div className="form-group">
          <br></br>
            <label htmlFor="freelancerId">FreelancerId :</label>
            <input name="freelancerId" type="number" className="form-control" required id="freelancerId" value={formik.values.freelancerId} onChange={formik.handleChange}   />
            {formik.errors.freelancerId ? <div className="errors">{formik.errors.freelancerId}</div> : null}
          </div>
          
          <div className="form-group">
          <br></br>
            <label htmlFor="years">Years : </label>
            <input name="years" className="form-control"  type="number" id="years" required value={formik.values.years} onChange={formik.handleChange} />
            {formik.errors.years ? <div className="errors">{formik.errors.years}</div> : null}
          </div>
          <div className="mb-3 form-check">             
            </div>

            <button type="submit" className="btn btn-outline-primary">
              Add
            </button>
            <a href="/Skill">
              <button type="submit" className="btn btn-outline-danger mx-2">
                Cancel
              </button>
              </a>
        </form>
          
    </div>
)

}
export default SkillExperienceAdd;

import axios from "axios";
import { useFormik } from "formik";

const SkillExperienceUpdateYears=()=>{
//  const navigation = useNavigate();

const formik = useFormik({

  initialValues:{
    skillId:'',
    freelancerId:'',
     years:''
 },

  onSubmit: (values) => {
    console.log(values);
    axios.put(`http://localhost:8080/skillexperience/updateskillyears/${values.freelancerId}/${values.skillId}?years=${values.years}`, values)
    .then(resp=>{
        console.log("Updated");
        console.log(resp.data);
        // navigation('/mySkills');
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
    <div className="UpdateYears">
    <div className="bg-success p-2 text-white bg-opacity-75">Update your SkillExperience details</div>
        <form className="was-validated" autoComplete="off" onSubmit={formik.handleSubmit}>

        <div className="form-group">
          <label htmlFor="skillId">Skill ID:</label>
          <input name="skillId" type = "Integer" className="form-control" id="skillId" required value={formik.values.skillId} onChange={formik.handleChange} placeholder="Enter the skill Id"/>
          {formik.errors.skillId? <div className="errors">{formik.errors.skillId}</div> : null}
          </div>

          <div className="form-group">
            <label htmlFor="freelancerId">Freelancer ID:</label>
            <input name="freelancerId" className="form-control" type="Integer" id="freelancerId" required value={formik.values.freelancerId} onChange={formik.handleChange} placeholder="Enter the freelancer Id" />
            {formik.errors.freelancerId? <div className="errors">{formik.errors.freelancerId}</div> : null}
          </div>
          
          <div className="form-group">
            <label htmlFor="years">Years</label>
            <input name="years" className="form-control"  type="Integer" id="years" required  value={formik.values.years} onChange={formik.handleChange} placeholder="Enter the years"/>
            {formik.errors.years? <div className="errors">{formik.errors.years}</div> : null}
            </div>
  
          <div className="mb-3 form-check">             
            </div>

            <button type="submit" className="btn btn-outline-primary">
              Update
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
export default SkillExperienceUpdateYears;

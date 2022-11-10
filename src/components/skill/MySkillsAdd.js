import axios from "axios";
import { useFormik } from "formik";
import React from 'react';

const MySkillsAdd=()=>{
  document.body.style.backgroundImage = "url('skill.jpg')";  
const formik = useFormik({
  initialValues: {
    name:'',
	description:''	
  },
  onSubmit: (values) => {
    console.log(values);
    axios.post("http://localhost:8080/skill/save", values)
    .then(resp=>{
        console.log("Skill Added");
        console.log(resp.data);
    }).catch(err=>{
        console.error(err);
   })
  },
  validate:(values)=>{
    let errors={};
    if(!values.name){
      errors.name="Enter the Skill name"
    }
    if(!values.description){
      errors.description="Enter the description"
    }
    return errors;
  }
});
//console.log(formik.values);
return(

    <div className="AddSkill">
    <h2>Add your Skill details</h2>
    <form autoComplete="off" onSubmit={formik.handleSubmit}>
         
          <label id="skill">Name :</label>
          <input name="name" type="text" value={formik.values.name} onChange={formik.handleChange} placeholder="Enter the Skill name" />
          {formik.errors.name ? <div>{formik.errors.name}</div> : null}
          <br>
          </br>
            <label  id="skill">Description :</label>
            <input name="description" type="text" value={formik.values.description} onChange={formik.handleChange} placeholder="Enter the description"  />
            {formik.errors.description ? <div className="errors">{formik.errors.description}</div> : null}
         		 <br>
             </br>
          <div className="button">
            <button type="submit" >Add </button>
          </div>
        </form>

    </div>
        
)

}
export default MySkillsAdd;
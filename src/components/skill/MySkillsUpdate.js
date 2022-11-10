import axios from "axios";
import { useFormik } from "formik";
import React, {  useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const MySkillsUpdate=({skill})=>{
 const navigation = useNavigate();
/*  
let initialValues= {
   name='';
   description='';
}

useEffect(()=>{ 
  if(skill!=null){
   initialValues= {
  name: skill.name,
  description: skill.description,

}}},[skill])*/


const formik = useFormik({

  initialValues:{
    id: '',
   name: '',
   description: '',
 },

  onSubmit: (values) => {
    console.log(values);
    axios.put("http://localhost:8080/skill/update", values)
    .then(resp=>{
        console.log("Skill details Update");
        console.log(resp.data);
        navigation('/mySkills');
    }).catch(err=>{
        console.error(err.response.data);
   })
  },
  validate:(values)=>{
    let errors={};
    if(!values.id){
      // errors.id="Enter the id"
    }
    if(!values.name){
      // errors.name="Enter the Skill name"
    }
    if(!values.description){
      // errors.description="Enter the description"
    }
    return errors;
  }
});

//console.log(formik.values);
return(
    <div className="UpdateSkill">
    <h2>Update your Skill details</h2>
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label id="SkillUpdate">Id :</label>
          <input name="id" type="text" className="form-control" id="id" value={formik.values.id} onChange={formik.handleChange} placeholder="enter the id" />
          {formik.errors.id ? <div>{formik.errors.id}</div> : null}
          </div>
          <div className="form-group">
          <label id="SkillUpdate">Name :</label>
          <input name="name" type="text" className="form-control" id="name" value={formik.values.name} onChange={formik.handleChange} placeholder="enter the skill name" />
          {formik.errors.name ? <div>{formik.errors.name}</div> : null}
          </div>
          <div className="form-group">
            <label id="SkillUpdate">Description :</label>
            <input name="description" type="text" className="form-control" id="description" value={formik.values.description} onChange={formik.handleChange} placeholder="enter the description"  />
            {formik.errors.description ? <div className="errors">{formik.errors.description}</div> : null}
          </div>
          
          <div className="button">
            <button type="submit" >Update</button>
          </div>
        </form>
          
    </div>
)



}
export default MySkillsUpdate;

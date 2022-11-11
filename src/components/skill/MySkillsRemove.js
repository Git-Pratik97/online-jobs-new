import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

const MySkillsRemove = ({ skill }) => {
  const navigation = useNavigate();

  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
      description: "",
    },

    onSubmit: (values) => {
      console.log(values);
      axios
        .delete("http://localhost:8080/skill/remove", values)
        .then((resp) => {
          console.log("Skill details Removed");
          console.log(resp.data);
          navigation("/mySkills");
        })
        .catch((err) => {
          console.error(err.response.data);
        });
    },
    validate: (values) => {
      let errors = {};
      if (!values.id) {
        //   errors.id="Enter the id"
      }
      if (!values.name) {
        //   errors.name="Enter the Skill name"
      }
      if (!values.description) {
        //   errors.description="Enter the description"
      }
      return errors;
    },
  });

  //console.log(formik.values);
  return (
    <div className="UpdateSkill">
      <h2>Remove your Skill details</h2>
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <label id="skill">Name :</label>
        <input
          name="name"
          type="text"
          value={formik.values.name}
          onChange={formik.handleChange}
          placeholder="Enter the Skill name"
        />
        {formik.errors.name ? <div>{formik.errors.name}</div> : null}
        <br></br>
        <label id="skill">Description :</label>
        <input
          name="description"
          type="text"
          value={formik.values.description}
          onChange={formik.handleChange}
          placeholder="Enter the description"
        />
        {formik.errors.description ? (
          <div className="errors">{formik.errors.description}</div>
        ) : null}
        <br></br>
        <div className="button">
          <button type="submit">Remove</button>
        </div>
      </form>
    </div>
  );
};
export default MySkillsRemove;

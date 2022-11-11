import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";

const MySkillsAdd = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
    },
    onSubmit: (values) => {
      console.log(values);
      axios
        .post("http://localhost:8080/skill/save", values)
        .then((resp) => {
          console.log("Skill Added");
          console.log(resp.data);
        })
        .catch((err) => {
          console.error(err.response.data);
        });
    },
    validate: (values) => {
      let errors = {};
      if (!values.name) {
        errors.name = "Enter the Skill name";
      }
      if (!values.description) {
        errors.description = "Enter the description";
      }
      return errors;
    },
  });
  //console.log(formik.values);
  return (
    <div className="AddSkill">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link className="nav-link" to="/freelancer/MySkills/AddSkill">
            <div className="bg-success p-2 text-white bg-opacity-75">
              Add Skill
            </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/freelancer/MySkills/UpdateSkill">
            <div className="bg-success p-2 text-white bg-opacity-75">
              Update Skill
            </div>
          </Link>
        </li>
        {/* <li className="nav-item">
            <Link className="nav-link" to="/freelancer/MySkills/RemoveSkill">
            <div className="bg-success p-2 text-white bg-opacity-75">Remove Skill</div>
            </Link>
          </li> */}
      </ul>

      <div className="bg-success p-2 text-white bg-opacity-75">
        Add your Skill details
      </div>

      <form
        className="was-validated"
        autoComplete="off"
        onSubmit={formik.handleSubmit}
      >
        <br></br>
        <label id="skill">Name :</label>
        <input
          name="name"
          type="text"
          className="form-control"
          id="validationTextarea"
          value={formik.values.name}
          onChange={formik.handleChange}
          required
          placeholder="Enter the Skill name"
        />
        {formik.errors.name ? <div>{formik.errors.name}</div> : null}
        <br></br>
        <label id="skill">Description :</label>
        <input
          name="description"
          type="text"
          className="form-control"
          id="validationTextarea"
          value={formik.values.description}
          onChange={formik.handleChange}
          required
          placeholder="Enter the description"
        />
        {formik.errors.description ? (
          <div className="errors">{formik.errors.description}</div>
        ) : null}
        <br></br>
        <div className="mb-3 form-check"></div>

        <button type="submit" className="btn btn-outline-primary">
          Add
        </button>
        <Link to="/Skill">
          <button type="submit" className="btn btn-outline-danger mx-2">
            Cancel
          </button>
        </Link>
      </form>
    </div>
  );
};
export default MySkillsAdd;

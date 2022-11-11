import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const MySkillsUpdate = ({ skill }) => {
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
        .put("http://localhost:8080/skill/update", values)
        .then((resp) => {
          console.log("Skill details Update");
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
        errors.id = "Enter the id";
      }
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
    <div className="UpdateSkill">
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
        Update your Skill details
      </div>
      <form
        className="was-validated"
        autoComplete="off"
        onSubmit={formik.handleSubmit}
      >
        <div className="form-group">
          <label id="SkillUpdate">Id :</label>
          <input
            name="id"
            type="text"
            className="form-control"
            id="validationTextarea"
            value={formik.values.id}
            onChange={formik.handleChange}
            required
            placeholder="enter the id"
          />
          {formik.errors.id ? <div>{formik.errors.id}</div> : null}
        </div>
        <div className="form-group">
          <label id="SkillUpdate">Name :</label>
          <input
            name="name"
            type="text"
            className="form-control"
            id="validationTextarea"
            value={formik.values.name}
            onChange={formik.handleChange}
            required
            placeholder="enter the skill name"
          />
          {formik.errors.name ? <div>{formik.errors.name}</div> : null}
        </div>
        <div className="form-group">
          <label id="SkillUpdate">Description :</label>
          <input
            name="description"
            type="text"
            className="form-control"
            id="validationTextarea"
            value={formik.values.description}
            onChange={formik.handleChange}
            required
            placeholder="enter the description"
          />

          {formik.errors.description ? (
            <div className="errors">{formik.errors.description}</div>
          ) : null}
        </div>

        <div className="mb-3 form-check"></div>

        <button type="submit" className="btn btn-outline-primary">
          Update
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
export default MySkillsUpdate;

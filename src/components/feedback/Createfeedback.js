import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";

const CreateFeedback = () => {
  const [output, setOutput] = useState("");
  const formik = useFormik({
    initialValues: {
      recruiterId: "",
      freelancerId: "",
      ratings: Number,
      comment: "",
    },
    onSubmit: (values) => {
      console.log(values);
      axios
        .post(
          `http://localhost:8080/jobportal/recruiter/createfeedback/${values.recruiterId}/${values.freelancerId}?rating=${values.ratings}`,
          values
        )
        .then((resp) => setOutput(resp.data))
        .catch((err) => setOutput(err.response.data));
    },
    validate: (values) => {
      let errors = {};
      if (!values.recruiterId) {
        errors.recruiterId = "Enter the recruiter Id";
      }
      if (!values.freelancerId) {
        errors.freelancerId = "Enter the freelancer Id";
      }
      if (!values.ratings) {
        errors.ratings = "Enter the ratings";
      }
      if (!values.comment) {
        errors.comment = "Enter comment";
      }
      return errors;
    },
  });
  //console.log(output.errorMessage);
  return (
    <div className="card shadow-lg p-3 mb-5 bg-body roundedr">
    <div className="align-self-center">
    <div className="createfeedback">
      <h2>Create Feedback</h2>
      <form
        className="was-validated"
        autoComplete="off"
        onSubmit={formik.handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="recruiterId">Recruiter ID:</label>
          <input
            name="recruiterId"
            id="validationTextarea"
            type="Integer"
            className="form-control"
            value={formik.values.recruiterId}
            onChange={formik.handleChange}
            required
          />
          {formik.errors.recruiterId ? (
            <div className="errors">{formik.errors.recruiterId}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="freelancerId">Freelancer ID:</label>
          <input
            name="freelancerId"
            type="Integer"
            className="form-control"
            id="validationTextarea"
            value={formik.values.freelancerId}
            onChange={formik.handleChange}
            required
          />
          {formik.errors.freelancerId ? (
            <div className="errors">{formik.errors.freelancerId}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="ratings">Rating</label>
          <input
            name="ratings"
            type="number"
            className="form-control"
            id="validationTextarea"
            max={10}
            min={0}
            value={formik.values.ratings}
            onChange={formik.handleChange}
            required
          />
          {formik.errors.ratings ? (
            <div className="errors">{formik.errors.ratings}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="comment">Comment</label>
          <input
            name="comment"
            type="string"
            className="form-control"
            id="validationTextarea"
            value={formik.values.comment}
            onChange={formik.handleChange}
            required
          />
          {formik.errors.comment ? (
            <div className="errors">{formik.errors.comment}</div>
          ) : null}
        </div>

        <div className="btn btn-outline-primary">
          <button type="submit">Create Feedback</button>
        </div>
      </form>
      {output && <div>{output.errorMessage}</div>}
    </div>
    </div>
    </div>
  );
};

export default CreateFeedback;

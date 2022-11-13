import React from "react";
import axios from "axios";
import { useFormik } from "formik";

const ApplyForJob = () => {
  const formik = useFormik({
    initialValues: {
      freelancerId: "",
      jobId: "",
      coverLetter: "",
    },

    onSubmit: (values) => {
      console.log(values);
      axios
        .post(
          `http://localhost:8080/jobportal/jobapplication/applytojob/${values.freelancerId}/${values.jobId}`,
          formik.values.coverLetter
        )
        .then((resp) => {
          console.log("Applied");
          console.log(resp.data);
          console.log(formik.values.coverLetter)
        })
        .catch((err) => {
          console.error(err.response.data);
        });
    },
    validate: (values) => {
      let errors = {};
      if (!values.freelancerId) {
        errors.freelancer = "Enter the skill Id";
      }
      if (!values.jobId) {
        errors.jobId = "Enter the recruiter Id";
      }
      if (!values.coverLetter) {
        errors.coverLetter = "Enter the freelancer Id";
      }

      return errors;
    },
  });

  return (
    <div className="applyForJob">
      <h2>Apply For a Job</h2>

      <div>
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label htmlFor="freelancerId">Freelancer ID:</label>
            <input
              name="freelancerId"
              type="Integer"
              className="form-control"
              id="freelancerId"
              value={formik.values.freelancerId}
              onChange={formik.handleChange}
            />
            {formik.errors.freelancerId ? (
              <div className="errors">{formik.errors.freelancerId}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="jobId">Job ID</label>
            <input
              name="jobId"
              className="form-control"
              type="integer"
              id="jobId"
              value={formik.values.jobId}
              onChange={formik.handleChange}
            />
            {formik.errors.jobId ? (
              <div className="errors">{formik.errors.jobId}</div>
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="coverLetter">Cover Letter</label>
            <input
              name="coverLetter"
              className="form-control"
              type="text"
              id="coverLetter"
              value={String(formik.values.coverLetter)}
              onChange={formik.handleChange}
            />
          </div>

          <div className="btn btn-outline-primary">
            <button type="submit">Apply</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyForJob;

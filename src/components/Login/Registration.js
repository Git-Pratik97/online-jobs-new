//import React from "react";
import { useState } from "react";
const Registration = () => {
  const initialValues = { firstname: "", lastname: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  // useEffect(() => {
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(formValues);
  //   }
  // }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    //const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstname) {
      errors.firstname = "First Name is required!";
    }
    if (!values.lastname) {
      errors.lastname = "Last Name is required!";
    }
    /*if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }*/
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };
  return (
    <div className="container">
      <div className="card align-self-center shadow-lg p-3 mt-5 mb-3 bg-body rounded">
        <div className="card align-self-center shadow-lg p-3 mb-5 bg-body rounded">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Registration Successful</div>
      ) : (
        <pre></pre>
        //<pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}

      <form className="was-validated" onSubmit={handleSubmit}>
        <h4>Please enter details below to register</h4>
        <br></br>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>First Name</label>
            <input
              type="text"
              name="firstname"
              className="form-control"
              id="validationTextarea"
              placeholder="Enter first name"
              value={formValues.firstname}
              onChange={handleChange}
              required
            />
          </div>
          <p>{formErrors.firstname}</p>
          <div className="field">
            <label>Last Name</label>
            <input
              type="text"
              name="lastname"
              className="form-control"
              id="validationTextarea"
              placeholder="Enter last name"
              value={formValues.lastname}
              onChange={handleChange}
              required
            />
          </div>
          <p>{formErrors.lastname}</p>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="validationTextarea"
              placeholder="Enter Password"
              value={formValues.password}
              onChange={handleChange}
              required
            />
          </div>
          <p>{formErrors.password}</p>
          <div className="dropdown">
            <select id="role" name="role">
              <option value="default">Select Role</option>
              <option value="admin">Admin</option>
              <option value="recruiter">Recruiter</option>
              <option value="freelancer">Freelancer</option>
            </select>
          </div>
          <br></br>
          <br></br>
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
    </div>
    </div>
  );
};

export default Registration;

//import React from "react";
import { useState } from "react";
const Login = () => {
  const initialValues = { username: "", password: "" };
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
    if (!values.username) {
      errors.username = "User Name is required!";
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
        <div className="ui message success">Login Successful</div>
      ) : (
        <pre></pre>
        //<pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}

      <form className="was-validated" onSubmit={handleSubmit}>
        <h4>Please enter details below to login</h4>
        <br></br>
        {/* <div className="ui divider"></div> */}
        <div className="ui form">
          <div className="field">
          <label htmlFor="exampleInputEmail1" className="form-label">User Name</label>
            <input
              type="text"
              name="username"
              className="form-control"
              id="validationTextarea"
              placeholder="Enter user name"
              value={formValues.username}
              onChange={handleChange}
              required
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
          <label htmlFor="exampleInputEmail1" className="form-label">Password</label>
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
          <div className="dropdown" type="button" data-bs-toggle="dropdown">
            <select id="role" name="role">
              <option value="default">Select Role</option>
              <option value="admin">Admin</option>
              <option value="recruiter">Recruiter</option>
              <option value="freelancer">Freelancer</option>
            </select>
          </div>
          <br></br>
          <br></br>
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
    </div>
    </div>
  );
};

export default Login;

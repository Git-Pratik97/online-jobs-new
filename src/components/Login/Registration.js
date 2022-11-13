//import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const initialValues = { firstName: "", lastName: "", password: "", userName: "", role: ""};
  // const [role, setRole] = useState("");
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  // const changeRole = (e) => {
  //   setRole(e.target.value);
  //   console.log(formValues);
  //   console.log(role);
  // }
  const navigate = useNavigate();

  const handleChange = (e) => {
    console.log(e);
    if(e.target.name === 'role') {
      console.log(e.target.value);
    }
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    let keys = Object.keys(formErrors);

    if(keys.length === 0) {
    console.log("No Errors");
    axios.post(`http://localhost:8080/jobportal/admin/save`, JSON.stringify(formValues),
    {headers:{"Content-Type" : "application/json"}}).then((data)=>console.log(data.data)).catch((error)=>console.log(error));
    }else {
      console.log("Errors Present");
    }
    navigate('/login');
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
    const regex = /^[A-Za-z]+$/;
    if (!values.firstname) {
      errors.firstname = "First Name is required!";
    }else if (!regex.test(values.firstname)) {
      errors.firstname = "This is not a valid name format!";
    }

    if (!values.lastname) {
        errors.lastname = "Last Name is required!";
      }else if (!regex.test(values.lastname)) {
        errors.lastname = "This is not a valid name format!";
      }
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
        <div className="card-header">
            <h2>Register</h2>
          </div>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              id="validationTextarea"
              placeholder="Enter first name"
              value={formValues.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <p>{formErrors.firstName}</p>
          <div className="field">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              id="validationTextarea"
              placeholder="Enter last name"
              value={formValues.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="field">
            <label>User Name</label>
            <input
              type="text"
              name="userName"
              className="form-control"
              id="validationTextarea"
              placeholder="Enter userName"
              value={formValues.userName}
              onChange={handleChange}
              required
            />
          </div>
          <p>{formErrors.lastName}</p>
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
            <select id="role" name="role" value={formValues.role} onChange={handleChange}>
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

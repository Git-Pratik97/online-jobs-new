//import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const initialValues = { userName: "", password: "", role: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
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
    axios.post(`http://localhost:8080/jobportal/admin/login`, JSON.stringify(formValues),
    {headers:{"Content-Type" : "application/json"}}).then((data)=>{
      console.log(data.data);
      if(data.data.role === 'recruiter') {
         navigate('/recruiter');
      }
      if(data.data.role === 'freelancer') {
        navigate('/freelancer');
     }
     if(data.data.role === 'admin') {
      navigate('/admin');
   }
    }).catch((error)=>console.log(error));
    }else {
      console.log("Errors Present");
    }

  };

 
  const validate = (values) => {
    const errors = {};
    //const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.userName) {
      errors.userName = "User Name is required!";
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
      <div className="card-header">
            <h2>Login</h2>
          </div>
        {/* <div className="ui divider"></div> */}
        <div className="ui form">
          <div className="field">
          <label htmlFor="exampleInputEmail1" className="form-label">User Name</label>
            <input
              type="text"
              name="userName"
              className="form-control"
              // id="validationTextarea"
              placeholder="Enter user name"
              value={formValues.userName}
              onChange={handleChange}
              required
            />
          </div>
          <p>{formErrors.userName}</p>
          <div className="field">
          <label htmlFor="exampleInputEmail1" className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              // id="validationTextarea"
              placeholder="Enter Password"
              value={formValues.password}
              onChange={handleChange}
              required
            />
          </div>
          <p>{formErrors.password}</p>
          <div className="dropdown" >
            <select id="role" name="role" value={formValues.role} onChange={handleChange}>
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

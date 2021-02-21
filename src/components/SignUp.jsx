import React from "react";
import { useFormik } from "formik";
import "./sign up/form.css";
const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length > 15) {
    errors.name = "Must be 15 characters or less";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 6) {
    errors.password = "Password should be atleast 6 characters";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

export const SignupForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div class="maindiv">
      <div class="formdiv">
        <div class="form_image"></div>

        <div class="form">
          <h2>Sign Up</h2>
          <form onSubmit={formik.handleSubmit}>
            <div class="input-label">
              <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              <label htmlFor="name">Full Name</label>

              {formik.errors.name ? <div>{formik.errors.name}</div> : null}
            </div>
            <div class="input-label">
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <label htmlFor="email">Email Address</label>

              {formik.errors.email ? <div>{formik.errors.email}</div> : null}
            </div>
            <div class="input-label">
              <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <label htmlFor="password">Password</label>

              {formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null}
            </div>

            <button type="submit" class="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

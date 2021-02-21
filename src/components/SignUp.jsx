import React, { useCallback } from "react";
import "./form.css";
import { withRouter } from "react-router";
import app from "../firebase";

const SignupForm = ({ history }) => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted

  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div class="maindiv">
      <div class="formdiv">
        <div class="form_image"></div>

        <div class="form">
          <h2>Sign Up</h2>
          <form>
            <div class="input-label">
              <input id="name" name="name" type="text" autocomplete="off" />
              <label htmlFor="name">Full Name</label>
            </div>
            <div class="input-label">
              <input id="email" name="email" type="email" />
              <label htmlFor="email">Email Address</label>
            </div>
            <div class="input-label">
              <input id="password" name="password" type="password" />
              <label htmlFor="password">Password</label>
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

export default withRouter(SignupForm);

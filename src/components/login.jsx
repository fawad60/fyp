import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../firebase.js";
import { AuthContext } from "../Auth.js";
import "./form.css";

const LoginForm = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div class="maindiv">
      <div class="formdiv">
        <div class="form_image"></div>

        <div class="form">
          <h2>Sign in</h2>

          <form method="post" autocomplete="off">
            <div class="input-label">
              <input type="email" autocomplete="off" required />
              <br />
              <label for="companyemail"> email</label>
              <br />
            </div>

            <div class="input-label">
              <input type="password" autocomplete="off" required />
              <br />
              <label for="jobtitle">password</label>
              <br />
            </div>

            <div>
              <input type="submit" value="Login" class="submit-btn" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default withRouter(LoginForm);

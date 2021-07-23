import styles from "./SignupCss.module.css";
import { Navbar } from "./NavBar";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
// import { InputAdornments } from './InputFieldsComponents/PasswordField';
////material ui stuff
import React from "react";

import TextField from "@material-ui/core/TextField";
import { SimpleBackdrop } from "./Loading";

export function Signup({ setIsSignup }) {
  const [signupData, setSignupData] = useState();
  const [startLoading, setStartLoading] = useState(false);
  //updated the signupdate on change of input
  const updateData = (e) => {
    const { name, value } = e.target;
    let payload = {
      ...signupData,
      [name]: value,
    };
    setSignupData(payload);
  };
  function validateSignupData() {
    return true;
  }
  const signup = (e) => {
    setStartLoading(true);
    e.preventDefault();
    if (validateSignupData()) {
      axios
        .post("http://localhost:3001/signupData", signupData)
        .then((res) => {
          ////open the filling form
          setStartLoading(true);
          setIsSignup(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <>
      <Navbar />
      <div className={styles.signup}>
        <div className={styles.signupHeader}>
          <h1>Sign up</h1>
        </div>
        <div className={styles.formCont}>
          <form onSubmit={signup} noValidate autoComplete="off">
            <div className={styles.fNameLNameCont}>
              <TextField
                id="outlined-basic"
                label="First name"
                variant="outlined"
                name="firstName"
                onChange={updateData}
              />
              <TextField
                id="outlined-basic"
                label="Last name"
                variant="outlined"
                name="lastName"
                onChange={updateData}
              />
            </div>

            <StyledTextField
              id="outlined-basic"
              label="Email address"
              variant="outlined"
              name="emailAddress"
              onChange={updateData}
            />
            <StyledTextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              name="password"
              onChange={updateData}
            />
            <button className="next">Next</button>
          </form>
        </div>
        <div class={styles.signupFooter}>
          <p>
            GoFundMe's fee is 5% from each donation you receive. The payment
            processor fee is 2.9% + $0.30 per donation. By continuing, you agree
            to the GoFundMe terms and you acknowledge receipt of our privacy
            policy.
          </p>
        </div>
      </div>
      <SimpleBackdrop handleClose={startLoading} />
    </>
  );
}
const StyledTextField = styled(TextField)`
  display: block;
  margin-top: 10px;
  input {
    width: 430px;
  }
`;

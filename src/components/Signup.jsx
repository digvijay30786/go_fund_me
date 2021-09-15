import styles from "./SignupCss.module.css";
import { Navbar } from "./NavBar";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
////material ui stuff
import React from "react";
import TextField from "@material-ui/core/TextField";
import { SimpleBackdrop } from "./Loading";
import SimpleAlerts from './Alert'

export function Signup({ setIsSignup }) {
  const [signupData, setSignupData] = useState();
  const [startLoading, setStartLoading] = useState(false);
  const [error, setError] = useState();
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
    if (signupData === undefined) {
      setError('Please fill your information for signup')
    } else if (signupData.firstName === undefined || signupData.firstName === '') {
      setError('Please fill your information for first name')
    } else if (signupData.lastName === undefined || signupData.lastName === '') {
      setError('Please fill your information for last name')
    } else if (signupData.emailAddress === undefined || signupData.emailAddress === '') {
      setError('Please fill your information for email')
    } else if (signupData.password === undefined || signupData.password === '') {
      setError('Please fill your information for password')
    } else {
      return true;
    }
  }
  const signup = (e) => {
    e.preventDefault();
    if (validateSignupData()) {
       setStartLoading(true);
      let promise2 =axios.post("http://localhost:3001/currLoggedIn", signupData)
      let promise1 = axios.post("http://localhost:3001/users", signupData)
      
      Promise.all([promise1, promise2]).then((res) => {
        setStartLoading(true);
        setIsSignup(true);
      }).catch((err) => {
          console.log(err);
      });
    }
  };
  return (
    <>
      <Navbar para={"Already have an account?"} link={'/singin'} linkVal={'signin' }/>
      {error !== undefined && <SimpleAlerts message={ error }/>}
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
// function validateMail(str) {
//   let regex =
//     /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-zA-Z]{2,10})(.[A-Za-z]{2,10})$/;
//   return regex.test(str);
// }
// function validateMobile(str) {
//   let regex = /^[0-9]{10}$/;
//   return regex.test(str);
// }
// function validatePassword(str) {
//   return str.length > 5 ? true : false;
// }
// function validateName(str) {
//   str = str.trim();
//   let regex = /^[a-zA-Z]+$/;
//   if (!regex.test(str)) return false;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == " ") {
//       return false;
//     }
//   }
//   return true;
// }
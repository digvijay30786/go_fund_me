import styles from "./SignupCss.module.css";
import { Navbar } from "./NavBar";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { InputAdornments } from './InputFieldsComponents/PasswordField';
////material ui stuff
import React from "react";

import TextField from "@material-ui/core/TextField";
import { SimpleBackdrop } from "./Loading";
import  FacebookIcon  from '@material-ui/icons/Facebook';

export function Signin() {
 
  return (
    <>
      <Navbar />
      <div className={styles.signup}>
        <div className={styles.signupHeader}>
          <h1>Sign In</h1>
        </div>
        <div className={styles.formCont}>
          <form autoComplete="off">
                      <div className={styles.fNameLNameCont}>
                          <div className={styles.first}>
                              <div className={styles.align}><FacebookIcon style={{ color: "White",fontSize: "30"}}/></div><div className={styles.align}><h3>Continue With Facebook</h3></div>
                          </div>
                          </div>
                          <div className={styles.or}>
                              <div className={styles.one}><div></div></div>
                              <div className={styles.two}><h3>or</h3></div>
                             <div className={styles.three}><div></div></div>
                      </div>
                      
                      <div className={styles.email}>
                         <StyledTextField
                         id="outlined-basic"
                        label="Email address"
                           variant="outlined"
                          name="emailAddress" />
                      </div>
                       
                      <div className={styles.email}>
                      <StyledTextField
                      id="outlined-password-input"
                      label="Password"
                      type="password"
                      autoComplete="current-password"
                      variant="outlined"
                      name="password"/>
                      </div>
                     
            <button className={styles.gobutton}>Sign in to GoFundMe</button>
          </form>
        </div>
        <div class={styles.signinFooter}>
          <p>
            Forget Your Password?
          </p>
        </div>
      </div>
      <SimpleBackdrop/>
    </>
  );
}
const StyledTextField = styled(TextField)`
  
  text-align: center;
  input{
   width:250px;
  }
  margin:auto;
 
`;

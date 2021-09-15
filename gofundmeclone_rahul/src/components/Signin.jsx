import styles from "./SignupCss.module.css";
import { Navbar } from "./NavBar";
//import { Link } from "react-router-dom";
import styled from "styled-components";
// import { InputAdornments } from './InputFieldsComponents/PasswordField';
////material ui stuff
import React from "react";

import TextField from "@material-ui/core/TextField";
import { SimpleBackdrop } from "./Loading";
import  FacebookIcon  from '@material-ui/icons/Facebook';

import { useState } from 'react'

import axios from "axios"

async function fetchUsers() {

  try {
    let res = await axios.get('http://localhost:3001/users');
    return res.data;
  } catch (err) {
    alert('404 error');
  }
}
export function Signin() {
  const [signIn, setSignIn] = useState();
  const [startLoading, setStartLoading] = useState(false);
  const handleChange = (e) => {
    let { name, value } = e.target;
    let payload = {
      ...signIn,
      [name]: value
    }
    setSignIn(payload);
  }
  const signInUser = (e) => {
    e.preventDefault();
    setStartLoading(true);
    fetchUsers().then((res) => {
      setStartLoading(false);
      for (let i = 0; i < res.length; i++) {
        if (res[i].emailAddress=== signIn.emailAddress && res[i].password === signIn.password) {
          // updateCurrLoggedIn()
          
        } else {
          alert('something went wrong')
        }
      }
    })
  }
  return (
    <>
      <Navbar para={"don't have any accont?"} link={'/rahul'} linkVal={'signup' }/>
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
                            name="emailAddress"
                            onChange = {handleChange}  
                          />
                      </div>
                       
                      <div className={styles.email}>
                      <StyledTextField
                      id="outlined-password-input"
                      label="Password"
                      type="password"
                      autoComplete="current-password"
                      variant="outlined"
                        name="password"
                        onChange = {handleChange}  
                      />
                      </div>
                     
            <button className={styles.gobutton} onClick = {signInUser}>Sign in to GoFundMe</button>
          </form>
        </div>
        <div class={styles.signinFooter}>
          <p>
            Forget Your Password?
          </p>
        </div>
      </div>
      <SimpleBackdrop handleClose={startLoading}/> 
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

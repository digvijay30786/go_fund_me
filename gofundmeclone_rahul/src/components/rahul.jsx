import '../App.css';
import { Signup } from './Signup'
import { FillingForm } from './FillingForm/FillingForm';
import { useState, useEffect } from 'react';
// import { ManageFundLanding } from './ManageFundPage.jsx/ManageFundLanding';
// import { SimpleBackdrop } from './Loading';

function checkUserLoggedInOrNot() {
  return false;
}

export function Rahul() {
  const [isSignup, setIsSignup] = useState();
  useEffect(() => {
    if (checkUserLoggedInOrNot()) {
      setIsSignup(true);
    } else {
      setIsSignup(false);
    }
  }, [])
  // const [isFillingFormDone, setFillingFormDone] = useState(false);
  return (
    <div className="App">
      {/* {isSignup === undefined ? <SimpleBackdrop handleClose={true} /> : isSignup ? <FillingForm /> : <Signup />} */}
      {/* <ManageFundLanding /> */}
      {isSignup ? <FillingForm /> : <Signup setIsSignup={setIsSignup} />}
    </div>
  );
}

// {isFillingFormDone ? <ManageFundLanding /> : isSignup ? <FillingForm setFillingForm={setFillingFormDone} /> : <Signup setIsSignup={setIsSignup} />}
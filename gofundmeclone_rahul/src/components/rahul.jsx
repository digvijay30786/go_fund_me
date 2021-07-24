import '../App.css';
import { Signup } from './Signup'
import { FillingForm } from './FillingForm/FillingForm';
import { useState, useEffect } from 'react';


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
  return (
    <div className="App">
      {isSignup ? <FillingForm /> : <Signup setIsSignup={setIsSignup} />}
    </div>
  );
}

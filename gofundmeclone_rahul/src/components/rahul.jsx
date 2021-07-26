import '../App.css';
import { Signup } from './Signup'
import { FillingForm } from './FillingForm/FillingForm';

import { useState, useEffect } from 'react';
import axios from 'axios';


async function checkUserLoggedInOrNot() {
  let res = await axios.get('http://localhost:3001/currLoggedIn');
  if (Object.keys(res.data).length === 0) {
    return false;
  }
  return true;
}


export function Rahul() {
  const [isSignup, setIsSignup] = useState();
  useEffect(() => {
    checkUserLoggedInOrNot().then((res) => {
      setIsSignup(res);
    })
  }, [])
  return (
    <div className="App">
      {isSignup ? <FillingForm /> : <Signup setIsSignup={setIsSignup} />}
    </div>
  );
};

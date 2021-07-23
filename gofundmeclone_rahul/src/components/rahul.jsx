import '../App.css';
import { Signup } from './Signup'
import { FillingForm } from './FillingForm/FillingForm';
import { useState } from 'react';
import { ManageFundLanding } from './ManageFundPage.jsx/ManageFundLanding';

function Rahul() {
  const [isSignup, setIsSignup] = useState(true);
  const [isFillingFormDone , setFillingFormDone] = useState(true);
  return (
    <div className="App">
      {isFillingFormDone ? <ManageFundLanding /> : isSignup ? <FillingForm  setFillingForm={ setFillingFormDone }/> : <Signup setIsSignup={setIsSignup}/>}
    </div>
  );
}

export default Rahul;
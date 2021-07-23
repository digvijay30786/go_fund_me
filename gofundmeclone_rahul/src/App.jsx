import logo from './logo.svg';
import './App.css';
import { Signup } from './components/Signup'
import { FillingForm } from './components/FillingForm/FillingForm';
import { useState } from 'react';
import { ManageFundLanding } from './components/ManageFundPage.jsx/ManageFundLanding';










function App() {
  const [isSignup, setIsSignup] = useState(false);
  const [isFillingFormDone , setFillingFormDone] = useState(false);
  return (
    <div className="App">
      {isFillingFormDone ? <ManageFundLanding /> : isSignup ? <FillingForm  setFillingForm={ setFillingFormDone }/> : <Signup setIsSignup={setIsSignup}/>}
    </div>
  );
}

export default App;

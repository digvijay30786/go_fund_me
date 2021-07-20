import logo from './logo.svg';
import './App.css';
import { Signup } from './components/Signup'
import { FillingForm } from './components/FillingForm/FillingForm';
import { useState } from 'react';

function App() {
  const [isSignup, setIsSignup] = useState(false);
  return (
    <div className="App">
      {isSignup ? <FillingForm/> : <Signup setIsSignup={setIsSignup}/>}
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Signup } from './components/Signup'
import { FillingForm } from './components/FillingForm/FillingForm';
import { Navbar } from './components/NavBar'
function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <Signup /> */}
      <FillingForm/>
    </div>
  );
}

export default App;

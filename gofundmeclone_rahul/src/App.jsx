import logo from './logo.svg';
import './App.css';
import { Signup } from './components/Signup'

import { Navbar } from './components/NavBar'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Signup />
    </div>
  );
}

export default App;

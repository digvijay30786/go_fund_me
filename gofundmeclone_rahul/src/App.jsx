import Main from "./components/components/main";
import HowItWorks from './components/HowItWorks';
import { FundraiserPayment } from './components/ManageFundPage/FundraiserPayment';
import Rahul from './components/rahul';
import Donate from './components/components/donate';
import { Signup } from './components/Signup';
import { Signin }  from './components/Signin';
import {Switch,Route} from "react-router-dom";
export default function App() {
  
  return (
    <Switch>
      <Route exact path='/' component={Main} />
      <Route exact path='/works' component={HowItWorks} />
      <Route path='/rahul' component={Rahul} />
      <Route path='/fundraiser' component={FundraiserPayment} />
      <Route path='/singin' component={Signin} />
      <Route path='/donate' component={Donate} />
      <Route path='/signup' component={Signup} />
    </Switch>
  );
}

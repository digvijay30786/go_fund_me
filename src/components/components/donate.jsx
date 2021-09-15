import Menu from "./menu";
import './donate.css';
import { React,useState } from "react";
// import styled from "styled-components";
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Link, Redirect } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
export default function Donate() {

    const [dis, setDis] = useState(false);
    const [payment,setPayment] = useState(1500);
    const disabledtab = dis ? "" : "disabled";
    const [form, setForm] = useState({});

    toast.configure();

    const product = {
        name: form.name,
        price: payment,
        description: "Donation",
        
    };

    useEffect(() => {
        if (Object.keys(form).length === 4)
        {
            setDis(true);
        }
        else
        {
            setDis(false);
        }
    },[form])
    
    const handlechange = (e) =>
    {
        const { name, value } = e.target;
        const cs = {
            [name]: value
        }
        setForm({ ...form, ...cs });
    };
    
      async function handleToken(token, addresses) {
          await axios.post(
              "http://localhost:3002/payment",
              { token, product }
          ).then(({ data }) => {
              console.log(data.token);
              if (data.token.id !== "") {
                  toast("Success! Check email for details", { type: "success" });
                  setForm({});
                  return (<Redirect to="/your/redirect/page" />);
              }
              else
              {
                  toast("Something went wrong", { type: "error" });
              }
          }).catch((err) => {
              toast("Something went wrong", { type: "error" });
          });
      }
    
    const valid = (e) => {
        setPayment(e.target.value);
    }
    const handlePayment = (e) => {
        setPayment(e.target.value);
    }
    return <>
        <Menu />
        <div className="firstNa">
            <div className="donateNa">
                <div className="head">
                    <span> {"<"} <Link to ='/' className="href">Home</Link></span>
                    <h3>Choose a donation amount</h3>
                    <p></p>
                </div>
                <div className="content">
                <p>Most Donors donate approx  1500 to this Fundaraiser</p>
                    <div className="btn">
                        <button onClick={ valid } value="1000" >1000</button>
                        <button onClick={ valid }  value="1500" >1500</button>
                        <button onClick={ valid }  value="4500" >4500</button>
                    </div>
                    <div className="input">
                        <input type="text" onChange={handlePayment} placeholder="Enter Amount" value={payment}/>
                    </div>

                    <div className="formsm">
                        <form onSubmit={(e) => { e.preventDefault(); e.target.reset();}}>
                            <div className="details">
                                <div className="typo">
                                    <input type="text" onChange={handlechange} name ="name" placeholder="Name"/>  
                                </div>

                                <div className="typo2">
                                    <PersonIcon/>
                                </div>
                            </div>
                            <div className="details">
                                <div className="typo">
                                    <input type="text" onChange={handlechange} name="email" placeholder="Email-ID"/>  
                                </div>

                                <div className="typo2">
                                <EmailIcon/>
                                </div>
                            </div>

                            <div className="details">
                                <div className="typo">
                                    <input type="text" onChange={handlechange} name="mobile" placeholder="Mobile No."/>  
                                </div>

                                <div className="typo2">
                                   <PhoneAndroidIcon/>
                                </div>
                            </div>

                            <div className="details2">
                            <RadioGroup
                                aria-label="gender"
                                name="radio-buttons-group"
                                    className="aaaa"
                                    onChange={handlechange}
                            >
                                <FormControlLabel value="female" control={<Radio color="success" />} className="radioLabel" label="I’m an Indian National" />
                                <FormControlLabel value="male" control={<Radio color="success" />} className="radioLabel" label="I’m not an Indian National" />
                                </RadioGroup>
                                <div className="bbt">
                                    {/* <button>Proceed to Pay { payment }</button> */}
                                    
                                    <StripeCheckout
                                        stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
                                        token={handleToken}
                                        amount={payment*100}
                                        name={form.name}
                                        currency="INR"
                                        allowRememberMe
                                        billingAddress
                                        shippingAddress
                                        email={form.email}
                                        disabled={disabledtab}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
}
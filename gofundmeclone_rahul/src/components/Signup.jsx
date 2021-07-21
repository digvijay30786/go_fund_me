import styles from './SignupCss.module.css'
import { Navbar } from './NavBar'
import { useState } from 'react'
import axios from 'axios'

export function Signup({setIsSignup}) {
    const [signupData, setSignupData] = useState();
    //updated the signupdate on change of input
    const updateData = (e) => {
        const { name, value } = e.target;
        let payload = {
            ...signupData,
            [name]: value
        }
        setSignupData(payload);
    }
    function validateSignupData() {
        return true;
    }
    const signup = (e) => {
        e.preventDefault();
        if (validateSignupData()) {
            axios.post('http://localhost:3001/signupData', signupData).then((res) => {
                ////open the filling form
                setIsSignup(true);
            }).catch((err) => {
                console.log(err);
            })
        }
    }
    return <>
        <Navbar />
        <div className={styles.signup}>
            <div className={styles.signupHeader}>
                <h1>Sign up</h1>
            </div>
            <div className={styles.formCont}>
                <form onSubmit={signup}>
                    <div className={styles.fNameLNameCont}>
                        <input onChange={updateData} type="text" name="first-name" placeholder="First name" />
                        <input onChange={updateData} type="text" name="last-name" placeholder="Last name" />
                    </div>
                    <input onChange={updateData} type="email" name="email-address" placeholder="Email address" />
                    <input onChange={updateData} type="password" name="password" placeholder="Password" />
                    <button>Next</button>
                </form>
            </div>
            <div class={styles.signupFooter}>
                <p>GoFundMe's fee is 5% from each donation you receive. The payment processor fee is 2.9% + $0.30 per donation. By continuing, you agree to the GoFundMe terms and you acknowledge receipt of our privacy policy.</p>
            </div>
        </div>
    </>
}
import styles from './SignupCss.module.css'

export function Signup() {
    return <div className={styles.signup}>
        <div class={styles.signupHeader}>
            <h1>Sign up</h1>
        </div>
        <div className={styles.formCont}>
            <form>
                <div className={styles.fNameLNameCont}>
                    <input type="text" name="" placeholder="First name" />
                    <input type="text" name="" placeholder="Last name" />
                </div>
                <input type="text" name="" placeholder="Email address" />
                <input type="password" name="" placeholder="Password" />
                <button>Next</button>
            </form>
        </div>
        <div class={styles.signupFooter}>
            <p>GoFundMe's fee is 5% from each donation you receive. The payment processor fee is 2.9% + $0.30 per donation. By continuing, you agree to the GoFundMe terms and you acknowledge receipt of our privacy policy.</p>
        </div>
    </div>
}
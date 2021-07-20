import { LogoSvg } from "./LogoSVG";
import styles from './SignupCss.module.css'



export function Navbar() {
    // const StyledSvg = styled. 
    return <header className={styles.header}>
        <nav>
            <div className={styles.svgCont}>
                <LogoSvg />
            </div>
            <div>
                Already have an account? <a href="#"> Sign in</a>
            </div>
        </nav>
    </header>
}
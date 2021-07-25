import { LogoSvg } from "./LogoSVG";
import styles from './SignupCss.module.css'
import { Link } from "react-router-dom";


export function Navbar() { 
    return <header className={styles.header}>
        <nav>
            <Link to=''>
            <div className={styles.svgCont}>
               <LogoSvg />
            </div>
            </Link>
            <div>
                Already have an account? <Link to='/singin'>Sign in</Link>
            </div>
        </nav>
    </header>
}
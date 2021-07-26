import { LogoSvg } from "./LogoSVG";
import styles from './SignupCss.module.css'
import { Link } from "react-router-dom";


export function Navbar({para, link, linkVal}) { 
    return <header className={styles.header}>
        <nav>
            <Link to=''>
            <div className={styles.svgCont}>
               <LogoSvg />
            </div>
            </Link>
            <div>
                {para}<Link to = {link}>{linkVal }</Link>
            </div>
        </nav>
    </header>
}
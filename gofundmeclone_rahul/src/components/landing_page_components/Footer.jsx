import { LogoSvg } from "./LogoSVG";
import styles from "./Footer.module.css";
import  FacebookIcon  from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import MailIcon from '@material-ui/icons/Mail';
export function Footer() {
    //  const [text, settext] = useState(0);


    return (
        <div>
            <hr className={styles.footerTop}/>
            <footer>
            <div className={styles.outterContainer}>
                    <div className={styles.innerContainer1 }>
                        <div className={ styles.svgLogo}>
                        <LogoSvg />
                        </div>
                        <div>
                            <select className={styles.select}>
                            <option >English (United States)</option>
                            <option >English (Canada)</option>
                            <option >English (United Kingdom)</option>
                            <option >English (Austrialia)</option>
                            <option >English (Denmark)</option>
                            <option >English (Finland)</option>
                            <option >English (Norway)</option>
                            <option >English (Ireland)</option>
                            <option >English (Swedan)</option>
                            <option>Español (Estados Unidos)</option>
                            <option>Español (España)</option>
                            <option>Français (Francs)</option>
                            <option>Français (la suisse)</option>
                            <option>Français (Belgique)</option>
                            <option>Français (Lexembourg)</option>
                            <option>Deutsch (Deutschland)</option>
                            <option>Deutsch (Österreich)</option>
                            <option>Deutsch (Schweiz)</option>
                            <option>Português (Portugal)</option>
                            <option>Italiano (Italia)</option>
                            <option>Nederlands (Nederland)</option>
                            <option>Netherlands (België)</option>
                            </select>
                        </div>
                </div>
                    <div className={styles.innerContainer2 }>
                        <div>
                            <h4>FUNDRAISE FOR</h4>
                            <ul>
                                <li>Medical</li>
                                <li>Emergency</li>
                                <li>Memorial</li>
                                <li>Education</li>
                                <li>Nonprofit</li>
                                <li>Coronavirus fundraising</li>
                            </ul>
                        </div>

                        <div>
                            <h4>LEARN MORE</h4>
                            <ul>
                                <li>How GoFundMe works</li>
                                <li>Common questions</li>
                                <li>Success stories</li>
                                <li>Supported countries</li>
                            </ul>
                        </div>

                        <div>
                            <h4>RESOURCESS</h4>
                            <ul>
                                <li>Help center</li>
                                <li>Blog</li>
                                <li>GoFundMe Stories</li>
                                <li>Press center</li>
                                <li>Careers</li>
                                <li><button><span>More Resourcess</span><span></span></button></li>
                            </ul>
                        </div>
                     </div>
                </div>
                    <div className={styles.hiddendivoutter}>
                    <hr/>
                    <h4>MORE RESOURCESS</h4>
                    <div className={styles.hiddendivinner}>
                        <div>
                            <p>Fundraising ideas</p>
                            <p>Rent assistance</p>
                            <p>Fundraising sites</p>
                            <p>Team fundraising ideas</p>
                        </div>
                        <div>
                            <p>What is crowdfunding?</p>
                            <p>Help with bills</p>
                            <p>Help with medical bills</p>
                            <p>Fundraising ideas for college</p>
                        </div>
                        <div>
                            <p>School fundraising ideas</p>
                            <p>How to get a service dog</p>
                            <p>Crowdfunding sites</p>
                            <p>Help for veterans</p>
                        </div>
                    </div>
                </div>
                <hr className={ styles.divider}/>
                <div className={styles.footerend}>
                    <div className={styles.footerendleft}>
                        <span>© 2010-2021 GoFundMe</span>
                        <span>Terms</span>
                        <span>Privacy</span>
                        <span> Legal</span>
                    </div>
                    <div className={styles.footerendright}>
                        <span><FacebookIcon style={{color:"blue"}}/></span>
                        <span><YouTubeIcon style={{color:"red"}}/></span>
                        <span><TwitterIcon style={{color:"#28a9e0"}}/></span>
                        <span><InstagramIcon style={{color:"black"}}/></span>
                          <span><MailIcon  style={{color:"black"}}/></span>
                          <span><KeyboardVoiceIcon  style={{color:"black",marginLeft:"-10px"}}/></span>
                        </div>
                </div>
                    

            </footer>
            
        </div>
    )
}

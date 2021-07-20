import styles from './FillingForm.module.css';
import styled from 'styled-components';
import {LogoSvg} from '../LogoSVG'

function StepsNavBar() {
    const StyledNav = styled.nav`
        height:10vh;
        display:flex;
        justify-content:center;
        align-items:center;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        div svg {
            width:120px
        }
    `
    return (
        <StyledNav>
            <div>
               <LogoSvg/> 
            </div>
        </StyledNav>
    )
}
function StepsBar() {
    return (
        <div className={styles.stepsBar}>
            <p>Step 1 to 5</p>
            <div className={styles.stepsProgressCont}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
function LetsStart() {
    return (
        <div >
            <h3>Let's Start with the basics</h3>
            <form>
                <label htmlFor="">Where do you live?
                    <input type="text" name="" />
                </label>
                <input type="text" name="" />
                <label htmlFor="">What are you fundraising for?</label>
                <select name="" id="">
                    <option value=""></option>
                    <option value=""></option>
                </select>
                <button>Next</button>
            </form>
            <p>By continuing, you agree to the GoFundMe terms and acknowledge receipt of our privacy policy.</p>
        </div>
    )
}

function SetTargetForm() {
    const WarningP = styled.p`
        background-color:${({ para })=>para === 'warning' ? 'rgb(251,248,246)' : 'white'};
        padding:10px;
        border-radius:5px;
        font-size:14px;
        margin-bottom : ${({ para })=> para === 'warning' ? '30px' : '10px'};
    `
    return (
        <div>
            <h2>Set your fundraising target</h2>
            <form >
                <label htmlFor="">
                    How much would you like to raise?
                    <input type="text" name=""placeholder="Enter target amount"/>
                </label>
                <WarningP>GoFundMe’s platform fee is 5%. Bear in mind that transaction fees, including credit and debit charges, are deducted from each donation.</WarningP>
                <WarningP para = 'warning'>To receive money raised, please make sure the person withdrawing has an address and bank account in the selected country of residence.</WarningP>
                <button>Next</button>
            </form>
        </div>
    )
}
function AddPhoto() {
    const DragNDropCont = styled.div`
        border:2px dashed gray;
        height:220px;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        text-align:center;
        font-size:14px;
        margin:30px 0;
    `;
    const StyledPlus = styled.p`
        font-size:38px;
    `
    const OrLine = styled.div`
          border-bottom:0.1px solid rgba(204, 200, 190, 0.76);
          height:10px;
        position:relative;
        &::before {
            content : 'or';
            position : absolute;
            left:45%;
            top:-2px;
            background-color:white;
            width:50px;
            display:flex;
            justify-content:center;
            align-items:center;
            font-size:17px;
        }
    `
    return (
        <div>
            <h2>Add a cover photo or video</h2>
            <p>A high-quality photo or video will help tell your story and build trust with donors.</p>
            <DragNDropCont>
                <StyledPlus>+</StyledPlus>
                <p>Drag and drop or upload a photo that best represents your fundraiser.</p>
            </DragNDropCont>
            <OrLine></OrLine>
            <form >
                <input type="text" placeholder="Add a YouTube link"/>
            </form>
        </div>
    )
}

function TellYourStory() {
    return <div>
        <h2>Tell your story</h2>
        <form>
            
            <label htmlFor="">
                What is your fundraising title?
                <input type="text" name=""/>
            </label>
            <label htmlFor="">
                Why are you fundraising?
                <input type="text" name=""  />
            </label>
            <button>Preview fundraiser</button>
            <button>Next</button>
        </form>
    </div>
}
export function FillingForm() {
    return (
        <>
            <StepsNavBar />
            <div className={styles.center}>
                <StepsBar />
                {/* <LetsStart />  */}
                 {/* <SetTargetForm/> */}
                {/* <TellYourStory/> */}
                <AddPhoto/>
            </div>
        </>
    )
}
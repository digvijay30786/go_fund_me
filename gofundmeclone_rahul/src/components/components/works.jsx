import Menu from "./menu";
import styled from "styled-components";

export default function Works() {
    const Works = styled.div`
    margin-top: 100px;
    text-align:center;
    h1 {
        margin-top:200px;
        font-family:sans-serif;
        font-weight:900;
        margin-bottom:20px;
    }
    p {
        font-size: 1rem;
        line-height: 1.5;
        color:#999;
        margin-bottom:70px;
    }
    .banner
    {
      width:90%;
      margin:auto;
      height:300px;
      background-image:url(https://imgur.com/DjEoO6E.jpg);
      background-size: 100% 100%;
      margin-bottom:30px;
      .playicon
      {
        height:100%;
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        img:hover{
            width:100px;
            transition-duration: 1s;
        }
      }
    }
    `;
    return (<>
        <Menu></Menu>
        <Works>
            <h1>How GoFundMe Works</h1>
            <p>GoFundMe is the best place to fundraise, whether you are an individual, group, or organization.</p>
            <div className="banner">
                <div className="playicon">
                    <img src="https://imgur.com/tHk05sy.png" width="80px"/>
                </div>
            </div>
        </Works>
        
    </>);
}
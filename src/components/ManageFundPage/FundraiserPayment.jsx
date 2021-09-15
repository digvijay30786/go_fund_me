import styled from "styled-components";
//import { useState} from "react";

import Footer from '../components/Footer';
import Menu  from '../components/menu'
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Link } from "react-router-dom";

const StyledDonateNowCard = styled.div`
  width: 320px;
  height: 400px;
  padding: 15px;
  position: fixed;
  right: 10%;
  top: 10%;
  background-color: white;
  border-radius: 5px;
  margin-top:100px;
  box-shadow: 0 0.3125rem 1rem -0.1875rem rgb(0 0 0 / 20%);
  h2 span {
    font-size: 14px;
    font-weight: lighter;
  }
  div {
    margin: 28px 0;
    // border:1px solid red;
    font-size: 14px;
    color: rgb(76, 76, 76);
  }
  button {
    width: 100%;
    height: 40px;
    margin: 10px 0;
    border: 1px solid transparent;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    font-size: 14px;
    cursor: pointer;
    font-weight: 800;
    background: #f58131;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(35.42%, #fdb933),
      color-stop(139.58%, #f58131)
    );
    background: linear-gradient(180deg, #fdb933 35.42%, #f58131 139.58%);
    border-color: #c06828;
    display: flex;
    align-items: center;
    text-align: center;
    svg {
      margin-left: 8px;
    }
    span {
      width: 70%;
    }
  }
`;

function DonateNowCard() {
  return (
    <StyledDonateNowCard>

      <h2>$310,733 <span>raised of $350,000 goal</span></h2>

      <LinearDeterminate />
      <button>
        <ShareSvg /> <span> Share </span>{" "}
      </button>
      <button>

        <DonateNowSvg /><span><Link to='/donate' style = {{textDecoration:'none'}}>Donate now</Link></span>

      </button>
      <div style={{ display: "flex" }}>
        <img
          src="https://www.gofundme.com/static/media/DefaultAvatar.4bb188e1d41df75419450a820a958679.svg"
          alt="GofundMe"
          srcset=""
        />
        <p style={{ paddingLeft: "10px" }}>
          Become the first supporter Your donations matters
        </p>
      </div>
      <hr />
      <div>
        <h1
          style={{
            fontSize: "15px",
            marginBottom: "10px",
            fontWeight: 900,
          }}
        >
          GoFundMe Guarantee
        </h1>
        <p>
          In the unlikely event that something isn’t right, we will work with
          you to determine if misuse has occurred.
        </p>
      </div>
    </StyledDonateNowCard>
  );
}

const FundPreview = styled.div`
  margin-top:100px;  
  width: 80%;
  margin: auto;
  padding-bottom:50px;
  box-shadow: 100px 0px 10px 10px rgb(251, 248, 246);
  background-color: rgb(251, 248, 246);
  & > img {
    width: 600px;
  }
  & > h1 {
    margin: 20px 0;

    margin-top:100px;
  }
  & > div {
    // border:1px solid red;
    width: 500px;
    margin-left: 100px;
  }
  & > div > .fundDetails {
    display: flex;
    border-bottom: 1px solid rgb(200, 200, 200, 0.5);
    height: 50px;
    align-items: center;
    margin-top: 5px;
    color: gray;
  }
`;
const FundPreviewOtherOptions = styled.div`
//   border:1px solid lime;
  width:505px;
  margin-left:230px;
  padding-top:40px;

  
  & h3 {
      border-bottom:1px solid rgb(200, 200, 200, 0.5);
      padding-bottom:10px;
      margin:20px 0;
  }
  .fade-users {
            bottom: 0;
            left: 0;
            right: 0;
            top: 0;
            background: -webkit-gradient(linear,left top,left bottom,from(hsla(0,0%,100%,0)),to(#fff));
    font-family: Lato,Trebuchet,Arial,sans-serif;
    font-size: 1rem;
    line-height: 1.5;
        }
  }
  // .fade-users > div > div {
  //   //   border:1px solid lime;
  //     width:80%;
  //     background-color:rgb(200, 200, 200, 0.5);
  //   }
    .fade-users-box{
        border-bottom: 1px solid #c8c8c8;
          margin-bottom: 1rem;
           padding-bottom: 1rem;
    }
    .longdiv{
      
      width:80%;
      height:15px;
      margin:6px;
     
      background-color:rgb(200, 200, 200, 0.5);
     
    }
     .smalldiv{
       
      width:30%;
      height:15px;
      margin:6px;
      background-color:rgb(200, 200, 200, 0.5);
    
    }
    .comment{
      width:100%;
      displey:flex;
      flex-direction:column;
    }

`
export function FundraiserPayment() {

  const mystyle = {
    
    flexDirection: 'column',
    rowGap: '20px',
    border:'none'
  };

  return (
    <>
      <Menu></Menu>
      <FundPreview>
        <h1>Support Katie DiSimone and her family</h1>
        <img
          src="https://images.gofundme.com/-VSy-_w-So4zxcy-Qm_dgsq-dko=/720x405/https://d2g8igdw686xgo.cloudfront.net/58569821_1626720290962865_r.jpeg"
          alt="GofundMe"
        />
        <div>
          <div className="fundDetails">
            <img
              src="https://www.gofundme.com/static/media/DefaultAvatar.4bb188e1d41df75419450a820a958679.svg"
              alt="GofundMe"
              srcset=""
            />
            <p>&nbsp;&nbsp;&nbsp;Rahul Rajput is organising this fundraiser</p>
          </div>
          <div className="fundDetails">
            <p>
              Created 8 hours ago
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;Creative Arts, Music Film
            </p>
          </div>
          <div className="fundDetails" style={ mystyle}>

            <p>
              Hello how do u do? this is just for educational purpose please
              dont block me i am just cloning this website ... because it was
              given us a project .....
              </p>
            <p>
              Hello how do u do? this is just for educational purpose please
              dont block me i am just cloning this website ... because it was
              given us a project .....
            </p>
          </div>
          <DonateNowCard />
        </div>
      </FundPreview>

    <FundPreviewOtherOptions>
        <h3>Organiser</h3>
        <div style={{ display: "flex" }}>
          <img
            src="https://www.gofundme.com/static/media/DefaultAvatar.4bb188e1d41df75419450a820a958679.svg"
            alt="GofundMe"
            srcset=""
          />
          <p style={{ paddingLeft: "10px" }}>
            Rahul Rajput <br />
            Organiser <br />
            New York, Linkcoln
          </p>
        </div>
        <h3>Comments</h3>
        
        <div className= 'fade-users'>
            <div  className= 'fade-users-box'style={{ display: "flex" }}>
                <img
                    src="https://www.gofundme.com/static/media/DefaultAvatar.4bb188e1d41df75419450a820a958679.svg"
                    alt="GofundMe"
                    srcset=""
                />
                <div className="comment">
            <div className="longdiv"></div>
              <div className="smalldiv"></div>
              </div>
            </div>
            
            <div  className= 'fade-users-box' style={{ display: "flex" }}>
            <img
                src="https://www.gofundme.com/static/media/DefaultAvatar.4bb188e1d41df75419450a820a958679.svg"
                alt=""
                srcset=""
            /><div className="comment">
            <div className="longdiv"></div>
              <div className="smalldiv"></div>
              </div>
            
            </div>
            
            <div  className= 'fade-users-box'style={{ display: "flex" }}>
            <img
                src="https://www.gofundme.com/static/media/DefaultAvatar.4bb188e1d41df75419450a820a958679.svg"
                alt="GofundMe"
                srcset=""
            />
         <div className="comment">
            <div className="longdiv"></div>
              <div className="smalldiv"></div>
              </div>
        </div>
                
            <div style={{ display: "flex" }}>
            <img
                src="https://www.gofundme.com/static/media/DefaultAvatar.4bb188e1d41df75419450a820a958679.svg"
                alt=""
                srcset=""
            /><div className="comment">
            <div className="longdiv"></div>
              <div className="smalldiv"></div>
              </div>
          </div>
          
          
          </div>
          
      </FundPreviewOtherOptions>

      <NowCard></NowCard>
      <Nfundadvice></Nfundadvice>
      <Footer></Footer>
    </>
  );
}

function DonateNowSvg() {
  return (
    <svg
      height="32"
      viewBox="0 0 19 19"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none">
        <rect fill="#333" height="19" rx="2" width="19"></rect>
        <path
          clip-rule="evenodd"
          d="m6.056 11.16c.095-.084.182-.159.28-.22.281-.172.589-.226.915-.198.153.013.3.048.441.11.2.088.351.234.473.412.02.03.03.035.054.001a1.18 1.18 0 0 1 .874-.526c.363-.044.702.026.982.279.141.127.22.291.254.477.022.125.03.25.03.376.002.639 0 1.277.003 1.915 0 .055-.016.067-.069.067a72.604 72.604 0 0 0 -1.011 0c-.05 0-.063-.012-.063-.062a251.2 251.2 0 0 0 .001-1.508c0-.12-.01-.24-.038-.358-.098-.413-.567-.415-.776-.22-.129.12-.172.273-.19.438-.017.14-.01.282-.01.422-.002.41-.002.82 0 1.23 0 .043-.01.058-.055.058a88.164 88.164 0 0 0 -1.029 0c-.048 0-.058-.015-.058-.06.002-.508 0-1.017.001-1.525 0-.104-.004-.208-.024-.31a.426.426 0 0 0 -.34-.356.505.505 0 0 0 -.556.21.652.652 0 0 0 -.086.357c-.004.538-.004 1.076-.002 1.614 0 .058-.016.07-.071.07a72.605 72.605 0 0 0 -1.012 0c-.047 0-.058-.014-.058-.06v-2.955c0-.048.015-.058.06-.057.34.001.682.002 1.023 0 .048 0 .059.014.058.06-.004.101-.001.203-.001.318zm6.789.745h.592c.023 0 .054.006.042-.035a.651.651 0 0 0 -.245-.386c-.135-.095-.288-.11-.447-.104a.59.59 0 0 0 -.573.48c-.009.04.002.045.039.045zm.518.615h-1.124c-.064 0-.07.006-.061.07.008.063.012.125.029.187a.518.518 0 0 0 .363.387c.17.052.34.062.511.011a.568.568 0 0 0 .299-.213c.022-.03.044-.044.083-.043h.983c.054 0 .057.015.042.06-.173.51-.539.803-1.052.93a2.26 2.26 0 0 1 -.508.06 2.323 2.323 0 0 1 -.871-.128c-.55-.207-.897-.593-1.002-1.174-.08-.442-.021-.868.225-1.255.188-.296.453-.5.787-.608a2.335 2.335 0 0 1 1.368-.027c.565.16.899.548 1.052 1.102.055.196.063.398.06.6 0 .045-.027.04-.055.04h-1.13zm.558-6.556c.06-.044.13-.069.197-.1.318-.15.833-.085 1.051.177a.593.593 0 0 1 .035.725l-.068.069c-.263.193-1.88 1.383-2.124 1.53-.266.162-.825.16-1.141-.16-.14-.143-.158-.274-.14-.433.02-.175.142-.31.278-.428zm-8.841-.049 1.91 1.38c.137.119.26.253.28.428.017.16 0 .29-.14.433-.317.321-.876.323-1.142.161-.245-.148-1.86-1.337-2.124-1.531l-.068-.068a.593.593 0 0 1 .035-.726c.218-.262.733-.326 1.051-.177.067.032.137.057.198.1zm5.309-.03-.01 1.238a.554.554 0 0 1 -.018.144c-.097.343-.44.528-.847.528-.421 0-.772-.161-.855-.517a.632.632 0 0 1 -.015-.145l.001-1.248c.004-.472.395-.729.876-.729.484 0 .869.221.869.697zm1.648 2.842c.504.249.882.57 1.157.925h-7.548l.003-.003h-.01c.64-.857 1.897-1.446 3.772-1.446 1.12 0 1.978.202 2.626.524z"
          fill="#fff"
          fill-rule="evenodd"
        ></path>
      </g>
    </svg>
  );
}
function ShareSvg() {
  return (
    <svg
      height="32"
      viewBox="0 0 19 19"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none">
        <rect fill="#333" height="19" rx="2" width="19"></rect>
        <path
          clip-rule="evenodd"
          d="m8 8.375h-1.688a.375.375 0 0 1 -.279-.625l3.188-3.563a.375.375 0 0 1 .558 0l3.188 3.563a.375.375 0 0 1 -.28.625h-1.687v4.125a.375.375 0 0 1 -.375.375h-2.25a.375.375 0 0 1 -.375-.375zm3.849-.75-2.349-2.625-2.349 2.625h1.224c.207 0 .375.168.375.375v4.125h1.5v-4.125c0-.207.168-.375.375-.375zm2.713 4.125a.375.375 0 0 1 .75 0v2.838a1.1 1.1 0 0 1 -1.1 1.1h-9.425a1.1 1.1 0 0 1 -1.1-1.1v-2.838a.375.375 0 0 1 .75 0v2.838c0 .193.157.35.35.35h9.425a.35.35 0 0 0 .35-.35z"
          fill="#fff"
          fill-rule="evenodd"
        ></path>
      </g>
    </svg>
  );
}

///loading bar material ui
const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

function LinearDeterminate() {
  const StyledLinearProgress = styled(LinearProgress)`
    margin: -15px 0 !important;
    .MuiLinearProgress-barColorPrimary {
      background-color: rgb(0, 151, 82);
    }
  `;
  const classes = useStyles();
  //const [progress, setProgress] = useState(10);
  const progress=10;
  return (
    <div className={classes.root}>
      <StyledLinearProgress variant="determinate" value={progress} />
    </div>
  );
}


// reort fundriser

const Mreportfund = styled.div`
  width: 50vw;
  margin-left:17%;
 
  margin-top:4%;
   
 


  button{    border: 1px solid transparent;
    border-radius: .25rem;
    padding: .25rem .5rem;
  align-items: center;
    -webkit-appearance: none;
    background-color: transparent;
    color: inherit;
    cursor: pointer;
  font-family: Lato,Trebuchet,Arial,sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    margin: 0 auto;
  }

`;



function NowCard() {
  return (
      <Mreportfund>
        
       <div><button> <span className="material-icons-outlined">assistant_photo</span>
        Report fundraiser </button>
        </div>
    </Mreportfund>
  );
}


const Mfundadvice = styled.div`

  
  .mainicon{
  width: 1000px;
  height:171px;
  margin-left:17%;
  margin-top:4%;
  display: flex;
  z-index:5;
}

     .iconspic{
    width:100%;
    height:90%;
    margin: 2%;
 
    display: flex;
    }

    .material-icons-outlined{
      font-size:70px;
      font-weight:100;
    }
    .logo{

 
    }
    .advicebox {
      margin-left:10px;
   
    }
    .advicebox > h2{
    font-size: 1rem;
    line-height: 1.5;
    display: block;
    font-weight: 900;
    color: #333;
    font-family: Lato,Trebuchet,Arial,sans-serif;}
    }
     .advicebox > p{
       margin-top:15px;
       color: #767676;
       font-size: .875rem;
    line-height: 1.71;
    font-family: Lato,Trebuchet,Arial,sans-serif;
     }
     .logo > img{
       width:60px;
      // heigth:20px;
     }
`;
function Nfundadvice() {
  return (
      <Mfundadvice>
        
      <div className="mainicon" >
        <div className="iconspic">
          <div className="logo"><span className="material-icons-outlined">
          emoji_events
          </span></div>
          <div className="advicebox">
            <h2>No.1 fundraising platform</h2>
            <p>More people start fundraisers on GoFundMe than on any other platform. Learn more</p>
          </div>
        </div>
      
        <div className="iconspic">
           <div className="logo"><img src="https://img.icons8.com/ios/452/handshake-heart.png" alt="GofundMe"></img></div>
          <div className="advicebox">
            <h2>GoFundMe Guarantee</h2>
            <p>In the unlikely event that something isn’t right, we will work with you to determine if misuse has occurred. Learn more</p>
          </div>
        </div>
        <div className="iconspic"><div className="logo"><span className="material-icons-outlined">
update
</span></div>
          <div className="advicebox">
            <h2>GoFundMe Guarantee</h2>
            <p>In the unlikely event that something isn’t right, we will work with you to determine if misuse has occurred. Learn more</p>
          </div></div>
       
        </div>
    </Mfundadvice>

  );
}
//// material ui components
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Typography from "@material-ui/core/Typography";
//////////////////////////////////////////////////
import { Link } from "react-router-dom";
import styles from "./FillingForm.module.css";
import styled from "styled-components";
import { LogoSvg } from "../LogoSVG";
import { useState, useRef, useEffect } from "react";
import { FaSistrix } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { BiEuro } from "react-icons/bi";
import axios from "axios";
import { useDropzone } from "react-dropzone";

import { SimpleBackdrop } from "../Loading";

function StepsNavBar() {
  const StyledNav = styled.nav`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    div svg {
      width: 120px;
    }
  `;

  return (
    <StyledNav>
      <div>
        <LogoSvg />
      </div>
    </StyledNav>
  );
}
function StepsBar({ stepCount }) {
  return (
    <div className={styles.stepsBar}>
      <p>Step {stepCount} to 5</p>
      <div className={styles.stepsProgressCont}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
function LetsStart({
  setPostCodeModal,
  setStepCount,
  setStartLoading,
  setMyFundraiser,
}) {
  const [letsStartInfo, setLetsStartInfo] = useState();
  const updateLetsStartInfo = (e) => {
    const { name, value } = e.target;
    let payload = {
      ...letsStartInfo,
      [name]: value,
    };
    setLetsStartInfo(payload);
    console.log(letsStartInfo);
  };
  function validateLetsStartInfo() {
    return true;
  }
  const postLetsStartInfo = (e) => {
    // setStartLoading(true);
    // if (validateLetsStartInfo()) {
    //     axios.post('http://localhost:3001/letsStartInfo', letsStartInfo).then((res) => {
    //         setStartLoading(false);
    //         setStepCount(2)
    //     }).catch((err) => {
    //         console.log(err);
    //     })
    // }
    e.preventDefault();
    if (validateLetsStartInfo()) {
      setStartLoading(true);
      setTimeout(() => {
        setMyFundraiser((prevVal) => {
          let payload = {
            ...prevVal,
            basics: letsStartInfo,
          };
          setStartLoading(false);
          setStepCount(2);
          return payload;
        });
      }, 2000);
    }
  };

  return (
    <div>
      <h3>Let's Start with the basics</h3>
      <form onSubmit={postLetsStartInfo}>
        <label htmlFor="country">
          Where do you live?
          <select onChange={updateLetsStartInfo} name="country">
            <option value="0" disabled>
              Choose your country
            </option>
            <option value="AU">Australia</option>
            <option value="AT">Austria</option>
            <option value="BE">Belgium</option>
            <option value="CA">Canada</option>
            <option value="DK">Denmark</option>
            <option value="FI">Finland</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
            <option value="IE">Ireland</option>
            <option value="IT">Italy</option>
            <option value="LU">Luxembourg</option>
            <option value="NL">Netherlands</option>
            <option value="NZ">New Zealand</option>
            <option value="NO">Norway</option>
            <option value="PT">Portugal</option>
            <option value="ES">Spain</option>
            <option value="SE">Sweden</option>
            <option value="CH">Switzerland</option>
            <option value="GB">United Kingdom</option>
            <option value="US">United States</option>
          </select>
        </label>
        <input
          type="text"
          name="postcode"
          placeholder="Search for your postcode"
          onClick={() => setPostCodeModal(true)}
          value={letsStartInfo !== undefined ? letsStartInfo.postcode : ""}
        />
        <label htmlFor="fund-reason">What are you fundraising for?</label>

        <select name="fund-reason" onChange={updateLetsStartInfo}>
          <option value="0">Choose a category</option>
          <option value="Accidents,Emergencies">
            Accidents &amp; Emergencies
          </option>
          <option value="Animals,Pets">Animals &amp; Pets</option>
          <option value="Babies,Children,Family">
            Babies, Children &amp; Family
          </option>
          <option value="Business,Entrepreneurs">
            Business &amp; Entrepreneurs
          </option>
          <option value="Celebrations,Events">Celebrations &amp; Events</option>
          <option value="Community,Neighbours">
            Community &amp; Neighbours
          </option>
          <option value="Competitions,Pageants">
            Competitions &amp; Pageants
          </option>
          <option value="Creative Arts,Music,Film">
            Creative Arts, Music &amp; Film
          </option>
          <option value="Dreams,HopesNWishes">
            Dreams, Hopes &amp; Wishes
          </option>
          <option value="Education,Learning">Education &amp; Learning</option>
          <option value="Funerals,Memorials">Funerals &amp; Memorials</option>
          <option value="Medical,Illness,Healing">
            Medical, Illness &amp; Healing
          </option>
          <option value="Missions,Faith,Church">
            Missions, Faith &amp; Church
          </option>
          <option value="Sports,Teams,Clubs">Sports, Teams &amp; Clubs</option>
          <option value="Travel,Adventure">Travel &amp; Adventure</option>
          <option value="Volunteer,Service">Volunteer &amp; Service</option>
          <option value="Weddings,Honeymoons">Weddings &amp; Honeymoons</option>
          <option value="Other">Other</option>
        </select>
        <button>Next</button>
      </form>
      <p style={{ fontSize: "14px" }}>
        By continuing, you agree to the GoFundMe terms and acknowledge receipt
        of our privacy policy.
      </p>
    </div>
  );
}
const WarningP = styled.p`
  background-color: ${({ para }) =>
    para === "warning" ? "rgb(251,248,246)" : "white"};
  padding: 10px;
  border-radius: 5px;
  font-size: 14px;
  margin-bottom: ${({ para }) => (para === "warning" ? "30px" : "10px")};
`;
function SetTargetForm({ setStepCount, setStartLoading, setMyFundraiser }) {
  const [targetMoney, setTargetMoney] = useState();
  function amountValid() {
    return true;
  }
  const postTargetMoney = (e) => {
    // setStartLoading(true)
    // e.preventDefault();
    // if (amountValid()) {
    //     axios.post('http://localhost:3001/target-amount',{targetMoney : targetMoney}).then((res) => {
    //         setStartLoading(false);
    //         setStepCount(3);

    //     }).catch((err) => {
    //         console.log(err);
    //     })
    // }
    e.preventDefault();
    if (amountValid()) {
      setStartLoading(true);
      setTimeout(() => {
        setMyFundraiser((prevVal) => {
          let payload = {
            ...prevVal,
            targetMoney: targetMoney,
          };
          setStartLoading(false);
          setStepCount(3);
          return payload;
        });
      }, 1000);
    }
  };
  return (
    <div>
      <h2>Set your fundraising target</h2>
      <form onSubmit={postTargetMoney}>
        <label htmlFor="">
          How much would you like to raise?
          <div className={styles.targetMoneyInput}>
            <BiEuro />
            <input
              onChange={(e) => setTargetMoney(e.target.value)}
              value={targetMoney}
              type="text"
              name="target-money"
              placeholder="Enter target amount"
            />
          </div>
        </label>
        <WarningP>
          GoFundMe’s platform fee is 5%. Bear in mind that transaction fees,
          including credit and debit charges, are deducted from each donation.
        </WarningP>
        <WarningP para="warning">
          To receive money raised, please make sure the person withdrawing has
          an address and bank account in the selected country of residence.
        </WarningP>
        <button>Next</button>
      </form>
    </div>
  );
}

// this two components are of addphoto component i pasted it here because it was giving error inside
const ThumbsContainer = styled.aside`
  position: absolute;
  width: 100%;
  height: 100%;
`;
const StyledDropZone = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const StyledPlus = styled.p`
  font-size: 38px;
`;
const OrLine = styled.div`
  border-bottom: 0.1px solid rgba(204, 200, 190, 0.76);
  height: 10px;
  position: relative;
  &::before {
    content: "or";
    position: absolute;
    left: 45%;
    top: -2px;
    background-color: white;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 17px;
  }
`;

function AddPhoto({ setStepCount, setStartLoading, setMyFundraiser }) {
  const [files, setFiles] = useState([]);
  const [nextBtn, setNextBtn] = useState(false);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });
  useEffect(() => {
    if (files.length > 0) {
      setNextBtn(true);
    } else {
      setNextBtn(false);
    }
  }, [files]);
  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const postImage = (e) => {
    
    e.preventDefault();
    if (files.length > 0) {
      setStartLoading(true);
      setTimeout(() => {
        setMyFundraiser((prevVal) => {
          let payload = {
            ...prevVal,
            img: files[0].preview,
          };
          setStartLoading(false);
          setStepCount(4);
          return payload;
        });
      }, 2000);
    }
  };
  const DragNDropCont = {
    border: "2px dashed gray",
    height: "220px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontSize: "14px",
    margin: "30px 0",
    zIndex: "2",
  };
  const img = {
    display: "block",
    width: "100%",
    zIndex: "3",
  };

  const thumb = {
    display: "inline-flex",
    width: "100%",
    height: "100%",
    padding: 1,
    boxSizing: "border-box",
  };

  const thumbInner = {
    display: "flex",
  };

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} alt="img" />
      </div>
    </div>
  ));
  return (
    <div>
      <h2>Add a cover photo or video</h2>
      <p>
        A high-quality photo or video will help tell your story and build trust
        with donors.
      </p>
      <div className={styles.container} style={DragNDropCont}>
        <StyledDropZone {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <StyledPlus>+</StyledPlus>
          <p>
            Drag and drop or upload a photo that best represents your
            fundraiser.
          </p>
        </StyledDropZone>
        <ThumbsContainer>{thumbs}</ThumbsContainer>
      </div>
      <OrLine></OrLine>
      <form>
        <input type="text" placeholder="Add a YouTube link" />
        <button
          className={nextBtn ? styles.show : styles.hide}
          onClick={postImage}
        >
          Next
        </button>
      </form>
    </div>
  );
}

function TellYourStory({ setStepCount, setStartLoading, myFundraiser}) {
  const [story, setStory] = useState();
  const updateStory = (e) => {
    let { name, value } = e.target;
    let payload = {
      ...story,
      [name]: value,
    };
    setStory(payload);
  };
  function validateStory() {
    return true;
  }
  const postStory = () => {
    if (validateStory()) {
      setStartLoading(true);
      setTimeout(() => {
        // setMyFundraiser((prevVal) => {
        //     let payload = {
        //         ...prevVal,
        //         title: story.title,
        //         story: story.story,
        //     };
        //     postData();
        //   setStartLoading(false);
        //   setStepCount(5);
        //   return payload;
        // });
        }, 2000);
    }
    };
    async function postData(data) {
        setStartLoading(true);
        let payload = {
            ...myFundraiser,
            title: story.title,
            story: story.story,
        };
        try {
            let res = await axios.post("http://localhost:3001/myAllFundraiser", payload);
            setStartLoading(false);
            setStepCount(5);
        } catch (err) {
            console.log(err);
        }
    }
  return (
    <div>
      <h2>Tell your story</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="title">
          What is your fundraising title?
          <input
            onChange={updateStory}
            type="text"
            name="title"
            placeholder="e.g.Help Sarah Rebuild Her Home"
          />
        </label>
        <label htmlFor="story">
          Why are you fundraising?
          <textarea
            className={styles.addStoryTextArea}
            onChange={updateStory}
            type="text"
            name="story"
            placeholder="e.g. Hi there, my name is Jane and i am fundraising for"
          />
        </label>
        <button
          style={{
            backgroundColor: "white",
            border: "1px solid rgb(2, 169, 92)",
            color: "rgb(2, 169, 92)",
          }}
        >
          Preview fundraiser
        </button>
        <button onClick={postData}>Next</button>
      </form>
    </div>
  );
}
function FundraiserReady() {

  return (
    <div>
      <h2>
        Your fundraiser is ready.
        <br />
        Let's startraising donations !
      </h2>
      <VerticalLinearStepper />
      <WarningP para="warning">
        We'll remind you to set up withdrawals once you have got your first
        donation.
      </WarningP>
      <form onSubmit={(e) => e.preventDefault()}>
        <Link to="/manageFundingPage"><button >Next</button></Link>
      </form>
    </div>
  );
}

const PostCodeModal = ({
  setPostCodeModal,
  setLetsStartInfo,
  letsStartInfo,
}) => {
  function setPostCode(para) {
    setLetsStartInfo({ ...letsStartInfo, postcode: para });
    setPostCodeModal(false);
  }
  const StyledPostCodePopup = styled.div`
    background-color: white;
    width: 900px;
    height: 500px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    header {
      position: relative;
      height: 10%;
      width: 100%;
      font-size: 35px;
    }
    nav {
      height: 100%;
      postion: fixed;
      background-color: white;
      width: 100%;
      // box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      display: flex;
      justify-content: flex-end;
      padding: 10px;
      color: gray;
    }
    nav svg {
      cursor: pointer;
    }
    nav svg:hover {
      color: orangered;
    }
    .postCodeBody {
      width: 90%;
      height: 90%;
      margin: auto;
      // border:1px solid lime;
      padding-top: 10px;
    }
    .inputCont {
      width: 100%;
      height: 50px;
      border-radius: 5px;
      position: relative;
      font-size: 16px;
      margin-top: 20px;
    }
    .inputCont input {
      padding: 20px 50px;
      width: 100%;
      height: 100%;
      border-radius: 5px;
      border: 1px solid gray;
    }
    .inputCont svg {
      position: absolute;
      top: 10px;
      font-size: 30px;
      left: 0;
      padding-left: 10px;
    }
  `;
  const StyledPostCodeResultCont = styled.div`
    div {
      border-bottom: 1px solid gray;
      height: 55px;
      font-size: 20px;
      color: gray;
      margin-top: 10px;
      cursor: pointer;
    }
    div:hover {
      color: rgb(2, 169, 92);
    }
  `;
  return (
    <StyledPostCodePopup>
      <header>
        <nav onClick={() => setPostCodeModal(false)}>
          <CgClose />
        </nav>
      </header>
      <div className="postCodeBody">
        <h3>Search for your postcode</h3>
        <div className="inputCont">
          <input type="text" name="" placeholder="Start typing your postcode" />
          <FaSistrix />
        </div>
        <StyledPostCodeResultCont>
          <div
            onClick={() => setPostCode("924 95 - Ammarnäs, Västerbottens län")}
          >
            924 95 - Ammarnäs, Västerbottens län
          </div>
          <div onClick={() => setPostCode("98107 - Abisko, Norrbottens län")}>
            98107 - Abisko, Norrbottens län
          </div>
          <div
            onClick={() => setPostCode("441 16 - Alingsås, Västra Götal län")}
          >
            441 16 - Alingsås, Västra Götalands län
          </div>
          <div
            onClick={() => setPostCode("441 17 - Alingsås, Västra Götal län")}
          >
            441 17 - Alingsås, Västra Götalands län
          </div>
          <div
            onClick={() => setPostCode("441 20 - Alingsås, Västra Götal län")}
          >
            441 20 - Alingsås, Västra Götalands län
          </div>
        </StyledPostCodeResultCont>
      </div>
    </StyledPostCodePopup>
  );
};
const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function FillingForm({ setFillingForm }) {
  const [stepCount, setStepCount] = useState(1);
  const [postCodeModal, setPostCodeModal] = useState(false);
  const [startLoading, setStartLoading] = useState(false);
  const [myFundraiser, setMyFundraiser] = useState();
  console.log(myFundraiser);
  return (
    <>
      <StepsNavBar />
      <div className={styles.center}>
        <StepsBar stepCount={stepCount} />
        {stepCount === 1 ? (
          <LetsStart
            setPostCodeModal={setPostCodeModal}
            setStepCount={setStepCount}
            setStartLoading={setStartLoading}
            setMyFundraiser={setMyFundraiser}
          />
        ) : stepCount === 2 ? (
          <SetTargetForm
            setStartLoading={setStartLoading}
            setStepCount={setStepCount}
            setMyFundraiser={setMyFundraiser}
          />
        ) : stepCount === 3 ? (
          <AddPhoto
            setStartLoading={setStartLoading}
            setStepCount={setStepCount}
            setMyFundraiser={setMyFundraiser}
          />
        ) : stepCount === 4 ? (
          <TellYourStory
            setStartLoading={setStartLoading}
            setStepCount={setStepCount}
            setMyFundraiser={setMyFundraiser}
            myFundraiser={myFundraiser}
          />
        ) : stepCount === 5 ? (
          <FundraiserReady
          />
        ) : null}
      </div>
      {postCodeModal && (
        <Overlay>
          {/* <PostCodeModal setPostCodeModal={setPostCodeModal} setLetsStartInfo={setLetsStartInfo} letsStartInfo={ letsStartInfo }/> */}
        </Overlay>
      )}
      <SimpleBackdrop handleClose={startLoading} />
    </>
  );
}

/////material ui components starts from here

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

function getSteps() {
  return [
    "Set up your GoFundMe",
    "Share with 3–5 friends and ask them to help you share",
    "Post to at least 1 social network",
    "Send reminders to your friends",
  ];
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const StyledStepLabel = styled(StepLabel)`
    .MuiStepIcon-active {
      color: rgb(2, 169, 92) !important;
    }
  `;
  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label} className={classes.step}>
            <StyledStepLabel>{label}</StyledStepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}

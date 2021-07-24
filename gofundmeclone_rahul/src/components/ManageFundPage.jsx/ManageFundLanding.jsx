// material ui
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
/////////////////////////////////////
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import styles from "./style.module.css";
import Menu from '../components/menu';
import Footer from '../components/Footer';
import LongMenu from './Triangle'
import { v4 as uuid } from 'uuid';
// importing icons
import { BsPencil, BsThreeDotsVertical, BsUpload } from "react-icons/bs";
import {
  AiOutlineEye,
  AiOutlineBank,
  AiOutlineMail,
  AiOutlineMobile,
} from "react-icons/ai";

import { GoDiffAdded } from "react-icons/go";
////////////////////////
import { FundraiserPayment } from "./FundraiserPayment";

import { TransitionsModal } from "../Modal";
import { ContainedButtons } from "../Button";
import { CheckboxLabels } from "../CheckBox";
////////////////////////////////////////////////////////////////////////// material  components
const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

function LinearDeterminate() {
  const StyledLinearProgress = styled(LinearProgress)`
    margin: 10px 0;
    .MuiLinearProgress-barColorPrimary {
      background-color: rgb(0, 151, 82);
    }
  `;
  const classes = useStyles();
  const [progress, setProgress] = React.useState(5);
  return (
    <div className={classes.root}>
      <StyledLinearProgress variant="determinate" value={progress} />
    </div>
  );
}

///////////////////////////////////////////////////////////////////////////
function TopView() {
  let [currFundraiser, setCurrFundraiser] = useState();
  console.log(currFundraiser)
  useEffect(() => {
    axios.get('http://localhost:3001/myCurrFundraiser').then((res) => {
      setCurrFundraiser(res.data);
    }).catch((err) => {
      console.log(err)
    })

  }, [])
  console.log(currFundraiser)
  return (
    <>
      <StyledTopView>
        <div className="left">
          <img
            src={currFundraiser === undefined ? 'not yet' : currFundraiser.img}
            alt="fundraiser img"
          />
          <div>
            <h2>{currFundraiser === undefined ? 'not yet' : currFundraiser.title}</h2>
            <div className="flexCont">
              <p>
                <BsPencil />
                Edit Settings
              </p>
              <p>
                <AiOutlineEye />
                View fundraiser
              </p>
            </div>
            <LinearDeterminate />
            <p>Total raised $0</p>
          </div>
        </div>

        <div className="right">
          <div>
            <IconCircleCont>
              <BsUpload />
            </IconCircleCont>
          </div>

          <div>
            <IconCircleCont>
              <GoDiffAdded />
            </IconCircleCont>
          </div>
          <div>
            <IconCircleCont>
              <AiOutlineBank />
            </IconCircleCont>
          </div>
        </div>
      </StyledTopView>
    </>
  );
}

function DonorsTab() {
  return (
    <div>
      <EmailProgress>
        <ProgressBar>
          <div></div>
        </ProgressBar>
        <h5>
          Your goal: Send 20 invites <br />
          <span style={{ fontWeight: 400 }}>
            You have invited 0 of 20 people to donate.
          </span>
        </h5>
        <div className="btnCont">
          <button>
            <AiOutlineMail /> Email
          </button>
          <button>
            <AiOutlineMobile /> Text
          </button>
        </div>
      </EmailProgress>
    </div>
  );
}
function TeamTab() {
  return <h1>Team</h1>
}

function UpdatesTab() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [updateMessages, setUpdateMessages] = useState();
  const [handleModal, setHandleModal] = useState(false);
  const [isError, setIsError] = useState(false);
  const [textAreaVal, setTextAreaVal] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  async function fetchData() {
    let promise1 = await axios.get("http://localhost:3001/currUpdates");
    let promise2 = await axios.get("http://localhost:3001/currLoggedIn");
    setUpdateMessages(promise1.data);
    setFirstName(promise2.data.firstName);
    setLastName(promise2.data.lastName);

  }
  
  useEffect(() => {
    fetchData();
  }, []);
  function postMessage() {
    setHandleModal(!handleModal)
    let payload = {
      message: textAreaVal,
      firstname: firstName,
      lastname: lastName,
      id : uuid()
    };
    axios.post('http://localhost:3001/currUpdates',payload).then((res) => {
      setUpdateMessages((prevMessage) => {
        let payload1 = [...prevMessage, payload];
        return payload1;
      })
    }).catch((err) => {
      alert(err.message)
    })
  }

  function deleteUpdate(id) {
    axios.delete(`http://localhost:3001/currUpdates/${id}`).then((res) => {
      fetchData();
    })
  }
  console.log('updateMessages', updateMessages );
  return (
    <>
      {updateMessages === undefined ? (
        <h1>Loading...</h1>
      ) : updateMessages.length === 0 ? (
        <StyledNoUpdateCont>
          <p>
            <span>You haven't posted an update yet. </span>
            <br />
            Keep your supporters up-to-date on your fundraisers!
          </p>
          <button onClick={() => setHandleModal(!handleModal)}>
            Post an update
          </button>
        </StyledNoUpdateCont>
      ) : isError ? (
        <h1>404 not found</h1>
      ) : (
        <>
          <div
            className={styles.postUpdateTopBtn}
            onClick={() => setHandleModal(!handleModal)}
          >
            <ContainedButtons
              style={{
                border: "1px solid rgb(1,161,88)",
                color: "rgb(1,161,88)",
                backgroundColor: "white",
                fontWeight: 900,
              }}
            >
              <strong> Post an update </strong>
            </ContainedButtons>
          </div>
          {updateMessages.map((elem) => {
            return (
              <UserUpdateMessage>
                <div className="userprofilePhoto">
                  {elem.firstname.charAt(0).toUpperCase()}
                  {elem.lastname.charAt(0).toUpperCase()}
                </div>
                <div className="userName">
                  <span>
                    {elem.firstname} {elem.lastname}
                  </span>
                  <br />
                  {elem.message}
                  <br />
                  This was shared with your donors
                </div>
                <LongMenu style={{ position: 'absolute', right: '0' }} onclickEvent={()=> deleteUpdate(elem.id) }/>
              </UserUpdateMessage>
            );
          })}
        </>
      )}
      <TransitionsModal handleModal={handleModal}>
        <StyledPopup>
          <header>
            <h3>Post an update</h3>
          </header>
          <section>
            <textarea
              placeholder="Share your news"
              onChange={(e) => setTextAreaVal(e.target.value)}
              value={textAreaVal}
            />
            <button className="addPhotos">Add photos or videos</button>
            <h4>Send update to </h4>
            <div className="checkboxCont">
              <CheckboxLabels label={"Campaign Page (default)"} />
              <CheckboxLabels label={"Donors & followers"} />
              <CheckboxLabels label={"Facebook"} />
              <CheckboxLabels label={"Twitter"} />
            </div>
            <div onClick={() => postMessage()}>
              <ContainedButtons style={ButtonStyle}>
                Post updates
              </ContainedButtons>
            </div>
          </section>
        </StyledPopup>
      </TransitionsModal>
    </>
  );
}

function UpdateArea() {
  const [donors, setDonors] = useState(false);
  const [team, setTeam] = useState(false);
  const [updates, setUpdates] = useState(true);
  function switc(para) {
    if (para === 'Donors') {
      setDonors(true);
      setTeam(false);
      setUpdates(false);
    } else if (para === 'team') {
      setDonors(false);
      setTeam(true);
      setUpdates(false);
    } else if (para === 'updates') {
      setDonors(false);
      setTeam(false);
      setUpdates(true);
    }
  }
  return (
    <>
      <StyledUpdateArea>
        <div className="options">
          <h4 onClick={() => switc('Donors')} className={donors && 'active'}>Donors</h4>
          <h4 onClick={() => switc('team')} className={team && 'active'}>Team</h4>
          <h4 onClick={() => switc('updates')} className={updates && 'active'} >Updates</h4>
        </div>
        <div>
          {donors ? <DonorsTab /> : team ? <TeamTab /> : <UpdatesTab />}
        </div>
      </StyledUpdateArea>
    </>
  );
}

export function ManageFundLanding() {
  return (
    <>

      < Menu/>
      <TopView />
      <UpdateArea />
      {/* <FundraiserPayment /> */}
      <Footer />

    </>
  );
}

///////////////////////////////////////////////////////////// styled components starts form here

const StyledTopView = styled.div`
  display: flex;
  box-shadow: rgba(100, 100, 111, 0.1) 0px 7px 100px 0px;
  justify-content: space-between;
  align-items: center;
  padding: 40px 150px;
  margin-top:100px;
  .left {
    display: flex;
    min-width: 530px;
    max-width: max-content;
    // border:1px solid lime;
    justify-content: space-between;
  }
  img {
    width: 200px;
  }
  .left > div {
    // border:1px solid green;
    min-width: 56%;
    max-width: max-content;
    font-size: 15px;
  }
  .flexCont {
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    color: gray;
    text-decoration: underline;
    // border:1px solid lime;
    width:250px;
  }
  .flexCont p {
    cursor: pointer;
  }
  .right {
    display: flex;
    // border:1px solid red;
    width: 170px;
    justify-content: space-between;
  }
`;
const IconCircleCont = styled.div`
  border: 1px solid lime;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(2, 169, 92);
  svg {
    font-size: 20px;
    color: rgb(2, 169, 92);
  }
`;

const ProgressBar = styled.div`
  border: 7px solid rgb(225, 250, 234);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: relative;
  & > div {
    position: absolute;
    height: 7px;
    width: 7px;
    border-radius: 50%;
    background-color: rgb(2, 169, 92);
    top: -10%;
    left: 45%;
  }
`;
const EmailProgress = styled.div`
  border: 1px solid rgba(201, 197, 197, 0.664);
  margin: auto;
  margin-top: 30px;
  display: flex;
  width: 80%;
  justify-content: space-around;
  align-items: center;
  height: 130px;
  border-radius: 5px;
  h5 {
    margin-left: 20px;
    font-size: 14px;
  }
  button {
    width: 200px;
    height: 40px;
    margin-left: 10px;
    color: rgb(2, 169, 92);
    border: 0.1px solid rgb(2, 169, 92);
    background-color: white;
    font-weight: 700;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
    word-spacing: 8px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
`;

const StyledNoUpdateCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 300px;
  max-height: max-content;
  & > button {
    height: 40px;
    color: white;
    font-weight: 900;
    background-color: rgb(2, 169, 92);
    border: none;
    width: 120px;
    border-radius: 5px;
    font-size: 15px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    cursor: pointer;
    transition: 0.5s;
  }
  & > button:hover {
    background-color: rgb(100, 169, 102);
    transform: scale(1.1);
    transition: 0.5s;
  }
  & p {
    line-height: 25px;
    margin-bottom: 20px;
  }
  & p > span {
    font-weight: 900;
  }
`;

const StyledUpdateArea = styled.div`
  // border:1px solid lime;
  width: 80%;
  margin: auto;
  margin-top: 50px;
  position: relative;
  .options {
    border-bottom: 1px solid rgba(184, 179, 179, 0.808);
    display: flex;
    height: 30px;
    h4 {
      margin-right: 20px;
        border-bottom: 3px solid gray;
      cursor: pointer;
    }
    .active {
      border-bottom: 3px solid rgb(2, 169, 92);
    }
  }
`;

const StyledPopup = styled.div`
  width: 30rem;
  height: max-content;
  background-color: white;
  border-radius: 5px;
  & > header {
    border-bottom: 1px solid rgb(221, 221, 221, 0.8);
    margin-bottom: 1rem;
    text-align: center;
    font-size: 20px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & section {
    width: 90%;
    margin: auto;
  }
  & textarea {
    resize: none;
    min-height: 8.75rem;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid rgb(221, 221, 221, 0.8);
    font-size: 15px;
  }
  .addPhotos {
    height: 40px;
    width: 200px;
    border: 1px solid rgb(2, 169, 92);
    background-color: white;
    color: rgb(2, 169, 92);
    font-weight: 800;
    margin: 10px 0;
    border-radius: 5px;
  }
  & section > h4 {
    border-bottom: 1px dotted #ddd;
    height: 30px;
  }
  .checkboxCont {
    font-size: 10px !important;
    border-bottom: 1px dotted #ddd;
    padding-bottom: 12px;
    .MuiTypography-body1 {
      font-size: 0.8rem;
      color: gray;
    }
  }
`;

const ButtonStyle = {
  backgroundColor: "rgb(1,161,88)",
  width: "70%",
  height: "45px",
  fontWeight: 900,
  margin: "20px 0 30px 50px",
  textTransform: "capitalize",
};
const UserUpdateMessage = styled.div`
  border-bottom: 1px solid rgb(223, 223, 223, 0.5);
  height: 100px;
  display: flex;
  margin: 15px 0;
  & .userprofilePhoto {
    border: 1px solid rgb(223, 223, 223, 0.5);
    color: rgb(223, 223, 223);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .userName {
    margin-left: 10px;
    font-size: 14px;
    line-height: 28px;
    position: relative;
    span {
      font-weight: 800;
      font-size: 15px;
    }
  }
  & .userName::after {
    content: ". Just now";
    position: absolute;
    top: 0;
    // border:1px solid lime;
    right: 20%;
    font-weight: 600;
    color: gray;
  };
  & > svg {
    // border:1px solid lime;
    position:absolute;
    right:0;
    font-size:20px;
    color: gray;
    cursor:pointer;
  }
`;

import styled from "styled-components";
import { Modal } from "./Modal";
import React, { useState } from "react";
import { Link } from "react-router-dom";



export default function Banner() {
  const Div = styled.div`
    margin-top: 100px;
    height: 400px;
    background-image: url(https://i.imgur.com/mNPyAcA.png);
    background-position: 50% center;
    display: grid;
    grid-template-columns: 70%;
    .font {
      padding-top: 100px;
      padding-left: 50px;
      font-family: sans-serif;
      h1 {
        font-weight: 900;
        font-size: 35px;
        line-height: 3rem;
        color: #333;
      }
      p {
        margin-top: 1rem;
        font-size: 1.375rem;
        line-height: 1.875rem;
        color: #767676;
      }
      .panel {
        display: flex;
        margin-top: 1rem;
        align-items: center;
        column-gap: 40px;

        a {
          background-color: #02a95c;
          background: #02a95c;
          padding: 14px;
          text-decoration: none;
          color: white;
          box-sizing: border-box;
          font-weight: 700;
        }

        div > .line {
          border-left: 1px solid gray;
          height: 45px;
        }

        .play {
          display: flex;
          align-items: center;
          column-gap: 10px;
          color: gray;
        }
      }
    }
  `;
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };


  return (
    <>
      <Div>
        <div className="font">
          <h1>Fundraising for the people and causes you care about</h1>
          <p>Get Started Today.</p>
          <div className="panel">
            <div>
              <Link to='/signup'>Start a GoFundMe</Link>
            </div>
            <div>
              <div className="line"></div>
            </div>
            <div className="play">
              <div>
                <img src="https://imgur.com/slBYImy.png" width="50px" onClick={openModal} />
               <Modal showModal={showModal} setShowModal={setShowModal} />
                
              </div>
              <div>
                <h3>See how GoFundMe works</h3>
              </div>
                 
            </div>
          </div>
        
        </div>
         
      </Div>
      
    </>
  );
}

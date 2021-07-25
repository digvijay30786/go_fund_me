import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

import YoutubeEmbed from "./components/YoutubeEmbed";

const Background = styled.div`
  width: 100%;
  height: 100%;
  top: 15px;
  left:10px;
   box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
   background: transparent;
  
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
   z-index: 1;
  
 
`;

const ModalWrapper = styled.div`
  width: 75vw;
  height: 95vh;
 
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #055;

  position: relative;
  z-index: 10;

  display: flex;
  flex-flow: column wrap;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 96%;
  margin: 1% auto;
  line-height: 1.8;
  color: #141414;

  p {
    margin-left: 1%;
  }
  button {
    border-radius: 5px;
    font-weight: bold;
    font-size: 16px;
    padding: 10px 24px;
    background: RGB(2, 169, 92);
    color: white;
    border: none;

    margin-right: 4.5%;
  }
`;

const Modalyoutube = styled.div`
  margin: 1%;
  background: red;
  .video-responsive {
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;
  }

  .video-responsive iframe {
    left: 0;
    top: 0;
    height: 86%;
    width: 100%;
    position: absolute;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        console.log("I pressed");
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalContent>
                <h1>How it Works | GoFundMe </h1>
                <p></p>
                <button>Start a GoFundMe</button>
              </ModalContent>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
              <Modalyoutube>
                <YoutubeEmbed embedId="-imA2q34T08" />
              </Modalyoutube>
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

import styled from "styled-components";
import { Modal } from "./components/ModalYT";
import React, { useState } from "react";



export  function Banner2() {
    const Div = styled.div`
    width:90%;
    margin:auto;
    margin-top: 100px;
    height: 400px;
    background-image: url(https://www.gofundme.com/c/wp-content/uploads/2021/03/how-it-works.png?w=2400&h=764&crop=1);
    background-size:100% 100%;
    background-position:center;
    border-radius: 15px;
    box-shadow: 1px 1px 2px 1px darkgrey;
    display: grid;
    grid-template-columns: 100%;
    img
    {
        display: inline-block;
        vertical-align: middle;
        max-width: 100%;
        height: auto;
        border-radius:10px;
    }

    .font
    {
      display:flex;
      justify-content:center;
      align-items:center;
      font-family: sans-serif;

      div{
        img:hover
        {
            width:100px;
            transition-duration: 1s;
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
              <div>
                <img src="https://imgur.com/slBYImy.png" width="50px" onClick={openModal} />
                <Modal showModal={showModal} setShowModal={setShowModal} />  
              </div>
        </div>
         
      </Div>
      
    </>
  );
}

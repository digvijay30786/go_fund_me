import styled from "styled-components";
import { Modal } from "./Modal";
import React, { useState } from "react";




export  function Banner2() {
    const Div = styled.div`
    width:80%;
    margin:auto;
    margin-top: 100px;
    height: 400px;
    background-image: url(https://www.gofundme.com/c/wp-content/uploads/2021/03/how-it-works.png?w=2400&h=764&crop=1);
    background-size:100% 100%;
    background-position:center;
    display: grid;
    grid-template-columns: 70%;
    img{
        display: inline-block;
        vertical-align: middle;
        max-width: 100%;
           height: auto;
    }
    .font {
      padding-top: 180px;
      padding-left: 500px;
      font-family: sans-serif;
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

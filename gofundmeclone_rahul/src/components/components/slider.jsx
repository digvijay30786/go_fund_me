import React from 'react';
import Carousel, { autoplayPlugin,arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import styled from "styled-components";

export default function MyCarousel()
{
    const SliderDes = styled.div`
      width:90%;
      margin:auto;
      margin-top:10%;
      margin-bottom:10%;
      .BrainhubCarousel
      {
          column-gap:40px;
      }
      .slide
      {
          display:grid;
          grid-template-columns: 50% 50%;
          grid-gap:1fr;
          .CareDetail
          {
              padding:5% 10%;
              font-family:sans-serif;
              h4 {
                  color:#666;
                  font-size:15px;
              }
              h2 {
                  margin-top:4%;
                  margin-bottom:6%;
                  font-size:26px;
              }
              i {
                color:#666;
              } 
              p {
                  margin-top:7%;
                  color: #666;
                 font-size: .875rem;
              }
          } 
      }
      .rotate
      {
        transform: rotate(180deg);
      }
    `;
    
    return <SliderDes><Carousel plugins={['infinite',
       {
         resolve: autoplayPlugin,
         options: {
           interval: 4000,
         }
        },
        {
            resolve: arrowsPlugin,
            options: {
                arrowLeft: <img className="rotate" src="https://imgur.com/gDHdl3m.png" alt="GofundMe" width="50px"/>,
              arrowLeftDisabled:<img className="rotate" src="https://imgur.com/gDHdl3m.png" alt="GofundMe" width="50px"/>,
              arrowRight: <img src="https://imgur.com/gDHdl3m.png" width="50px" alt="GofundMe"/>,
              arrowRightDisabled: <img src="https://imgur.com/gDHdl3m.png" alt="GofundMe" width="50px"/>,
              addArrowClickHandler: true,
            }
          }
     ]}   
     animationSpeed={1000}>
   
        <div className="slide">
            <div className="CareDetail">
                <h4>GoFundMe fundraising stories</h4>
                <h2>Meet Goldin</h2>
                <i>"I thought about the times in my life when I couldn't even afford $5 for a book. That's when it hit me. Wouldn't it be cool if the price tag said, '5 jumping jacks and a sit-up?"</i>
                <p>Goldin raised $19k to help kids earn books with exercise.</p>
            </div>
            <div><img src="https://imgur.com/jf6Ilum.jpg" alt="Meet Goldin" height="300px" width="100%"/></div>
        </div>
        <div className="slide">
        <div className="CareDetail">
                <h4>GoFundMe fundraising stories</h4>
                <h2>Meet Ashley</h2>
                <i>"My GoFundMe made me feel really happy because I really always wanted to help the community. I'm a great helper, and my friends are, too."</i>
                <p>Ashley raised $7k to help homeless people in her community.</p>
            </div>
            <div><img src="https://imgur.com/vP59JSq.jpg" alt="GofundMe" height="300px" width="100%"/></div>
        </div>
        <div className="slide">
        <div className="CareDetail">
                <h4>GoFundMe fundraising stories</h4>
                <h2>Meet Chris & Norma</h2>
                <i>"My life has changed forever because of Norma and what happened. It gave me hope again. Changing someone's life will change your own forever."</i>
                <p>Chris raised $70k to help his neighbor Norma stay in her home.</p>
            </div>
            <div><img src="https://imgur.com/DxltXs8.jpg" alt="GofundMe" height="300px" width="100%"/></div>
        </div>
    </Carousel>
    </SliderDes>
}
  
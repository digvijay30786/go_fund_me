import React from 'react';
import styles from "./HowItWorks.css";
import { Banner2 } from "./Banner2";
import { Footer } from './Footer';
import styled from "styled-components";


export const HowItWorks = () => {
    return (
        <div>
            <div className="firstdiv">
                <h1>How GoFundMe Works</h1>
                <p>GoFundMe is the best place to fundraise, whether you are an individual, group, or organization.</p>
            </div>
            <Banner2></Banner2>
            <div className="parent">
            <div className="thirddiv">
                <div className="th1">
                    
                
                      <div className="green-circle">1</div>
<h3><span className="heading-3">Start your fundraiser</span></h3>
<ul>
<li>Set your fundraiser goal</li>
<li>Tell your story</li>
<li>Add a picture or video</li>
</ul>
<p><a href="https://www.youtube.com/watch?v=Dcf4H8fchbE&amp;feature=youtu.be" target="_blank" rel="noopener">Watch video</a></p>
                </div>
                
                <div className="th2">
<div className="green-circle">2</div>
<h3><span className="heading-3">Share with friends</span></h3>
<ul>
<li>Send emails</li>
<li>Send text messages</li>
<li>Share on social media</li>
</ul>
<p><a href="https://www.youtube.com/watch?v=DWC2ClFUyvI&amp;feature=youtu.be" target="_blank" rel="noopener">Watch video</a></p>
            </div>
             
                <div className="th3">
                      <div className="green-circle">3</div>
<h3><span className="heading-3">Manage donations</span></h3>
<ul>
<li>Accept donations</li>
<li>Thank donors</li>
<li>Withdraw funds</li>
</ul>
                    </div>
            </div>
            <div className="btn">
                <button>
                 <h2>Start a GoFundMe</h2>   
              </button>
            </div>
           
            </div>
          
            <div className="fifthdiv">
                <h1>Fast and safe</h1>
                <p>Millions trust GoFundMe as the #1 online fundraising expert. That’s why more people start fundraisers on GoFundMe than any other platform.</p>
                <button>Learn More</button>
            </div>
            <div className="parent">
            <div className="sixthdiv">
                <p>“This website rocks! I raised close to $10,000 in less than 48 hours for my nephew’s medical needs, and your customer service was so prompt and helpful.”</p>
                <img src="https://www.gofundme.com/c/wp-content/uploads/2021/03/monica-s-testimonial1.png?w=112" alt="photo" />
                <h4>— Monica S.</h4>
                <p>raised $16,000 on GoFundMe</p>
            </div>
             </div>
       

            <Footer/>
      </div>
    )
}

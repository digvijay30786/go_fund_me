import "../../styles.css";
import styled from "styled-components";
import Menu from "./menu";
import Banner from "./banner";
import TopFund from "./topfund";
import  MyCarousel from "./slider";
import Trending from "./trendingtopic";
import SourceFund from './sourcefunding';
import Footer from './Footer';
import Appstore from './appstore';
import { Line} from 'rc-progress';

export default function Main() {
  const Fund = styled.div`
    width: 80%;
    margin: auto;
    min-height: 300px;
    margin-top: 30px;
    font-family: sans-serif;
    padding: 30px;
    h1{
      font-size:25px;
    }
   .seemore{
     display:flex;
     column-gap:10px;
     justify-content: flex-end;
   }
  `;
  return (
    <div className="App">
      <Menu></Menu>
      <Banner></Banner>
      <Fund>
        <h1>Top fundraisers</h1>
        <TopFund>
           {/* First Div */}
          <div>
            <div>
              <img src="https://images.gofundme.com/-VSy-_w-So4zxcy-Qm_dgsq-dko=/720x405/https://d2g8igdw686xgo.cloudfront.net/58569821_1626720290962865_r.jpeg" />
            </div>
            <div className="details">
              <span>Irvine, CA</span>
              <h4>{"Support Katie DiSimone and her family".substring(0, 24) + "..."}</h4>
              <p>{"Hi, my name is Kate Farnsworth, and I have created this go fund me to raise".substring(0, 60) + "..."}</p>
              <p className="time">Last donation 7m ago</p>
              <Line percent="75" className="bar" strokeWidth="2" trailWidth="2" strokeColor="#02a95c" />
              <p><strong>$224,438 raised</strong> of $300,000</p>
            </div>
          </div>
           {/* first Div End */}
           {/* Second Div */}
           <div>
            <div>
              <img src="https://images.gofundme.com/FjTViIDgE5YW1O2YmqcS8za7qpg=/720x405/https://d2g8igdw686xgo.cloudfront.net/58539675_1626643603550189_r.jpeg" />
            </div>
            <div className="details">
              <span>Bellevue, WA</span>
              <h4>{"Support Katie DiSimone and her family".substring(0, 24) + "..."}</h4>
              <p>{"My name is Ronak Bakshi. I'm Sagar's best friend. I tried contacting Sagar on Thursday, July 15th to take him to ".substring(0, 60) + "..."}</p>
              <p className="time">Last donation 8m ago</p>
              <Line percent="100" className="bar" strokeWidth="2" trailWidth="2" strokeColor="#02a95c" />
              <p><strong>$158,894 raised</strong> of $150,000</p>
            </div>
          </div>
          {/* Second Div End*/}

          {/* Third Div*/}
           <div>
            <div>
              <img src="https://images.gofundme.com/qlI7k6y7NhPxy8IHHWrfuDlg9pQ=/720x405/https://d2g8igdw686xgo.cloudfront.net/58512895_162648179278676_r.jpeg" />
            </div>
            <div className="details">
              <span>Connellsville, PA</span>
              <h4>{"Please Help Us Save Rebecca".substring(0, 24) + "..."}</h4>
              <p>{"My name is Rhonda. My son and daughter were hiking on a trail near Tucson, Arizona just a few".substring(0, 60) + "..."}</p>
              <p className="time">Last donation 9m ago</p>
              <Line percent="12" className="bar" strokeWidth="2" trailWidth="2" strokeColor="#02a95c" />
              <p><strong>$100,547 raised</strong> of $750,000</p>
            </div>
          </div>
          {/* Third Div End*/}
        </TopFund>
        <div className="seemore">
          <div><p>See More</p></div>
          <div><img src="https://imgur.com/AjI4HST.png" width="20px"/></div>
        </div>
      </Fund>

      <Trending>
        <span>TRENDING TOPIC</span>
        <h1>Fundraising for coronavirus relief</h1>
        <div className="mainTrend">
          <div className="first"><img src="https://imgur.com/QHCYOsa.jpg" height="100%" width="100%"/></div>
          <div className="second">
            <p>As COVID-19 continues to spread, more individuals, communities, and entire nations are feeling the impact in their daily lives. Beyond the global health crisis, the coronavirus is having a severe economic impact on individuals, small businesses, and medical organizations.</p>
            <p>The urgent need for medical supplies, basic necessities, and quality healthcare is only increasing as more communities become affected by COVID-19. And with hundreds of thousands of individuals across the globe in quarantine, there is a growing need for financial support.</p>
          </div>
        </div>
        <div className="mainTrend">
          <div className="first"><img src="https://imgur.com/s8UONNx.jpg" height="100%" width="100%"/></div>
          <div className="second">
            <p>Thankfully, we all have the power to do something and make a difference. Here at GoFundMe, we're empowering individuals, organizations, and communities to step up in the face of the COVID-19 outbreak and help those who need it most.</p>
            <p>Start a GoFundMe to raise money to help yourself and others during this difficult time. Read our blog post <a href="">Fundraising for Coronavirus Relief: How You Can Help the Fight</a> for more information.</p>
          </div>
        </div>
        <button>Start a GoFundMe</button>
      </Trending>
      < MyCarousel></MyCarousel>
      <SourceFund>
        <h1>The leader in online fundraising</h1>
        <div className="sourceClass">
          <div className="flexImg">
            <div><img src="https://imgur.com/TGdWYJZ.png" width="38px"/></div>
            <div>
              <h5>Worldwide leader</h5>
              <p>GoFundMe is trusted around the world for its simple, reliable fundraising platform.</p>
            </div>
          </div>

          <div className="flexImg">
            <div><img src="https://imgur.com/E19g3FC.png" width="38px"/></div>
            <div>
              <h5>Simple setup</h5>
              <p>GoFundMe is trusted around the world for its simple, reliable fundraising platform.</p>
            </div>
          </div>

           <div className="flexImg">
            <div><img src="https://imgur.com/Ocp8J5P.png" width="38px"/></div>
            <div>
              <h5>Secure</h5>
              <p>GoFundMe is trusted around the world for its simple, reliable fundraising platform.</p>
            </div>
          </div>

           <div className="flexImg">
            <div><img src="https://imgur.com/VD0wvI7.png" width="38px"/></div>
            <div>
              <h5>Mobile app</h5>
              <p>GoFundMe is trusted around the world for its simple, reliable fundraising platform.</p>
            </div>
          </div>

           <div className="flexImg">
            <div><img src="https://imgur.com/qKnBv4j.png" width="38px"/></div>
            <div>
              <h5>Social reach</h5>
              <p>GoFundMe is trusted around the world for its simple, reliable fundraising platform.</p>
            </div>
          </div>

           <div className="flexImg">
            <div><img src="https://imgur.com/oujQx2g.png" width="38px"/></div>
            <div>
              <h5>24/7 expert advice</h5>
              <p>GoFundMe is trusted around the world for its simple, reliable fundraising platform.</p>
            </div>
          </div>
        </div>
          <div className="drip">
            <button>Start a GoFundMe</button>
          </div>
      </SourceFund>
      <Appstore>
        <div className="play">
          <div className="pic"><img src="https://imgur.com/4s277RZ.png" width="100%" height="100%"/></div>
          <div className="avaliable">
            <h3>Available now</h3>
            <h2>The GoFundMe App</h2>
            <p>Start and manage fundraisers, engage with supporters, and discover important causes — all on the go</p>
            <div className="icon">
              <div><img src="https://imgur.com/xK3PRAX.png" width="150px" height="45px"/></div>
              <div><img src="https://imgur.com/OTF5ymW.png" width="150px" height="45px"/></div>
            </div>
          </div>
        </div>
      </Appstore>

      <Fund>
        <h1>Find a GoFundMe near you</h1>
        <TopFund>
           {/* First Div */}
          <div>
            <div>
              <img src="https://imgur.com/1pEdm36.jpg" />
            </div>
            <div className="details">
              <span>Delhi, IN</span>
              <h4>{"Shadhika".substring(0, 24)}</h4>
              <p>{"Hi, my name is Kate Farnsworth, and I have created this go fund me to raise".substring(0, 60) + "..."}</p>
              <p className="time">Last donation 7m ago</p>
              <Line percent="75" className="bar" strokeWidth="2" trailWidth="2" strokeColor="#02a95c" />
              <p><strong>$224,438 raised</strong> of $300,000</p>
            </div>
          </div>
           {/* first Div End */}
           {/* Second Div */}
           <div>
            <div>
              <img src="https://imgur.com/x61cg2s.jpg" />
            </div>
            <div className="details">
              <span>Delhi, IN</span>
              <h4>{"Sukarya".substring(0, 24)}</h4>
              <p>{"My name is Ronak Bakshi. I'm Sagar's best friend. I tried contacting Sagar on Thursday, July 15th to take him to ".substring(0, 60) + "..."}</p>
              <p className="time">Last donation 8m ago</p>
              <Line percent="100" className="bar" strokeWidth="2" trailWidth="2" strokeColor="#02a95c" />
              <p><strong>$158,894 raised</strong> of $150,000</p>
            </div>
          </div>
          {/* Second Div End*/}

          {/* Third Div*/}
           <div>
            <div>
              <img src="https://imgur.com/oXOPhKx.jpg" />
            </div>
            <div className="details">
              <span>Rajasthan, IN</span>
              <h4>{"Rajasthan Samgrah Kalyan Sansthan - RSKS India".substring(0, 24) + "..."}</h4>
              <p>{"My name is Rhonda. My son and daughter were hiking on a trail near Tucson, Arizona just a few".substring(0, 60) + "..."}</p>
              <p className="time">Last donation 9m ago</p>
              <Line percent="12" className="bar" strokeWidth="2" trailWidth="2" strokeColor="#02a95c" />
              <p><strong>$100,547 raised</strong> of $750,000</p>
            </div>
          </div>
          {/* Third Div End*/}
        </TopFund>
      </Fund>
      <Footer/>
    </div>
  );
}

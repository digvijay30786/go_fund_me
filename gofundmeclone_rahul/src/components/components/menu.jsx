import styled from "styled-components";
import {Link} from "react-router-dom";
export default function Menu() {
  const Header = styled.div`
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    min-height: 100px;
    box-shadow: 0 0.125rem 0.1875rem -0.125rem rgb(0 0 0 / 20%);
    display: flex;
    align-items: center;
    padding: 15px;
    box-sizing: border-box;
    column-gap: 20px;
    font-family: sans-serif;
    justify-content: center;
    background-color: white;
    z-index:1;
    nav {
      
      .link{
        text-decoration:none;
        color:black;
      }
      .icon {
        display: flex;
        align-items: center;
        column-gap: 8px;
        
      }
    }
  `;

  const ImgDiv = styled.div`
    padding-left: 60px;
    padding-right: 60px;
    box-sizing: border-box;
    height: 100%;
    width: 270px;
  `;

  const FundmeBtn = styled.button`
    background-color: transparent;
    border: 1px solid green;
    color: green;
    font-weight: 500;
    padding: 10px;
    border-radius: 8px;
    box-sizing: border-box;
    width: 160px;
  `;

  const DropDown = styled.div`
    :hover .im {
      transform: rotate(180deg);
      transition-duration: 0.2s;
    }

    .dropdown {
      float: left;
      overflow: hidden;
      span {
        display: flex;
        column-gap: 5px;
        align-items: center;
      }
    }

    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      min-width: 190px;
      box-shadow: 0 0.3125rem 1rem -0.1875rem rgb(0 0 0 / 20%);
      z-index: 1;
    }

    .dropdown-content a {
      float: none;
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      text-align: left;
    }

    .dropdown-content > .end {
      border-top: 1px solid #e4e4e4;
      text-align: center;
      color: green;
      font-weight: 700;
    }

    .dropdown > .end:hover {
      color: #02a95c;
    }

    .dropdown-content a:hover {
      color: #999;
    }

    .dropdown:hover .dropdown-content {
      display: block;
    }
  `;

  return (
    <Header>
      <nav>
        <div className="icon">
          <img src="https://imgur.com/lwx2KIM.png" width="20px" />
          Search
        </div>
      </nav>
      <nav className="navbar">
        <DropDown>
          <div class="dropdown">
            <span class="dropbtn">
              Discover
              <img
                className="im"
                src="https://i.imgur.com/TRjqnAS.png"
                height="16px"
                width="16px"
              />
            </span>
            <div class="dropdown-content">
              <a href="#">Fundraisers</a>
              <a href="#">Success Stories</a>
              <a href="#">Coronavirus fundraising</a>
            </div>
          </div>
        </DropDown>
      </nav>
      <nav>
        <DropDown>
          <div class="dropdown">
            <span class="dropbtn">
              Fundraise for
              <img
                className="im"
                src="https://i.imgur.com/TRjqnAS.png"
                height="16px"
                width="16px"
              />
            </span>
            <div class="dropdown-content">
              <a href="#">Medical</a>
              <a href="#">Memorials</a>
              <a href="#">Emergency</a>
              <a href="#">NonProfit</a>
              <a href="#">Education</a>
              <a href="#">Emergency</a>
              <a href="#" className="end">
                See All
              </a>
            </div>
          </div>
        </DropDown>
      </nav>
      <ImgDiv>
        <img src="https://i.imgur.com/a0FNKDT.png" height="100%" width="100%" />
      </ImgDiv>
      <nav><Link to='/works' className="link">How its Work</Link></nav>
      <nav>Signin</nav>
      <FundmeBtn>Start a GoFundMe</FundmeBtn>
    </Header>
  );
}

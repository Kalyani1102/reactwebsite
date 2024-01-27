import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "./Context";
import { NavLink } from "react-router-dom";
import { Button } from "./Styles/Button";

const Services = () => {

  return (
    <Wrapper className="section">
      <h2 className="common-heading">Our Services</h2>
      <div className="container grid grid-three-column">

            <div className="card">
              <figure>
                <img src="./images/seo.png" alt="" />
              </figure>
              
                <h3>SEO Services</h3>
                <p>Professional SEO services will raise your website higher than your competitors. SEO specialists provide a position that contains a unique setting.</p>
                <NavLink to="https://dzisms.com/seo-services/">
                  <Button className="btn">Read More</Button>
                </NavLink>
              </div>
              <div className="card">
              <figure>
                <img src="./images/media.png" alt="" />
              </figure>
              
                <h3>Social Marketing</h3>
                <p>Social media selling services will generate tremendous traffic for your eletronic computer. Social media consultants and experts supply a spread of social selling services.</p>
                <NavLink to="https://dzisms.com/social-media-marketing/">
                  <Button className="btn">Read More</Button>
                </NavLink>
              </div>
              <div className="card">
              <figure>
                <img src="./images/web2.png" alt="" />
              </figure>
              
                <h3>Web Development</h3>
                <p>This service will help businesses create and maintain a professional and functional website.</p>
                <NavLink to="https://dzisms.com/web-design-and-development/">
                  <Button className="btn">Read More</Button>
                </NavLink>
              </div>
              <div className="card">
              <figure>
                <img src="./images/Emails.png" alt="" />
              </figure>
              
                <h3>Email Marketing</h3>
                <p>This service will help businesses create and send email campaigns to their customer lists to promote their products or services.</p>
                <NavLink to="https://dzisms.com/email-marketing/">
                  <Button className="btn">Read More</Button>
                </NavLink>
              </div>
              <div className="card">
              <figure>
                <img src="./images/content.png" alt="" />
              </figure>
              
                <h3>Content Writing</h3>
                <p>Content writing services have in-house writers that systematically deliver top quality content. You got several writers at your service in any respect times.</p>
                <NavLink to="https://dzisms.com/content-writing/">
                  <Button className="btn">Read More</Button>
                </NavLink>
              </div>
              <div className="card">
              <figure>
                <img src="./images/online.png" alt="" />
              </figure>
              
                <h3>Online Reputation</h3>
                <p>The Online name Management is important because it is that the observer of being guilty of your brand's image within the on-line community.</p>
                <NavLink to="https://dzisms.com/online-reputation-managment/">
                  <Button className="btn">Read More</Button>
                </NavLink>
              </div>
            </div>
           
              <div/>
      
     
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 120rem;
  }

  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    .card-data {
      padding: 0 2rem;
      background-color: blue;
    }

    h3 {
      margin: 2rem 0;
      font-weight: bold;
      font-size: 2.4rem;
      color:purple;
      padding-left:8rem;
    }

    p{
      margin: 2rem 0;
      font-size: 15px;
      color:blue;
      padding-left:5rem;
      color:#000000;
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);
      font-size: 1.4rem;

      &:hover {
        background-color: #87CEEB;
        color: #fff;
      }
    }
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-two-column,
    .grid-three-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Services;
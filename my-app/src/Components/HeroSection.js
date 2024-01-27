import React from 'react'
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import {Button} from "../Styles/Button"
import { useGlobalContext } from '../Context';


const HeroSection = ({name, image}) => {

  const fname= useGlobalContext();
  return (
  
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data"></p>
          <h5 className="hero-heading">{name}</h5>
          <p className="hero-para">
        {fname} As your SEO expert partner, Dzisms will evaluate & analyze your existing website, create an SEO strategy to optimize your website content and execute steps to boost your website’s organic search rankings.
          </p>
          <Button className="btn hireme-btn">
            <NavLink to="/contact"> hire me </NavLink>
          </Button>
        </div>

        {/* for image  */}
        <div className="section-hero-image">
          <picture>
            <img src={image} alt="hero image" className="hero-img " />
          </picture>
        </div>
      </div>
    </Wrapper>

   
  )
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 14rem;
    border-radius:1px
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.0rem;
    color:purple;
    font-weight:600;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
    font-weight: 900;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default HeroSection;




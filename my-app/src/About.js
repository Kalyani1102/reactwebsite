import React from "react";
import HeroSection from "./Components/HeroSection";
// import { useGlobalContext } from "./Context";

const About = () => {
 const data = {
    name:"ABOUT US",
    image:"./images/About.png"
 }

  return <HeroSection {...data}/>;
};

export default About;
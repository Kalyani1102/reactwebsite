import React, { useEffect } from "react";
import HeroSection from "./Components/HeroSection";
import Services from "./Services";
import Contact from "./Contact";
// import { useGlobalContext } from "./Context";

const Home = () => {
  const data = {
     name:"Boost Your",
     image:"./images/digi.png"
  }
 

  return <HeroSection {...data}/>;
};
    
  


export default Home;

import React from "react";
import About from "../../components/About";
import "../../assets/styles/pages.css";
import image from "../../assets/images/lizard pic-min.jpeg";
import OpeningTimes from "../../components/OpeningTimes/OpeningTimes";
import HeroImages from "../../components/HeroImages";
import HeroImage from "../../components/Hero";

function Home() {
  return (
    <div className="pageBackground">
      <div className="heroContainer">
        <HeroImage />
        <OpeningTimes className="opening-times" />
        <HeroImages className="hero-images" />
      </div>
      <div className="contentContainer">
        
        <div className="textContainer">
          <h1 className="pageTitle">Kernow Pets</h1>
          <div className="pageText">
            <About />
          </div>
        </div>
        <div className="imageContainer">
          <img className="homeImage" src={image} alt="lizard picture" />
        </div>
      </div>
    </div>
  );
}

export default Home;


import About from "../../components/About";
import "../../assets/styles/pages.css";
import image from "../../assets/images/lizard pic.jpeg";
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
      <h1 className="pageTitle">Kernow Pets</h1>
      <p className="constructionText">Website Under Construction. <br/> New content being added <br/> Keep checking for new information</p>
      <div>
        <div className="aboutMePosition">
          <About />
        </div>
        <img className="homeImage" src={image} alt="lizard picture"></img>
      </div>
    </div>
  );
}

export default Home;

import About from "../../components/About";
import "../../assets/styles/pages.css";
import image from "../../assets/images/lizard pic.jpeg"
import OpeningTimes from "../../components/OpeningTimes/OpeningTimes";
import HeroImage from "../../components/Hero";

function Home() {
  return (
    <div className="pageBackground">
       <HeroImage/>
       <div>
        <div className="aboutMePosition">
          <About />
         
      </div> 
        
      <OpeningTimes/>
      <img className="homeImage" src={image} alt="lizard picture"></img>
      </div>
    </div>
  );
}

export default Home;

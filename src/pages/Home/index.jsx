import About from "../../components/About";
import "../../assets/styles/pages.css";
import image from "../../assets/images/lizard pic.jpeg"
import OpeningTimes from "../../components/OpeningTimes/OpeningTimes";
function Home() {
  return (
    <div className="pageBackground">
      <div>
        <div >
          <h1 className="homePageTitle">Kernow Pets</h1>
        </div>
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

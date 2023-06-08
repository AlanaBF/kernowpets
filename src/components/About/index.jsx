import "../../assets/styles/components.css";
import "../../assets/styles/pages.css";
function About() {
  return (
    <div className="aboutContainer">
      <div className="aboutCard">
        <div className="pageText">
          <p>Explore our diverse range of reptiles in stock.</p>
          <p>
            With our ever-changing inventory, there's always something new to
            discover.
          </p>
          <p>
            If you can't find what you're looking for, simply ask and we'll try and source it for you.
          </p>
          <p>
            New arrivals regularly, keeping our stock fresh and
            exciting.
          </p>
        </div>
        <div className="pageText reptileBoarding">
          <p>Take advantage of our <em><strong>Reptile Boarding services</strong></em>.</p>
          <p>
            Prices start from £35 per week, varying based on the reptile type. 
          </p>
          <p>Contact us for more information</p>
        </div>
      </div>
    </div>
  );
}

export default About;

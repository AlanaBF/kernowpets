import "../../assets/styles/pages.css";
import OpeningTimes from "../../components/OpeningTimes/OpeningTimes";
import Map from "../../utils/Leaflet/Leaflet_API";
//Contact page with links to my LinkedIn, Github, Twitter and emails
function Contact() {
  return (
    <div className="pageBackground">
      <h1 className="pageTitle">Get in Contact</h1>
      <ul className="buttonGroup">
        <li >Visit the shop: 47 Fore St, Saint Austell PL25 5PY</li>
        <Map />
        <li >Email: kernowpets20@gmail.com</li>
        <li >Phone: 0172670409 / 07470 295362</li>
        <li >Visit: <a href="https://www.facebook.com/kernowpet" aria-label="Facebook">
        <i className="fa fa-facebook" aria-hidden="true"></i></a></li>
      </ul>
    </div>
  );
}

export default Contact;

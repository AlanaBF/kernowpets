import "../../assets/styles/pages.css";
import OpeningTimes from "../../components/OpeningTimes/OpeningTimes";
//Contact page with links to my LinkedIn, Github, Twitter and emails
function Contact() {
  return (
    <div className="pageBackground">
      <h1 className="pageTitle">Get in Contact</h1><a href="https://www.facebook.com/kernowpet" aria-label="Facebook">
        <i className="fa fa-facebook" aria-hidden="true"></i>
      </a>
      <ul className="buttonGroup">
        <li >Visit the shop: 47 Fore Street, Saint Austell</li>
        <li >Email: kernowpets20@gmail.com</li>
        <li >Phone: 07470 295362</li>
        <li >Visit Facebook Page or message me there</li>
      </ul>
    </div>
  );
}

export default Contact;

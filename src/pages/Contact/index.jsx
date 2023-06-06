import "../../assets/styles/pages.css";
import Map from "../../utils/Leaflet/Leaflet_API";
//Contact page with links to my LinkedIn, Github, Twitter and emails
function Contact() {
  return (
    <div>
    <div className="pageBackground">
    <h1 className="pageTitle">Get in Contact</h1>
    <p className="constructionText">Website Under Construction. <br/> New content being added <br/> Keep checking for new information</p>
    <div className="contact-container">
      <div className="map-container">
        <Map />
      </div>
      <div className="contact-content">
        <div className="contact-table-container">
          <table className="contact-table">
            <tbody>
              <tr>
                <td>Visit the shop:</td>
                <td>47 Fore St, Saint Austell PL25 5PY</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>kernowpets20@gmail.com</td>
              </tr>
              <tr>
                <td>Phone:</td>
                <td>0172670409 / 07470 295362</td>
              </tr>
              <tr>
                <td>Find us on Facebook:</td>
                <td>
                  <a href="https://www.facebook.com/kernowpet" aria-label="Facebook">
                    <i className="fa fa-facebook facebook-logo" aria-hidden="true"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Contact;

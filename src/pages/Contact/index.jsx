import "../../assets/styles/pages.css";
import Map from "../../utils/Leaflet/Leaflet_API";

// Contact page with links to my LinkedIn, Github, Twitter, and emails
function Contact() {
  return (
    <div>
      <div className="pageBackground">
        <h1 className="pageTitle">Get in Contact</h1>
        <div className="contact-container">
          <div className="map-container">
            <Map />
          </div>
          <div className="contact-details-container">
            <p className="pageText">
              We value your feedback, inquiries, and concerns. If you have any
              questions or need assistance, we encourage you to get in touch
              with us. We here to provide prompt and helpful support. Whether
              you have a query about our products, need guidance on reptile
              care, or want to share your experience with us, we are ready to
              assist you. Feel free to reach out to us through any of the
              provided contact methods.
            </p>
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
                        <a
                          href="https://www.facebook.com/kernowpet"
                          aria-label="Facebook"
                        >
                          <i
                            className="fa fa-facebook facebook-logo"
                            aria-hidden="true"
                          ></i>
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
    </div>
  );
}

export default Contact;

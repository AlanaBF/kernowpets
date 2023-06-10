import React, { useState } from "react";
import "../../assets/styles/pages.css";
import stock from "./stock.json";
import { Link } from "react-router-dom";

function Products() {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = stock.map((image) => image.link);

  const handleImageClick = (image) => {
    if (selectedImage === image) {
      setSelectedImage(null);
    } else {
      setSelectedImage(image);
    }
  };

  const starterKitsImages = stock.filter(
    (image) => image.category === "Starter Kits"
  );
  const accessoriesImages = stock.filter(
    (image) => image.category === "Accessories"
  );
  const decorImages = stock.filter((image) => image.category === "Decor");

  return (
    <div className="pageBackground photo-gallery">
      <h2 className="pageTitle">Starter Kits, Accessories, Decor</h2>
      <p className="pageText">
        Welcome to our world of reptiles and amphibians! Discover a captivating
        collection of products dedicated to these fascinating creatures on our
        website. From reptile Starter Kits and Accessories to Amphibian Habitats
        and Decor, we have everything you need to create a thriving environment
        for your scaly and slimy friends. Stay connected for new stock arrivals.
      </p>
      <h3 className="subheading">A selection of example stock items:</h3>
      <p className="pageText">Interested in any of the products? Pop into the shop, phone, email or contact us on Facebook</p>
      <Link to="/Contact">
        <button className="contact-button">Contact Us</button>
      </Link>
      <div className="stock-image-grid-container">
        <div>
          <h3 className="subheading">Starter Kits</h3>
          <div className="image-grid">
            {starterKitsImages.map((image, index) => (
              <div key={index} className="image-item">
                <img
                  src={image.link}
                  alt={`Image ${index + 1}`}
                  className={selectedImage === image.link ? "selected" : ""}
                  onClick={() => handleImageClick(image.link)}
                />
                <div className="image-label">{image.alt}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="subheading">Accessories</h3>
          <div className="image-grid">
            {accessoriesImages.map((image, index) => (
              <div key={index} className="image-item">
                <img
                  src={image.link}
                  alt={`Image ${index + 1}`}
                  className={selectedImage === image.link ? "selected" : ""}
                  onClick={() => handleImageClick(image.link)}
                />
                <div className="image-label">{image.alt}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="subheading">Decor</h3>
          <div className="image-grid">
            {decorImages.map((image, index) => (
              <div key={index} className="image-item">
                <img
                  src={image.link}
                  alt={`Image ${index + 1}`}
                  className={selectedImage === image.link ? "selected" : ""}
                  onClick={() => handleImageClick(image.link)}
                />
                <div className="image-label">{image.alt}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;

import React, { useState } from "react";
import "../../assets/styles/pages.css"; // Import the CSS styles for the photo gallery
import gallery from "./gallery.json";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = gallery.map((image) => image.link);

  const handleImageClick = (image) => {
    if (selectedImage === image) {
      setSelectedImage(null);
    } else {
      setSelectedImage(image);
    }
  };

  return (
    <div className="photo-gallery pageBackground">
      <h1 className="pageTitle">Photo Gallery</h1>
      <div className="image-grid-container">
      <div className="image-grid">
        {gallery.map((image, index) => (
          <img
            key={index}
            src={image.link}
            alt={`Image ${index + 1}`}
            className={selectedImage === image.link ? "selected" : ""}
            onClick={() => handleImageClick(image.link)}
          />
        ))}
      </div>
      </div>
    </div>
  );
}

export default Gallery;


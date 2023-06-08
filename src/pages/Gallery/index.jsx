import React, { useState } from "react";
import "../../assets/styles/pages.css"; // Import the CSS styles for the photo gallery

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [
   
    // Add more image paths here
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="photo-gallery pageBackground">
      <h1 className="pageTitle">Photo Gallery</h1>
      <p>COMING SOON</p>
      <div className="image-grid">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
      {selectedImage && (
        <div className="selected-image">
          <img src={selectedImage} alt="Selected Image" />
        </div>
      )}
    </div>
  );
}

export default Gallery;

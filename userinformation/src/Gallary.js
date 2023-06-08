import React, { useState } from 'react';

function Gallery() {
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const newImages = Array.from(e.target.files);
    setImages([...images, ...newImages]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear the input field
    document.getElementById("imageInput").value = "";
  };

  return (
    <div>
      <h1>Photo Gallery</h1>
      <p>Here are some photos of our work:</p>

      {/* Add the image upload form */}
      <form onSubmit={handleSubmit}>
        <label>
          Add a picture:
          <input id="imageInput" type="file" multiple onChange={handleImageChange} />
        </label>
        <br />
        
        <button type="submit">Add</button>
        <button type="back">Back To Manu </button>

      </form>
      {/* Display the images */}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {images.map((image, index) => (
          <img key={index} src={URL.createObjectURL(image)} style={{ maxWidth: "200px", maxHeight: "200px", margin: "10px" }} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;

import React, { useState } from 'react';
import Navigate from "./Navbar";
import Black from "../Images/Black.jpg";
import Braids2 from "../Images/braids2.jpg";
import Cornroles from "../Images/Cornroles.webp";
import facebeat1 from "../Images/facebeat1.jpg";
import installation from "../Images/installation.jpg";
import facebeat2 from "../Images/facebeat2.webp";

function Gallery() {
  const paragraphStyle = {
    fontFamily: 'Arial',
    fontSize: '20px',
    fontWeight: 'bold',
    lineHeight: '1.5'
  };
  const [images, setImages] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const uploadEndpoint = '/your-upload-endpoint-url';

  const handleImageChange = (e) => {
    const newImages = Array.from(e.target.files);
    setImages([...images, ...newImages]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const uploadedUrls = await uploadImages(images);
      setUploadedImages((prevImages) => [...prevImages, ...uploadedUrls]);
      setImages([]);
    } catch (error) {
      console.error('Error uploading images:', error);
    }

    document.getElementById("imageInput").value = "";
  };

  const uploadImages = async (images) => {
    const formData = new FormData();

    images.forEach((image) => {
      formData.append('images', image);
    });

    const response = await fetch(uploadEndpoint, {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const uploadedUrls = await response.json();
      return uploadedUrls;
    } else {
      throw new Error('Image upload failed');
    }
  };

  const imageContainerStyle = {
    display: 'inline-block', 
    marginRight: '40px', 
    marginBottom: '10px', 
    border: '2px solid white', 
    padding: '10px', 
    borderRadius: '5px' 
  };

  const imageStyle = {
    width: '500px', 
    height: '500px', 
    objectFit: 'cover', 
    cursor: 'pointer' 
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div style={{ ...paragraphStyle, position: 'relative', backdropFilter: 'blur(5px)', zIndex: 0 }}>
      <Navigate />

      <h1>*-* Our Photo Gallery *-*</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Add a picture:
          <input id="imageInput" type="file" multiple onChange={handleImageChange} />
        </label>
        <br />
        <button type="submit">Add</button>
      </form>

      <div>
        {uploadedImages.length > 0 ? (
          uploadedImages.map((imageUrl, index) => (
            <div style={imageContainerStyle} onClick={() => openModal(imageUrl)}>
              <img
                key={index}
                src={imageUrl}
                alt={`Image ${index + 1}`}
                style={imageStyle}
              />
            </div>
          ))
        ) : (
          <p></p>
        )}
      </div>

      <div style={imageContainerStyle} onClick={() => openModal(Black)}>
        <img src={Black} alt="Black" style={imageStyle} />
      </div>

      <div style={imageContainerStyle} onClick={() => openModal(Braids2)}>
        <img src={Braids2} alt="braids" style={imageStyle} />
      </div>

      <div style={imageContainerStyle} onClick={() => openModal(Cornroles)}>
        <img src={Cornroles} alt="Cornroles" style={imageStyle} />
      </div>

      <div style={imageContainerStyle} onClick={() => openModal(facebeat1)}>
        <img src={facebeat1} alt="facebeat1" style={imageStyle} />
      </div>

      <div style={imageContainerStyle} onClick={() => openModal(installation)}>
        <img src={installation} alt="installation" style={imageStyle} />
      </div>

      <div style={imageContainerStyle} onClick={() => openModal(facebeat2)}>
        <img src={facebeat2} alt="facebeat2" style={imageStyle} />
      </div>

      {selectedImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999
          }}
          onClick={closeModal}
        >
          <img
            src={selectedImage}
            alt="Zoomed Image"
            style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' }}
          />
        </div>
      )}

      <br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br />

      <br />
      <br />
      <footer>
        <p> © 2023 Nomvula's Beauty Salon | All Rights Reserved | Created by nomvula_vuyana.</p>
      </footer>
    </div>
  );
}

export default Gallery;

import React, { useState } from "react";
import Navigate from "./Navbar";
import Peruvian from "../Images/peruvian.webp";
import Peruvian2 from "../Images/peruvian2.webp";
import Brazillian from "../Images/brazillian.webp";
import Brazillian2 from "../Images/brazillian2.webp";
import Modal from "react-modal";

const WorkPage = () => {
  const pageStyle = {
    fontFamily: "Arial",
    fontSize: "20px",
    backgroundColor: "plain peach",
    padding: "10px",
  };

  const paragraphStyle = {
    color: "white",
    fontWeight: "bold",
    lineHeight: "1",
  };

  const fashionCardStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px",
  };

  const imageContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginRight: "10px",
    cursor: "pointer",
  };

  const imageStyle = {
    width: "300px",
    height: "300px",
    objectFit: "cover",
    marginBottom: "10px",
  };

  const hoverEffectStyle = {
    transform: "scale(1.1)", 
    transition: "transform 0.3s ease-in-out", 
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  const customModalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      width: "90%",
      height: "90%",
      maxWidth: "800px",
      maxHeight: "800px",
    },
  };

  return (
    <div style={pageStyle}>
      <ul>
        <Navigate />
        <h1 style={paragraphStyle}>*_* These are the Types of hair we are selling *_*</h1>
      </ul>

      <div className="fashion-container">
        <div className="fashion-card" style={fashionCardStyle}>
          <div
            style={{ ...imageContainerStyle, ...(selectedImage === Peruvian && hoverEffectStyle) }}
            onClick={() => openModal(Peruvian)}
          >
            <img src={Peruvian} alt="peruvian" style={imageStyle} />
            <h2 style={paragraphStyle}>Peruvian Hair</h2>
          </div>
          <div
            style={{ ...imageContainerStyle, ...(selectedImage === Peruvian2 && hoverEffectStyle) }}
            onClick={() => openModal(Peruvian2)}
          >
            <img src={Peruvian2} alt="peruvian2" style={imageStyle} />
            <h2 style={paragraphStyle}>Peruvian Hair</h2>
          </div>
        </div>

        <div className="fashion-card" style={fashionCardStyle}>
          <div
            style={{ ...imageContainerStyle, ...(selectedImage === Brazillian && hoverEffectStyle) }}
            onClick={() => openModal(Brazillian)}
          >
            <img src={Brazillian} alt="brazilian" style={imageStyle} />
            <h2 style={paragraphStyle}>Brazilian Hair</h2>
          </div>
          <div
            style={{ ...imageContainerStyle, ...(selectedImage === Brazillian2 && hoverEffectStyle) }}
            onClick={() => openModal(Brazillian2)}
          >
            <img src={Brazillian2} alt="brazilian2" style={imageStyle} />
            <h2 style={paragraphStyle}>Brazilian Hair</h2>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customModalStyles}
      >
        <button onClick={closeModal}>Close</button>
        {selectedImage && (
          <img
            src={selectedImage}
            alt="selectedImage"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        )}
      </Modal>

      <br />

      <footer>
        <p style={paragraphStyle}>
          © 2023 | Nomvula's Beauty Salon | All Rights Reserved | Created by nomvula_vuyana.
        </p>
      </footer>
    </div>
  );
};

export default WorkPage;

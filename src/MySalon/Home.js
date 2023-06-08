import React from "react";
import './App.css'; 
import Navigate from "./Navbar";
import { FaTwitter,} from "react-icons/fa";

function Home() {
  const paragraphStyle = {
    color: 'white',
    fontSize: '20px',
    fontWeight: 'bold',
    lineHeight: '1.5',
    fontFamily: 'Arial', 
    marginLeft: '50px', 
  };

  const followUsStyle = {
    position: 'absolute',
    top: '10px',
    right: '50px',
    display: 'flex',
    alignItems: 'center',
  };

  const socialIconStyle = {
    color: 'Aqua',
    marginRight: '5px',
  };

  return (
    <div style={paragraphStyle}>
      <h1>Welcome To Nomvula's Beauty Salon!!</h1>
      <Navigate />

      <div style={followUsStyle}>
        <p>
          Follow Us:
          <FaTwitter style={socialIconStyle} /> @nomvula_vuyana
        </p>
      </div>

      <br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br />
      <br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br />
      <footer>
        <p> © Copyright 2023   |   Nomvula's Beauty Salon   |   All Rights Reserved   |   Created by nomvula_vuyana</p>
      </footer>
    </div>
  );
}

export default Home;

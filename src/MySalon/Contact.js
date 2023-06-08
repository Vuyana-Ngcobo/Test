import React from 'react';
import { FaPhone, FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Navigate from "./Navbar";

function Contact() {
  const paragraphStyle = { color: 'white', fontSize: '20px', fontWeight: 'bold', lineHeight: '1.5', fontFamily: 'Arial' };
  const contactStyle = { display: 'flex', alignItems: 'center' };
  const googleMapsUrl = 'https://maps.google.com/maps?q=27+Thusi+crescent+newtown+tongaat';

  return (
    <div style={paragraphStyle}>
      <Navigate />

      <div className='contacts'>
        <br /><br />

        <form className="contacts2">
          <div style={contactStyle}>
            <FaPhone style={{ color: 'grey' }} />
            <a href="tel:0815353352" style={{ marginLeft: '10px' }}>Phone  @0815353352</a>
          </div>
          <div style={contactStyle}>
            <FaInstagram style={{ color: '#833AB4' }} />
            <a href="https://www.instagram.com/nomvula_vuyana" style={{ marginLeft: '10px' }}>Instagram  @nomvula_vuyana</a>
          </div>
          <div style={contactStyle}>
            <FaFacebook style={{ color: '#4267B2 ' }} />
            <a href="https://www.facebook.com/nomvula_vuyana" style={{ marginLeft: '10px' }}>Facebook  @nomvula_vuyana</a>
          </div>
          <div style={contactStyle}>
            <FaLinkedin style={{ color: '#418fde' }} />
            <a href="https://www.linkedin.com/in/nomvula_vuyana" style={{ marginLeft: '10px' }}>Linkedin  @nomvula_vuyana</a>
          </div>
          <div style={contactStyle}>
            <FaTwitter style={{ color: 'Aqua' }} />
            <a href="https://twitter.com/nomvula_vuyana" style={{ marginLeft: '10px' }}>Follow Us  @nomvula_vuyana</a>
          </div>
          <br></br>
          <div>
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">Physical Address: 27 Thusi crescent newtown tongaat</a>
          </div>
        </form>

        <br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br />
      <footer>
        <p>© 2023   |   Nomvula's Beauty Salon   |   All Rights Reserved   |   Created by nomvula_vuyana</p>
      </footer>
      </div>


    </div>
  );
}

export default Contact;

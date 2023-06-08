import React from "react";
import Navigate from "./Navbar";

function About() {
  const paragraphStyle = {
    color: 'black',
    fontFamily: 'Arial',
    fontSize: '17px',
    fontWeight: 'bold',
    lineHeight: '1.5',
  };

  return (
    <div>
      <Navigate />

      <form className="about2">
        <div>
          <h2>Salon History</h2>
          <p style={paragraphStyle}>
            OFuze Beauty Salon has been a part of the beauty industry since [year of establishment]. We take pride in our journey and the trust our clients have placed in us over the years. From our humble beginnings, we have grown into a reputable salon known for our exceptional services and dedication to customer satisfaction.
          </p>
        </div>

        <div>
          <h2>Mission Statement</h2>
          <p style={paragraphStyle}>
            At OFuze Beauty Salon, our mission is to provide our clients with a personalized beauty experience that goes beyond physical appearances. We believe that beauty is not just about the way you look, but also about feeling confident and empowered in your own skin. Our goal is to create a welcoming and inclusive environment where our clients can discover their unique beauty and leave our salon feeling beautiful, refreshed, and confident.
          </p>
        </div>

        <div>
          <h2>Salon Philosophy</h2>
          <p style={paragraphStyle}>
            At OFuze Beauty Salon, we are committed to delivering exceptional hair care, styling, and customer service. We believe in using high-quality products and staying up-to-date with the latest trends and techniques to ensure that our clients receive the best possible experience. Our salon is designed to be a sanctuary, providing a relaxing and welcoming atmosphere where our clients can escape the stresses of everyday life and indulge in self-care.
          </p>
        </div>

        <div>
          <h2>Salon Services</h2>
          <p style={paragraphStyle}>
            At OFuze Beauty Salon, we offer a comprehensive range of salon services to meet all your beauty needs. Our services include haircuts, coloring, styling, extensions, treatments, and more. Whether you want a fresh new look, a vibrant hair color, or a special hairstyle for a special occasion, our talented stylists will create the perfect look that suits your individual style and preferences.
          </p>
        </div>

        <div>
          <h2>Client Testimonials</h2>
          <p style={paragraphStyle}>
            Don't just take our word for it! Here are some testimonials from our satisfied clients:
            {"I've been using their services for years, and I'm always impressed by their professionalism and attention to detail. They consistently deliver outstanding results! - John Smith"}
          </p>
        </div>

        <div>
          <h2>Community Involvement</h2>
          <p style={paragraphStyle}>
            We are proud to be actively involved in our local community. We believe in giving back and supporting causes that are important to us and our clients. We regularly participate in charity events, collaborate with other local businesses, and contribute to initiatives that promote the well-being of our community.
          </p>
        </div>

        <br /><br />

        <footer>
          <p>© 2023 | Nomvula's Beauty Salon | All Rights Reserved | Created by nomvula_vuyana.</p>
        </footer>
      </form>
    </div>
  );
}

export default About;

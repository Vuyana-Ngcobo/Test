import React from "react";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>


            <h1>Welcome To OFuze Beauty Salon!!</h1>
            <h2>Welcome To OFuze Beauty Salon Your Beauty is Our Priority..</h2>

            <nav>
                <ul>
                   

                    <Link to ="./Registration"><button>Registration Form</button></Link>

                    <Link to="./About"><button>About Us</button></Link>

                    <Link to="./Contact"><button>Contact Us</button></Link>

                    <Link to="./Ourwokr"><button>Our Work</button></Link>

                    <Link to="./GetInvolved"><button>Get Involved</button></Link>

                    <Link to="./Gallary"><button>Our Gallery</button></Link>


                </ul>
            </nav>
     
            <div style={{ position: "absolute", top: -70, right: 1800 }}>
  <h3>Follow Us:</h3>
  <ul style={{ display: "flex", listStyle: "none" }}>
    <li style={{ margin: "0 10px" }}>
      <a href="https://www.facebook.com/OFuzeBeautySalon">
        <i className="fab fa-facebook fa-2x"></i>
      </a>
    </li>
    <li style={{ margin: "0 10px" }}>
      <a href="https://www.instagram.com/ofuzebeautysalon/">
        <i className="fab fa-instagram fa-2x"></i>
      </a>
    </li>
    <li style={{ margin: "0 10px" }}>
      <a href="https://twitter.com/OFuzeBeautySalon">
        <i className="fab fa-twitter fa-2x"></i>
      </a>
    </li>
  </ul>
</div>


            <br></br> <br></br> <br></br> <br></br> <br></br>   <br></br> <br></br> <br></br> <br></br> <br></br>

            <button type="continue">Continue</button>
         <button type="exit">Exit</button>
      <br></br>

        </div>
    );
};

export default Home;

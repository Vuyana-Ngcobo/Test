import {Link} from "react-router-dom";
import React from "react";

function Navigate (){

    return (
        <nav>
        <ul>
           <Link to ="/"><button>Home</button></Link>
            <Link to="/About"><button>About Us</button></Link>
            <Link to="/Contact"><button>Contact Us</button></Link>
            <Link to="/Ourwokr"><button>Our work in Display</button></Link>
            <Link to="/Appointments"><button>Appointments</button></Link>
            <Link to="/Gallary"><button>Photo Gallery</button></Link>

        </ul>
    </nav>
    )
}
export default Navigate;
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import React from 'react';
import About from './MySalon/About';
import Home from './MySalon/Home';
import Contact from './MySalon/Contact';
import WorkPage from './MySalon/OurWokr';
import Appointments from './MySalon/Appointments';
import Gallary from './MySalon/Gallary';



function App() {
  return (
    <Router>
      <Routes>    
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Ourwokr" element={<WorkPage />} />
        <Route path="/Appointments" element={<Appointments />} />
        <Route path="/Gallary" element={<Gallary />} />
      </Routes>
    </Router>
  );
}
export default App;


import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import React from 'react';
import UserForm from './Registration';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import WorkPage from './OurWokr';
import GetInvolved from './GetInvolved';
import Gallary from './Gallary';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Registration" element={<UserForm />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Ourwokr" element={<WorkPage />} />
        <Route path="/GetInvolved" element={<GetInvolved />} />
        <Route path="/Gallary" element={<Gallary />} />
      </Routes>
    </Router>
  );
}
export default App;


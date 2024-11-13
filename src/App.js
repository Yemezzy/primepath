import './App.css';
import About from './pages/About';
import Firstpage from './pages/Firstpage';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './pages/Navbar';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Firstitem from './Tracking/Firstitem';
import Quote from './pages/Quote';
import Seconditem from './Tracking/Seconditem';
import Item3 from './Tracking/Item3';
import Item4 from './Tracking/Item4';
import Item5 from './Tracking/Item5';
import Item6 from './Tracking/Item6';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Firstpage />} />
        <Route path="/About-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/tracking/PP54896452-014SH" element={<Firstitem />} />
        <Route path="/tracking/PP54896453-015SH" element={<Seconditem />} />
        <Route path="/tracking/PP54896454-016SH" element={<Item3 />} />
        <Route path="/tracking/PP54896455-017SH" element={<Item4 />} />
        <Route path="/tracking/PP54896456-018SH" element={<Item5 />} />
        <Route path="/tracking/PP54896457-019SH" element={<Item6 />} />
        <Route path="/get-a-quote" element={<Quote />} />
      </Routes>
    </div>
  );
}

export default App;

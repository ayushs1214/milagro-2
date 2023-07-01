import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About1 from "./pages/About1";
import Contact from "./pages/Contact";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Resources from "./pages/Resources";
import Finance from "./pages/finance";
import Credit from "./pages/credit";
import Credit1 from "./pages/credit1";
import Credit2 from "./pages/credit2";
import Psloans from "./products/Psloans";
import Bsloans from "./products/Bsloans";
import Hmloans from "./products/Hmloans";
import Profloans from "./products/Profloans";
import Soon from "./products/Soon";
import Pagenotfound from "./pages/Pagenotfound";
import Registration from "./pages/Registration";
import Cred from "./pages/cred";
import CreditScore from './pages/CreditScore';
import Login from './pages/login';
import Butlog from './pages/Butlog';
import Calculator from './Calculator';
import Sliderrr from './pages/sliderrr';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
        <Route path="Butlog" element={<Butlog />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/About" element={<About1 />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Finance" element={<Finance />} />
          <Route path="/Credit" element={<Credit />} />
          <Route path="/Credit1" element={<Credit1 />} />
          <Route path="/Credit2" element={<Credit2 />} />
          <Route path="/Psloans" element={<Psloans />} />
          <Route path="/Bsloans" element={<Bsloans />} />
          <Route path="/Hmloans" element={<Hmloans />} />
          <Route path="/Profloans" element={<Profloans />} />
          <Route path="/Soon" element={<Soon />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="*" element={<Pagenotfound />} />
          <Route path="Cred" element={<Cred />} />
          <Route path="CreditScore" element={<CreditScore />} />
          <Route path="Login" element={<Login />} />
          <Route path="/Calculator" element={<Calculator/>} />
          <Route path="/sliderrr" element={<Sliderrr/>} />
        </Routes>
        <Footer />      
      </BrowserRouter>
    </div>
  );
}

export default App;


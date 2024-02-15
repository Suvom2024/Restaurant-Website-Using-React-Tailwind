// src/App.js
import React from 'react';
import Home from './components/Home';
import Gallery from './components/Gallery';
import About from './components/About';
import Order from './components/Order';
import "tailwindcss/tailwind.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import 'react-multi-carousel/lib/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const SvgIcon = () => (
  <svg viewBox="0 0 448 512" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
    <path d="M221.6 148.7C224.7 161.3 224.8 174.5 222.1 187.2C219.3 199.1 213.6 211.9 205.6 222.1C191.1 238.6 173 249.1 151.1 254.1V472C151.1 482.6 147.8 492.8 140.3 500.3C132.8 507.8 122.6 512 111.1 512C101.4 512 91.22 507.8 83.71 500.3C76.21 492.8 71.1 482.6 71.1 472V254.1C50.96 250.1 31.96 238.9 18.3 222.4C10.19 212.2 4.529 200.3 1.755 187.5C-1.019 174.7-.8315 161.5 2.303 148.8L32.51 12.45C33.36 8.598 35.61 5.197 38.82 2.9C42.02 .602 45.97-.4297 49.89 .0026C53.82 .4302 57.46 2.303 60.1 5.259C62.74 8.214 64.18 12.04 64.16 16V160H81.53L98.62 11.91C99.02 8.635 100.6 5.621 103.1 3.434C105.5 1.248 108.7 .0401 111.1 .0401C115.3 .0401 118.5 1.248 120.9 3.434C123.4 5.621 124.1 8.635 125.4 11.91L142.5 160H159.1V16C159.1 12.07 161.4 8.268 163.1 5.317C166.6 2.366 170.2 .474 174.1 .0026C178-.4262 181.1 .619 185.2 2.936C188.4 5.253 190.6 8.677 191.5 12.55L221.6 148.7zM448 472C448 482.6 443.8 492.8 436.3 500.3C428.8 507.8 418.6 512 408 512C397.4 512 387.2 507.8 379.7 500.3C372.2 492.8 368 482.6 368 472V352H351.2C342.8 352 334.4 350.3 326.6 347.1C318.9 343.8 311.8 339.1 305.8 333.1C299.9 327.1 295.2 320 291.1 312.2C288.8 304.4 287.2 296 287.2 287.6L287.1 173.8C288 136.9 299.1 100.8 319.8 70.28C340.5 39.71 369.8 16.05 404.1 2.339C408.1 .401 414.2-.3202 419.4 .2391C424.6 .7982 429.6 2.62 433.9 5.546C438.2 8.472 441.8 12.41 444.2 17.03C446.7 21.64 447.1 26.78 448 32V472z"></path>
  </svg>
);
const NavBar = () => (
  <nav className="bg-white py-4 px-8 flex items-center justify-between">
  <div className="flex items-center space-x-20">
  <SvgIcon />
    <a href="/" className="font-semibold">HOME</a>
    <a href="/gallery" className="font-semibold">GALLERY</a>
    <a href="/about" className="font-semibold">ABOUT</a>
    <a href="/order" className="font-semibold">ORDER NOW</a>
    <div className="absolute inset-y-0 right-0 w-px bg-black"></div>
  </div>
  <div className="flex items-center space-x-4 text-black">
      <button aria-label="Search" className="p-2">
          <FontAwesomeIcon icon={faSearch} size="lg" />
      </button>
      <button aria-label="Cart" className="p-2">
          <FontAwesomeIcon icon={faShoppingCart} size="lg" />
      </button>
      <button aria-label="User" className="p-2">
          <FontAwesomeIcon icon={faUser} size="lg" />
      </button>
      </div>
</nav>
);

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8 flex flex-wrap justify-between items-center">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h3 className="text-xl font-bold mb-2">About Us</h3>
          <p className="text-sm">
            We are a family-owned restaurant serving delicious food and drinks
            since 2023. Come and enjoy our exotic cuisine and cozy atmosphere.
          </p>
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Contact Us</h3>
          <p className="text-sm">
            <span className="block">Phone: +91 1234567890</span>
            <span className="block">Email: info@restaurant.com</span>
            <span className="block">Address: 123 Main Street, Kolkata</span>
          </p>
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-white hover:text-blue-500 transition-colors"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              className="text-white hover:text-pink-500 transition-colors"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              className="text-white hover:text-red-500 transition-colors"
            >
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 text-center">
        <p className="text-sm">
          &copy; 2024 Restaurant. All rights reserved. Designed with{" "}
          <a
            href="^1^"
            className="text-white hover:text-blue-500 transition-colors"
          >
            Tailwind CSS
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <Router>
      <PageLayout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </PageLayout>
    </Router>
  );
}

const PageLayout = ({ children }) => {
  let location = useLocation(); // Hook to get the current location
  
  // Check if we're not on the order page
  const showNavBar = location.pathname !== "/order";

  return (
    <div className="App">
      {showNavBar && <NavBar />}
      {children} {/* This will render the current Route's element */}
      <Footer />
    </div>
  );
}

export default App;

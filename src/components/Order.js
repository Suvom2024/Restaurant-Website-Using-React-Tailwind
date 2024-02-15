import React, { useState } from 'react';
import { FaMapMarkerAlt, FaShoppingCart, FaBars } from 'react-icons/fa';
import { FaUtensils } from 'react-icons/fa'; // import icons from react-icons library

const App = () => {
    const [activeSection, setActiveSection] = useState('delivery'); // Default to 'delivery'

  return (
    
    <div className="bg-white min-h-screen">
      {/* Header */}
      <nav className="flex items-center justify-between py-4 px-6 shadow-md">
      {/* Left Section - Hamburger Icon and Navigation Links */}
      <div className="flex items-center">
        <FaBars className="text-gray-600 h-8 w-8 mr-4 cursor-pointer" />
        <button 
          onClick={() => setActiveSection('delivery')} 
          className={`text-sm px-4 py-1 rounded-full mr-2 ${activeSection === 'delivery' ? 'text-red-500 border border-red-500' : 'text-gray-600'}`}
        >
          Delivery
        </button>
        <button 
          onClick={() => setActiveSection('takeaway')} 
          className={`text-sm px-4 py-1 rounded-full mr-2 ${activeSection === 'takeaway' ? 'text-red-500 border border-red-500' : 'text-gray-600'}`}
        >
          Takeaway
        </button>
        <button 
          onClick={() => setActiveSection('reservation')} 
          className={`text-sm px-4 py-1 rounded-full mr-2 ${activeSection === 'reservation' ? 'text-red-500 border border-red-500' : 'text-gray-600'}`}
        >
          Reservation
        </button>
        {/* Set Location Button */}
        <button className="text-red-500 border border-red-500 px-2 py-1 rounded-full flex items-center">
          <FaMapMarkerAlt className="h-5 w-5 mr-2" />
          Set Location
        </button>
      </div>

      {/* Right Section - Logo, Search, Offer, and Cart */}
      <div className="flex items-center space-x-4">
        {/* Offer Icon */}
        <div className="flex items-center cursor-pointer">
          <img
            className="h-8 w-8"
            src="https://i.ibb.co/Xy3JN3X/ssss.png"
            alt="Offer"
          />
          <span className="ml-2 text-gray-800 text-sm">Offer</span>
        </div>

        {/* Cart Icon */}
        <div className="flex items-center cursor-pointer">
          <FaShoppingCart className="text-gray-800 h-8 w-8" />
          <span className="ml-2 text-gray-800 text-sm">Cart</span>
        </div>
      </div>
    </nav>

      {/* Main Content */}
      <main className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
          <h2 className='text-3xl font-extrabold text-center text-gray-900 mb-8'>
          <FaUtensils className='inline-block mr-5' />
          Discover Unique Taste around you
        </h2>
         <p className="text-gray-600 mb-8">At Your Door Step Soon .</p>
            <img 
              className="mx-auto mb-10"
              src="https://i.ibb.co/2YFMvrN/sss.png"
              alt="No Service" 
              style={{ height: "250px" }} // Adjust the size as needed
            />
            <p className="text-lg text-gray-800 font-semibold mb-3">We are currently not serviceable in your area</p>
            <span className="text-gray-500">You can pick your order up from nearest restaurant in the pickup section</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

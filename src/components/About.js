import React from 'react';
import { FaUtensils,FaWineGlass, FaFish, FaLeaf, FaCoffee, FaBreadSlice, FaHamburger } from 'react-icons/fa';
const About = () => {

  return (
<div className="bg-white shadow-md">
      {/* Hero Section */}
      <div className="bg-cover bg-center h-96 text-white py-24 px-10 object-fill" style={{ backgroundImage: "url('https://as1.ftcdn.net/v2/jpg/07/13/17/46/1000_F_713174602_VMKxNfLpTcira8oKAOSazDvTFRCNO4IS.jpg')" }}>
  <div className="md:w-1/2">
    <p className="font-bold text-sm uppercase">Services</p>
    <p className="text-3xl font-bold">About Us</p>
    <p className="text-2xl mb-10 leading-none">Discover Our Story</p>
    <a href="#" className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-700">Explore more</a>
  </div>
</div>

<div className="bg-gray-100 py-9">
    <div className="container mx-auto flex flex-wrap md:flex-nowrap px-6"> 
      {/* Chef's Note */}
      <div className="bg-white shadow-lg rounded-lg p-8 mb-6 md:mb-0 md:mr-6 w-full md:w-1/2">
        <h1 className="text-4xl font-bold text-center text-gray-800">Chef's Note</h1>
        <div className="text-center text-gray-600 mt-4">
          <p>"Cooking is an art, an expression of our soul. We're excited to share our passion for food with you, bringing to the table our favorite recipes with a twist. Our journey began with a simple love for flavors and a desire to create memorable experiences for our guests. Each dish is crafted with care, using only the finest ingredients to ensure the highest quality. Our menu is a reflection of our dedication to excellence, and we strive to bring you a diverse selection of dishes that cater to every palate. We believe that food is not just about sustenance, but about pleasure, and we aim to delight your senses with every bite. Thank you for joining us on this culinary adventure, and we hope to continue to inspire and satisfy your taste buds for many years to come."</p>
        </div>
        <div className="mt-6 text-center">
          <FaUtensils className="inline-block text-red-500 text-6xl"/>
        </div>
      </div>

      {/* About Our Restaurant */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-full md:w-1/2">
        <div className="flex items-center mb-6">
          <FaUtensils className="text-4xl text-red-500 mr-4" />
          <h1 className="text-4xl font-bold text-gray-800">About Our Restaurant</h1>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          Welcome to our restaurant, where we offer a unique blend of flavors and a warm, inviting atmosphere. Our mission is to provide our guests with an unforgettable dining experience, featuring high-quality ingredients, innovative recipes, and exceptional service.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Our menu is a reflection of our passion for culinary excellence, showcasing a variety of dishes that are both traditional and contemporary. We take pride in sourcing our ingredients from local producers, ensuring freshness and supporting our community.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Whether you're joining us for a casual meal or a special occasion, we look forward to welcoming you and sharing our love for food and hospitality. Thank you for choosing our restaurant, and we hope to see you soon!
        </p>
      </div>
    </div>
  </div>

      

      {/* Our Specialties Section */}
      <div className="bg-gray-100 py-3">
      <h2 className='text-3xl font-extrabold text-center text-gray-900 mb-8'>
          <FaUtensils className='inline-block mr-5' />
          Our Specialties 
        </h2>
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <FaWineGlass className="text-4xl text-red-500 mx-auto mb-4"/>
        <h2 className="text-2xl font-bold text-center text-gray-800">Fine Wines</h2>
        <p className="text-gray-600 text-center">Explore our curated selection of fine wines from around the world.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <FaFish className="text-4xl text-blue-500 mx-auto mb-4"/>
        <h2 className="text-2xl font-bold text-center text-gray-800">Seafood Delights</h2>
        <p className="text-gray-600 text-center">Savor the freshest seafood, expertly prepared with exquisite flavors.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <FaLeaf className="text-4xl text-green-500 mx-auto mb-4"/>
        <h2 className="text-2xl font-bold text-center text-gray-800">Vegetarian Options</h2>
        <p className="text-gray-600 text-center">Enjoy a variety of delicious and nutritious vegetarian dishes.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <FaCoffee className="text-4xl text-brown-500 mx-auto mb-4"/>
        <h2 className="text-2xl font-bold text-center text-gray-800">Artisan Coffees</h2>
        <p className="text-gray-600 text-center">Indulge in our selection of artisan coffees, crafted to perfection.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <FaBreadSlice className="text-4xl text-yellow-600 mx-auto mb-4"/>
        <h2 className="text-2xl font-bold text-center text-gray-800">Bakery Delights</h2>
        <p className="text-gray-600 text-center">Treat yourself to our freshly baked breads, pastries, and desserts.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <FaHamburger className="text-4xl text-red-600 mx-auto mb-4"/>
        <h2 className="text-2xl font-bold text-center text-gray-800">Gourmet Burgers</h2>
        <p className="text-gray-600 text-center">Experience the flavors of our gourmet burgers, made with premium ingredients.</p>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default About;

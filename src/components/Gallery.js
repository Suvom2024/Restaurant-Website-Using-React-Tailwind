import React from 'react';
import { motion } from 'framer-motion';
import { FaUtensils } from 'react-icons/fa'; // import icons from react-icons library

const GalleryItem = ({ title, imgSrc, position }) => {
    return (
      <div className="p-2 relative">
        <motion.div 
          className="shadow-lg rounded-lg overflow-hidden relative cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img
            className="object-cover object-center w-full h-full"
            src={imgSrc}
            alt={title}
            style={{ objectPosition: position }}
          />
          <motion.div 
            className="absolute inset-0 bg-transparent flex items-center justify-center"
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <motion.div
              className="absolute inset-0 bg-gray-900 bg-opacity-75 opacity-0"
              variants={{
                hover: { opacity: 1 },
                rest: { opacity: 0 }
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.h1
              className="text-white text-lg z-10 opacity-0"
              variants={{
                hover: { opacity: 1, scale: 1 },
                rest: { opacity: 0, scale: 0.5 }
              }}
              transition={{ duration: 0.3 }}
            >
              {title}
            </motion.h1>
          </motion.div>
        </motion.div>
      </div>
    );
  };
  
const Gallery = () => {
  // This would be your data fetched from somewhere
  const galleryItems = [
    {
        title: 'KOLKATA STYLE CHILLI LAMB',
        imgSrc: 'https://chowman.net/wp-content/uploads/2023/07/Kolkata-Style-Chilli-Lamb.jpg',
        position: 'center'
      },
      {
        title: 'DRAGON CHICKEN',
        imgSrc: 'https://chowman.net/wp-content/uploads/2023/07/Dragon-Chicken.jpg',
        position: 'center'
      },
      {
        title: 'KOLKATA STYLE CHILLI SHRIMP',
        imgSrc: 'https://chowman.net/wp-content/uploads/2023/07/Kolkata-Style-Chilli-Shrimp.jpg',
        position: 'center'
      },
      {
        title: 'LAMB IN RENDANG CURRY',
        imgSrc: 'https://chowman.net/wp-content/uploads/2023/07/Lamb-Rendang-Curry.jpg',
        position: 'center'
      },
    {
        title: 'CRISPY LAMB IN MANDARIN CHILLI SAUCE',
        imgSrc: 'https://chowman.net/wp-content/uploads/2023/07/Crispy-Lamb-in-Mandarin-Chilli-Sauce.jpg',
        position: 'center'
      },
      {
        title: 'SLICED PORK WITH BAMBOO-SHOOT AND CHINESE MUSHROOMS',
        imgSrc: 'https://chowman.net/wp-content/uploads/2023/07/Sliced-pork-with-Bamboo-shoot-and-Chinese-Mushrooms.jpg',
        position: 'center'
      },
      {
        title: 'LAMB WITH BASIL AND CHILLI',
        imgSrc: 'https://chowman.net/wp-content/uploads/2023/07/Lamb-with-Basil-and-Chilli.jpg',
        position: 'center'
      },
      {
        title: 'CLAY POT FISH',
        imgSrc: 'https://chowman.net/wp-content/uploads/2023/07/Clay-Pot-Fish.jpg',
        position: 'center'
      },
    {
      title: 'WOK TOSSED PRAWN IN XO SAUCE',
      imgSrc: 'https://chowman.net/wp-content/uploads/2023/07/Wok-Tossed-Prawn-in-XO-Sauce.jpg',
      position: '89% 22%'
    },
    {
      title: 'THAI LEMONADE',
      imgSrc: 'https://chowman.net/wp-content/uploads/2023/07/THAI-LEMONADE.jpg',
      position: '80% 16%'
    },
    {
      title: 'TANGY PINEAPPLE',
      imgSrc: 'https://chowman.net/wp-content/uploads/2023/07/TANGY-PINEAPPLE.jpg',
      position: 'center'
    },
    {
      title: 'SUMMER FRESH',
      imgSrc: 'https://chowman.net/wp-content/uploads/2023/07/SUMMER-FRESH.jpg',
      position: 'center'
    },
    {
      title: 'STIR FRIED FOUR TREASURE MUSHROOM',
      imgSrc: 'https://chowman.net/wp-content/uploads/2023/07/Stir-Fried-Four-Treasure-Mushroom.jpg',
      position: 'center'
    },
    {
      title: 'STEAMED PORK WITH SEASONAL VEG',
      imgSrc: 'https://chowman.net/wp-content/uploads/2023/07/Steamed-Pork-with-Seasonal-Veg.jpg',
      position: 'center'
    },
    {
      title: 'SPARKLING BLUEBERRY',
      imgSrc: 'https://chowman.net/wp-content/uploads/2023/07/SPARKLING-BLUEBERRY.jpg',
      position: 'center'
    },

    // ... existing items

{
    title: 'PHAD THAI',
    imgSrc: 'https://chowman.net/wp-content/uploads/2023/07/PHAD-THAI.jpg',
    position: 'center'
  },
  {
    title: 'LAMB IN HOISIN SAUCE',
    imgSrc: 'https://chowman.net/wp-content/uploads/2023/07/Lamb-in-Hoisin-Sauce.jpg',
    position: 'center'
  },
  {
    title: 'CUCUMBER LIMEADE',
    imgSrc: 'https://chowman.net/wp-content/uploads/2023/07/CUCUMBER-LIMEADE.jpg',
    position: 'center'
  }

  
  ];

  return (
    <>

    <div className="container mx-auto px-4 bg-cover bg-center rounded-lg" >
      <h2 className="text-5xl font-black text-gray-900 mb-8 text-center">
    <FaUtensils className="inline-block mr-6" />
    Serve Yourself To A Visual Treat 
  </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-4">
        {galleryItems.map((item, index) => (
          <GalleryItem key={index} {...item} />
        ))}
      </div>
    </div>
    </>
  );
};
export default Gallery;

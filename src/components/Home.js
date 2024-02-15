import React from 'react';
import "tailwindcss/tailwind.css";
import 'react-multi-carousel/lib/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import { FaUtensils } from 'react-icons/fa'; // import icons from react-icons library
import { Facebook, Twitter, Instagram, YouTube } from '@mui/icons-material';
import { Box, Link, Typography } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from 'emailjs-com';
import { MdSend } from 'react-icons/md';
import { useForm, FormProvider } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { toast } from 'react-toastify';



const HeroSection = () => (
    <div
    className="text-center px-6 py-20 md:py-32 bg-gray-100"
      style={{
        backgroundImage: "url('https://as2.ftcdn.net/v2/jpg/01/66/30/09/1000_F_166300923_LEDxpbn1aMi7Xq4nskpCFbUGrA7Oz4yB.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "contrast(90%)",
      }}
    >
    <h1 className="text-3xl md:text-5xl text-white font-bold mb-6 text-shadow-black-outline">Experience The Authentic Flavors Of Chinese Cuisine</h1>
    <p className="mb-6 text-white text-shadow-black-outline">Explore our menu by dish, ingredients or dietary</p>
      <div className="flex justify-center">
        <input type="text" placeholder="What would you like to order?" className="p-3 border border-gray-300 rounded-l-md" />
        <button className="bg-black text-white p-3 rounded-r-md">Search</button>
      </div>
    </div>
);

const RestaurantSection = () => {
  const sections = [
    {
      id: 1,
      title: 'Experience Neighborhood Fine Dining',
      description: 'We offer an experience that is much more than just quality and variety of food. Our idyllic ambience and affable service will definitely leave you satisfied.',
      image: 'https://chowman.net/wp-content/uploads/2019/02/Experience-Neighborhood-Fine-Dining.png',
    },
    {
      id: 2,
      title: 'The Most Skilled Artists of the Culinary World',
      description: 'Our expert chefs present the most creative and authentic Chinese dishes that are flavorful and at the same time prepared with the best of ingredients.',
      image: 'https://chowman.net/wp-content/uploads/2019/02/The-Most-Skilled-Artists-of-the-Culinary-World.png',
    },
    {
      id: 3,
      title: 'Pan City Delivery',
      description: 'We understand the importance of a quick delivery. Our prompt delivery team ensures that your favourite food is delivered right at your doorstep at every corner of the city.',
      image: 'https://chowman.net/wp-content/uploads/2019/02/Pan-City-Delivery.png',
    },
  ];

  // Determine the min-height needed based on the highest content box you have
  // You might need to adjust 'h-64' to a higher value if the content is larger
  const cardHeight = 'h-96';

  return (
    <div className="flex flex-wrap justify-center items-start bg-cover py-8" style={{ backgroundImage: 'url(https://as2.ftcdn.net/v2/jpg/07/02/88/15/1000_F_702881519_GUjIbr5bmECNnIXVz2bwowSc9n5W00NP.jpg)' }}>
      {sections.map(section => (
        <div key={section.id} className={`max-w-sm w-full md:w-1/3 p-6 bg-white m-4 rounded-lg shadow-lg flex flex-col ${cardHeight}`}>
          <div className="flex flex-col items-center">
            <img src={section.image} alt={section.title} className="mb-4 w-32 h-32 object-contain" />
            <h2 className="text-xl font-semibold text-red-600 mb-3">{section.title}</h2>
            <p className="text-gray-700 text-base mb-4">{section.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
const testimonialsData = [
  {
    quote: "Bengalis can make everything their own! Hence, Chinese is one of my fave cuisines. I love the chilli pork at XXX.",
    name: "Anupam Roy",
    designation: "Indian singer-songwriter",
    image: "https://www.chowman.net/wp-content/uploads/2019/02/anupam-roy-singer-songwriter-music-director-5-e1567866437295.jpg",
  },
  {
    quote: "The food here is amazing. I especially enjoyed the chicken manchurian and the hakka noodles. The service was also fast and friendly.",
    name: "Riya Sen",
    designation: "Bollywood actress",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/59/Raima_Sen_at_HM_store_launch_in_Kolkata_%286%29_%28cropped%29.jpg",
  },
  {
    quote: "I have been a regular customer of XXX for years. They never disappoint me with their quality and taste. The best Chinese food in town, hands down.",
    name: "Sourav Ganguly",
    designation: "Former Indian cricket captain",
    image: "https://img4.fresherslive.com/entertainment/2020/04/sourav-ganguly-5ea6e74ef30f8-1587996494-900.webp",
  },
];
const Testimonials = ({ testimonials }) => {
  const [index, setIndex] = React.useState(0);
  // sample testimonials data
  


  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % testimonials.length);
    }, 5000); // change slide every 5 seconds
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    
<div className="py-8 px-4">
  <div className="max-w-screen-xl mx-auto">
    <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
      <FaUtensils className="inline-block mr-6" />
      What Our Eaters Say 
    </h2>
    <div className="bg-cover bg-center relative mb-8"
         style={{ 
           backgroundImage: 'url("https://as2.ftcdn.net/v2/jpg/06/97/44/23/1000_F_697442399_tiQtMVHs5ZyeMUEVOz1WGVPdBMThyGYX.jpg")',
           backgroundPosition: 'center',
           backgroundSize: 'cover',
           margin: '0 auto', // Center the background image
           maxWidth: '100%', // Reduce the width to create gaps on the sides
           height: '450px' ,// Set a fixed height for the background image
           boxShadow: '0 0 10px 5px rgba(0,0,0,0.5)', // Add a shadow effect
           borderRadius: '1%',
         }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <TransitionGroup>
          <CSSTransition
            key={testimonials[index].id}
            timeout={300}
            classNames="fade"
          >
            <div className="text-center max-w-2xl mx-auto">
              <img
                className="mx-auto w-32 h-32 rounded-full object-cover mb-4"
                src={testimonials[index].image}
                alt={testimonials[index].name}
              />
              <blockquote className="text-white text-xl italic mb-2">{testimonials[index].quote}</blockquote>
              <p className="text-white font-bold">{testimonials[index].name}</p>
              <p className="text-white">{testimonials[index].designation}</p>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  </div>
</div>

  );
};
  
const CategorySection = () => {
  const categories = [
    {
      label: 'Appetizers',
      image:
        'https://as2.ftcdn.net/v2/jpg/06/04/76/91/1000_F_604769108_VqfihC1qzbEdb1P2rNfquNjcZtTs6yb3.jpg',
    },
    {
      label: 'Dishes',
      image:
        'https://as1.ftcdn.net/v2/jpg/06/37/38/70/1000_F_637387049_nEcoOLtTp0bqXn2CLcNTNGhWDZYxLTo2.jpg',
    },
    {
      label: 'Noodles',
      image:
        'https://as1.ftcdn.net/v2/jpg/05/94/71/94/1000_F_594719424_PHEPdcWGIEA4sJX2OycG3slaOb5aNvgM.jpg',
    },
    {
      label: 'Soup',
      image:
        'https://as2.ftcdn.net/v2/jpg/03/47/41/71/1000_F_347417182_vLx71yuwkFLKahgWGmVgDAcRD4MoFAh0.jpg',
    },
    {
      label: 'Desserts',
      image:
        'https://as2.ftcdn.net/v2/jpg/06/37/38/65/1000_F_637386554_CVycaX2yfn0zZbKtxhZCpiQZavJA53C1.jpg',
    },
    {
      label: 'Beverages',
      image:
        'https://as2.ftcdn.net/v2/jpg/06/02/11/89/1000_F_602118908_OiFU3hXlToTbVTf6GhlOai0B7hNH4CDB.jpg',
    },
  ];

  return (
    <div className='bg-gray-100 py-16'>
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-extrabold text-center text-gray-900 mb-8'>
          <FaUtensils className='inline-block mr-2' />
          Explore Our Categories
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>
          {categories.map((category) => (
            <motion.div
              key={category.label}
              className='bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <img
                className='h-40 w-full object-cover'
                src={category.image}
                alt={category.label}
              />
              <div className='p-4'>
                <h3 className='text-lg font-bold text-gray-800'>
                  {category.label}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
 
const ContactMe = () => {
  // Initialize the react-hook-form library
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  // Define the email service details
  const serviceID = 'service_ID';
  const templateID = 'template_ID';
  const userID = 'user_ID';

  const openingHours = {
    Monday: '12:00pm-10:30pm',
    Tuesday: '12:00pm-10:30pm',
    Wednesday: '12:00pm-10:30pm',
    Thursday: '12:00pm-10:30pm',
    Friday: '12:00pm-10:30pm',
    Saturday: '12:00pm-11:00pm',
    Sunday: '12:00pm-11:00pm',
  };

  // Define the toast notification options
  const toastOptions = {
    position: 'top-right',
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  // Define the framer-motion animation variants
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
    exit: {
      x: '-100vw',
      transition: {
        ease: 'easeInOut',
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      textShadow: '0px 0px 8px rgb(255,255,255)',
      boxShadow: '0px 0px 8px rgb(255,255,255)',
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };

  // Define the onSubmit handler
  const onSubmit = (data) => {
    emailjs.send(serviceID, templateID, data, userID)
      .then(() => {
        toast.success('Your message has been sent successfully!', toastOptions);
        reset();
      })
      .catch((err) => {
        toast.error(err.message, toastOptions);
      });
  };

  return (
    <>
    <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-5">
      <FaUtensils className="inline-block mr-6" />
      Get In Touch
    </h2>
    <FormProvider {...{ register, errors, handleSubmit, reset }}>
      <motion.div
          className="container mx-auto px-5 py-5 shadow-2xl bg-white rounded-2xl"// Adjusted classes
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
  
        >
     
        <div className="grid grid-cols-1 md:grid-cols-2 pl-4 gap-4">     
        <div 
          className="container mx-auto px-4 py-4 shadow-lg" // reduced vertical padding here
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1598444800952-884dfce6f145?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '1%',
          maxHeight: '400px' // Set a max-height for the container    
        }}
        >      
          <h2 className="text-5xl font-black text-white mb-8 text-center">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* reduced gap here */}
            <div className="flex flex-col justify-center items-start ">   
            <div className="flex flex-row items-center mb-4">
          <span className="text-3xl text-white mr-4 flex-none">
            <FaPhone />
          </span>
          <p className="text-xl text-white font-semibold">+91 1234567890</p>
        </div>
        <div className="flex flex-row items-center mb-4">
          <span className="text-3xl text-white mr-4 flex-none">
            <FaEnvelope />
          </span>
          <p className="text-xl text-white font-semibold">example@gmail.com</p>
        </div>
        <div className="flex flex-row items-center mb-4">
          <span className="text-3xl text-white mr-4 flex-none">
            <FaMapMarkerAlt />
          </span>
          <p className="text-xl text-white font-semibold">Block-M, Plot- 311 , B.P.Township Kolkata - 700094</p>
        </div>
            <Typography variant="h6" color="text.white" gutterBottom>
              Follow us
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Link href="#" color="inherit">
                <Facebook />
              </Link>
              <Link href="#" color="inherit">
                <Twitter />
              </Link>
              <Link href="#" color="inherit">
                <Instagram />
              </Link>
              <Link href="#" color="inherit">
                <YouTube />
              </Link>
            </Box>
      </div>

        <div className="flex flex-col justify-center items-start">
          <h3 className="text-2xl font-black text-white mb-4">Opening Hours</h3>
          {Object.entries(openingHours).map(([day, hours]) => (
            <p className="text-xl text-white font-semibold" key={day}>
              {day}: {hours}
            </p>
          ))}
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-center items-center px-4">
    <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-2xl border border-black"> 
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    {...register('name', { required: 'Please enter your name.' })}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    required
                  />
                  <ErrorMessage
                    errors={errors}
                    name="name"
                    as={<p className="text-red-500 text-xs italic" />}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    {...register('email', { required: 'Please enter a valid email.', pattern: { value: /^\S+@\S+$/i, message: 'Please enter a valid email.' } })}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                  />
                  <ErrorMessage
                    errors={errors}
                    name="email"
                    as={<p className="text-red-500 text-xs italic" />}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    {...register('message', { required: 'Please enter your message.' })}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-32 resize-none"
                    id="message"
                    placeholder="Enter your message here..."
                    required
                  />
                  <ErrorMessage
                    errors={errors}
                    name="message"
                    as={<p className="text-red-500 text-xs italic" />}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <motion.button
                    type="submit"
                    className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
                    variants={buttonVariants}
                    whileHover="hover"
                  >
                    <MdSend className="text-xl mr-2" />
                    Send
                  </motion.button>
                </div>
              </div>
            </form>
          </div> 
          </div>         
        </div>
      </motion.div>
    </FormProvider>
    </>
  );
};


  
// The App component that brings everything together
const App = () => {
  return (
    <div className="App">
      <HeroSection/>
      <CategorySection/>
      <RestaurantSection/>
      <Testimonials testimonials={testimonialsData} />
      <ContactMe/>
    </div>
  );
};

export default App;

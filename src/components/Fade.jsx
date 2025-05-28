import React, { useState, useEffect } from 'react';
// import pic1 from '../assets/images/satellite-1820063_1280.webp'
import pic1 from '../assets/images/science-lab-7445779_1280.jpg';
import pic2 from '../assets/images/NigeriaSat2_with_engineers.png';
import pic3 from '../assets/images/satellite-1820064_1280.webp';

const Fade = () => {
  const images = [pic1, pic2, pic3];
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen relative overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-1000 ${
            activeImage === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 ">
        <h1 className="text-3xl md:text-5xl font-bold mb-8 rounded-lg p-2 ">
          ABOUT US
        </h1>
      </div>
    </div>
  );
};

export default Fade;
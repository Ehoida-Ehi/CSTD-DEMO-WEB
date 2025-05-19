// src/components/Fade.jsx
import React, { useState, useEffect } from 'react';
import pic1 from '../assets/images/NigeriaSat-1-with-KHTT-team.png'; // ✅ Replace with your actual path
import pic3 from '../assets/images/NigeriaSat2_with_engineers.png'; // ✅ Replace with your actual path

const Fade = () => {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev === 0 ? 1 : 0));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen relative overflow-hidden">
      <img
        src={pic3}
        alt="Image 3"
        className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-1000 ${
          activeImage === 0 ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <img
        src={pic1}
        alt="Image 1"
        className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-1000 ${
          activeImage === 1 ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-70 px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-8 bg-gray-700 rounded-lg p-2 bg-opacity-90">
          ABOUT US
        </h1>
      </div>
    </div>
  );
};

export default Fade;

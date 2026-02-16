import { useState, useEffect } from 'react';
import {aboutHeroimages} from '../utils/images'

const Fade = () => {
  const images = aboutHeroimages;
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full lg:h-[500px] h-screen relative overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className={`w-full lg:h-full h-full lg:object-cover object-cover object-right-top absolute top-0 left-0 transition-opacity duration-1000 ${
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
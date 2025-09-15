import { useState } from 'react';
import { homeImages } from '../utils/images';

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (index) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const showPrev = () => setActiveIndex((prev) => (prev - 1 + homeImages.length) % homeImages.length);
  const showNext = () => setActiveIndex((prev) => (prev + 1) % homeImages.length);

  return (
    <div className="mt-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-10">Gallery</h1>

        {/* Masonry-like responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {homeImages.map((src, idx) => (
            <button
              key={idx}
              onClick={() => openModal(idx)}
              className="group relative block focus:outline-none"
              aria-label={`Open image ${idx + 1}`}
            >
              <img
                src={src}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-64 object-cover rounded-lg shadow-md group-hover:opacity-90 transition"
                loading="lazy"
              />
              <span className="absolute inset-0 rounded-lg ring-0 group-hover:ring-4 group-hover:ring-blue-500/30 transition"></span>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={showPrev}
            className="absolute left-4 md:left-8 text-white bg-black/50 hover:bg-black/70 rounded-full p-3"
            aria-label="Previous image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <img
            src={homeImages[activeIndex]}
            alt={`Preview ${activeIndex + 1}`}
            className="max-h-[85vh] max-w-[95vw] object-contain rounded"
          />

          <button
            onClick={showNext}
            className="absolute right-4 md:right-8 text-white bg-black/50 hover:bg-black/70 rounded-full p-3"
            aria-label="Next image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;



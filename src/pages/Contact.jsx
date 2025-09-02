import { useState, useEffect } from 'react'
import CareImage from '../assets/images/NasrdaGate.webp'
import {contactImages} from '../utils/images'
import { useLocation } from 'react-router-dom';

const images = contactImages

const Services = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);
    const { hash } = useLocation(); 

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
  return (
    <div>
      <div className="relative w-full h-[500px]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000
                ${currentImageIndex === index ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Services />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="relative w-full h-80 mb-8 rounded-lg overflow-hidden">
              <img
                src={CareImage}
                alt="Care Professional"
                className="w-full h-full object-cover"
                style={{ 
                  imageRendering: '-webkit-optimize-contrast',
                  imageRendering: 'crisp-edges',
                  backfaceVisibility: 'hidden',
                  transform: 'translateZ(0)'
                }}
              />
            </div>
            <h2 className="text-3xl font-bold text-green-800 mb-8">Contact Information</h2>
            <p className="text-gray-600 mb-8">
              Thank you for visiting our website. We are here to assist you with any inquiries you may have.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-blue-600 mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Address</h3>
                  <p className="text-gray-600">Obasanjo Space Centre, <br/> Umaru Musa Ydar'adua express way, P.M.B. 437, <br/>Lugbe, F.C.T</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-blue-600 mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Service Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 8:30 AM - 5:00 PM<br />Saturday - Sunday: Closed</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-blue-600 mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Phone</h3>
                  <p className="text-gray-600">+234-803-000-0000</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-blue-600 mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
                  
                  <p onClick={() => window.location = 'mailto:cstdinfo@cstd.nasrda.gov.ng'} className="text-gray-600 hover:underline hover:cursor-pointer hover:text-blue-600">cstdinfo@cstd.nasrda.gov.ng</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div id='partner'>
              <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-green-800 mb-8">Ask a Question</h2>
            <p className="text-gray-600 mb-8">
              If you have any questions, you can contact us. Please, fill out the form below.
            </p>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          </div>
        
        </div>

        {/* Map Section */}
        <div id='map'>
            <div className="mt-16">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.7777!2d7.384561637872805!3d8.99119009804407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b29b0b5f5f5%3A0x1c3c3c3c3c3c3c3c!2sObasanjo%20Space%20Centre%2C%20Umaru%20Musa%20Yar&#39;adua%20Expressway%2C%20Lugbe%2C%20Abuja%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1645564759438!5m2!1sen!2sng"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Contact

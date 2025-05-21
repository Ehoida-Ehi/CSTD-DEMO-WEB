import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import {mediaImages} from '../utils/images';


const Media = () => {
  const [expandedNews, setExpandedNews] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({thumbnail: '', mediaArr: []}); //modal info accepts thumbnail and media array
 
  const toggleNews = (index) => {
    setExpandedNews(expandedNews === index ? null : index);
  };

  const openModal = (thumbnail, mediaArr) => {
    setModalContent({thumbnail, mediaArr});
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent({ type: '', url: '' });
  };
 const news = [
    {
      title: "NASRDA Launches New Satellite Mission",
      date: "March 15, 2025",
      thumbnail: "https://cdn.pixabay.com/photo/2015/01/14/18/54/satellite-photo-599494_1280.jpg", // must be  required field
      brief: "The National Space Research and Development Agency (NASRDA) has successfully launched its latest satellite mission, marking a significant milestone in Nigeria's space exploration journey.",
      content: `The successful launch represents a major achievement for Nigeria's space program. The satellite, equipped with advanced imaging capabilities, will support various applications including environmental monitoring, agricultural planning, and disaster management.

      Key features of the mission include:
      • High-resolution imaging capabilities
      • Advanced data collection systems
      • Enhanced communication payload
      
      The mission team, led by Dr. Sarah Johnson, has been working on this project for over two years. "This launch demonstrates our commitment to advancing space technology in Nigeria," said Dr. Johnson during the post-launch press conference.`,
      media: [ // converted to an array to accept multiple kinds of media values
        {
        type: 'video',
        url: require('../assets/images/tsm.mp4'),
        thumbnail: 'https://cdn.pixabay.com/photo/2015/01/14/18/54/satellite-photo-599494_1280.jpg'
      }
    ]
    },
    {
      title: "CSTD Hosts International Space Conference",
      date: "March 10, 2025",
      thumbnail: "https://cdn.pixabay.com/photo/2023/11/18/15/45/work-8396635_1280.jpg",
      brief: "The Centre for Satellite Technology Development (CSTD) successfully hosted the 2024 International Space Technology Conference, bringing together experts from around the globe.",
      content: `The conference, held at the CSTD headquarters, featured presentations from leading space agencies and research institutions. Topics covered included satellite technology, space exploration, and international collaboration in space research.

      Highlights of the conference:
      • Panel discussions on future space missions
      • Workshops on satellite technology
      • Networking sessions with industry leaders`,
      media: [
        {
        type: 'image',
        url: 'https://cdn.pixabay.com/photo/2023/11/18/15/45/work-8396635_1280.jpg',        
        thumbnail: 'https://cdn.pixabay.com/photo/2023/11/18/15/45/work-8396635_1280.jpg'
      },
        {
        type: 'image',
        url: 'https://cdn.pixabay.com/photo/2023/11/18/15/45/work-8396635_1280.jpg',        
        thumbnail: 'https://cdn.pixabay.com/photo/2023/11/18/15/45/work-8396635_1280.jpg'
      },
        {
        type: 'video',
        url: require('../assets/images/tsm.mp4'),        
        thumbnail: 'https://cdn.pixabay.com/photo/2023/05/23/11/51/machine-8012596_1280.jpg'
      },
    ]
    },
    {
      title: "New Research Facility Inaugurated",
      date: "March 5, 2024",
      thumbnail: "https://cdn.pixabay.com/photo/2023/05/23/11/51/machine-8012596_1280.jpg",
      brief: "CSTD has inaugurated its state-of-the-art research facility, equipped with cutting-edge technology for satellite development and testing.",
      content: `The new facility represents a significant upgrade in CSTD's research capabilities. The 10,000 square meter complex includes advanced laboratories, testing chambers, and collaborative spaces.

      Key features:
      • Clean room for satellite assembly
      • Advanced testing equipment
      • Research laboratories
      • Conference facilities`,
      media: [
        {
        type: 'video',
        url: require('../assets/images/tsm.mp4'),
        thumbnail: 'https://cdn.pixabay.com/photo/2023/05/23/11/51/machine-8012596_1280.jpg'
      }
    ]
    },
    {
      title: "Student Space Program Launched",
      date: "February 28, 2025",
      thumbnail: "https://cdn.pixabay.com/photo/2021/09/10/22/17/business-6614313_1280.png",
      brief: "CSTD has launched a new initiative to engage students in space technology and research, providing hands-on experience in satellite development.",
      content: `The program aims to inspire the next generation of space scientists and engineers. Selected students will work on real satellite projects under the guidance of experienced professionals.

      Program components:
      • Practical training sessions
      • Project-based learning
      • Mentorship opportunities
      • Industry exposure`,
       media:[]
    },
    {
      title: "Partnership with International Space Agency",
      date: "February 20, 2025",
      thumbnail: "https://cdn.pixabay.com/photo/2022/10/27/10/23/astronaaut-7550543_1280.png",
      brief: "CSTD has signed a landmark partnership agreement with a leading international space agency to enhance satellite technology development.",
      content: `The partnership will facilitate knowledge exchange, joint research projects, and technology transfer. This collaboration marks a significant step in strengthening Nigeria's position in the global space community.

      Partnership benefits:
      • Access to advanced technology
      • Joint research opportunities
      • Training programs
      • Resource sharing`,
       media:[]
    },
   
  ];

  const [date, setDate] = useState('');
  const [asc, setAsc] = useState('');
  const [newsItems, setFilteredNews] = useState(news)

  const images = mediaImages

  // Clear filter
const clearFilter = ()=>{
  setDate('')
  setAsc('')
}


useEffect(() => {
  let result = [...news];
  if (date) {
    const filterDate = new Date(date).toDateString();
    result = result.filter(item => 
      new Date(item.date).toDateString() === filterDate
    );
  }

  if (asc === 'oldest') {
    result.reverse();
  }

  setFilteredNews(result);

}, [date, setAsc, asc]); 


console.log(modalContent)

  return (
    <div className="mt-16 bg-white">
      {/* Modal Component */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>          

              <div className="p-4">
                {Array.isArray(modalContent?.mediaArr) && modalContent.mediaArr.length > 0 ? (
                  <Swiper
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView="auto"
                    style={{ height: "80vh" }}
                    coverflowEffect={{
                      rotate: 30,
                      stretch: 0,
                      depth: 100,
                      modifier: 1,
                      slideShadows: true,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination]}
                    className="rounded-lg"
                  >
                    {modalContent?.mediaArr.map((media, index) => (
                      <SwiperSlide
                        key={`${media.type}-${index}`}
                        className="flex justify-center items-center w-[300px] md:w-[400px] lg:w-[500px]"
                      >
                        {media.type === 'image' ? (
                          <img
                            src={media.url}
                            alt="Enlarged view"
                            className="w-full h-full object-contain rounded-lg"
                          />
                        ) : (
                          <video
                            src={media.url}
                            controls
                            className="w-full h-full object-contain rounded-lg"
                            autoPlay
                          >
                            Your browser does not support the video tag.
                          </video>
                        )}
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                 <img
                            src={modalContent.thumbnail}
                            alt="Enlarged view"
                            className="w-full h-full object-contain rounded-lg"
                          />
                )}
              </div>
                          
          </div>
        </div>
      )}

      {/* Gallery Section */}
      <div id="gallery" className="py-16 bg-white flex justify-center">
        <div className="w-full max-w-6xl px-4">
          <h2 className="text-4xl text-green-700 font-bold text-center mb-10">Gallery</h2>

      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        style={{ height: "80vh" }} // 👈 Set Swiper container height
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="rounded-lg"
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center w-[300px] md:w-[400px] lg:w-[500px]"
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="rounded-lg shadow-xl w-full h-full object-cover" 
            />
          </SwiperSlide>
        ))}
      </Swiper>

          {/* Custom Pagination Bullet Styling */}
          <style>
            {`
        .swiper-pagination-bullet {
          background-color: white;
          width: 12px;
          height: 12px;
          opacity: 0.6;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background-color: #3b82f6; /* Tailwind's blue-500 */
          opacity: 1;
          transform: scale(1.2);
        }
      `}
          </style>
        </div>
      </div>

      {/* Masonry Grid Gallery */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-green-700 font-bold text-center mb-10">Photo Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Large Image */}
            <div className="md:col-span-2 lg:col-span-2 row-span-2">
              <img
                src="https://cdn.pixabay.com/photo/2015/01/14/18/54/satellite-photo-599494_1280.jpg"
                alt="Satellite"
                className="w-full h-full object-cover rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300"
              />
            </div>
            {/* Medium Images */}
            <div className="row-span-1">
              <img
                src="https://cdn.pixabay.com/photo/2023/05/23/11/51/machine-8012596_1280.jpg"
                alt="Machine"
                className="w-full h-full object-cover rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300"
              />
            </div>
            <div className="row-span-1">
              <img
                src="https://cdn.pixabay.com/photo/2022/10/27/10/23/astronaaut-7550543_1280.png"
                alt="Astronaut"
                className="w-full h-full object-cover rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300"
              />
            </div>
            {/* Small Images */}
            <div className="row-span-1">
              <img
                src="https://cdn.pixabay.com/photo/2021/09/10/22/17/business-6614313_1280.png"
                alt="Business"
                className="w-full h-full object-cover rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300"
              />
            </div>
            <div className="row-span-1">
              <img
                src="https://cdn.pixabay.com/photo/2023/11/18/15/45/work-8396635_1280.jpg"
                alt="Work"
                className="w-full h-full object-cover rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300"
              />
            </div>
            <div className="row-span-1">
              <img
                src="https://cdn.pixabay.com/photo/2021/11/25/20/01/tv-6824507_1280.png"
                alt="Technology"
                className="w-full h-full object-cover rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <div className="bg-slate-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-4">Latest News</h1>
          <p className="text-center text-gray-300">Stay updated with the latest developments in space technology and research</p>
        </div>
      </div>



<div className=' my-5 shadow-lg p-2'>
  <div className='w-[90%] mx-auto flex justify-end items-center gap-5'>
  <div className='text-gray-600'>
    <p className='font-semibold'>Filter:</p>
  </div>
  <div className='flex gap-3 items-center ps-3'> 
    <select onChange={(e)=> setAsc(e.target.value)} value={asc} className='rounded-md p-2 shadow-md border-gray-400 text-gray-600'>
      
      <option value="" disabled>Sort By</option>
      <option value="latest">Latest</option>
      <option value="oldest">Oldest</option>
    </select>
   </div>

  <div className="flex gap-3 items-center ps-3">    

     <div className="relative">      
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="rounded-md p-2 shadow-md border-gray-400 text-gray-600" 
      />
    </div> 

    <button 
    onClick={clearFilter}
    className='text-gray-700 rounded-md bg-gray-100 py-2 px-3 text-sm shadow-md'>Clear filter</button>
    
  </div>
  </div>

  
  
</div>


      {/* News Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {newsItems && newsItems.length > 0? newsItems.map((news, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="flex flex-col md:flex-row">
                {/* Thumbnail */}
                <div className="md:w-1/3 relative">
                  <img
                    src={news.thumbnail}
                    alt={news.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white px-4 py-2">
                    {new Date(news.date).toDateString()}
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-2/3 p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{news.title}</h2>
                  <p className="text-gray-600 mb-6">{news.brief}</p>
                  <button
                    onClick={() => toggleNews(index)}
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                  >
                    {expandedNews === index ? 'Close' : 'Read More'}
                  </button>

                  {/* Expanded Content */}
                  {expandedNews === index && (
                    <div className="mt-6 border-t pt-6">
                      <div className="prose max-w-none">
                        {news.content.split('\n\n').map((paragraph, pIndex) => (
                          <p key={pIndex} className="mb-4 text-gray-700">
                            {paragraph}
                          </p>
                        ))}
                        {news.media && (
                          <div className="mt-6">
                            <h3 className="text-xl font-semibold mb-4">Related Media</h3>
                            <div 
                              className="cursor-pointer relative group"
                              onClick={() => openModal(news.thumbnail,news.media)}

                            >
                              <img
                                src={news.thumbnail}
                                alt="Media thumbnail"
                                className="w-full h-48 object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                              />                             
                              
                              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                                <div className="bg-white bg-opacity-80 rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                                 
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                  
                                </div>
                              </div>
                              
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )):<div className='flex justify-center items-center text-gray-600 font-semibold'>
            No News 
            </div>}
        </div>
      </div>
    </div>
  );
};

export default Media;

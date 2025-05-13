import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPlay, FaPause, FaTimes, FaTrophy, FaSlidersH, FaThumbsUp, FaUsers } from "react-icons/fa";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


const Home = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };



  const images = [
    "https://innov8hub.ng/wp-content/uploads/2024/05/New-story-6.jpg",
    "https://innov8hub.ng/wp-content/uploads/2024/05/new-story-5.jpg",
    "https://innov8hub.ng/wp-content/uploads/2024/05/New-Story-1.jpg",
    "https://innov8hub.ng/wp-content/uploads/2024/05/new-story-5.jpg",
    "https://innov8hub.ng/wp-content/uploads/2024/05/New-Story-2.jpg",
    "https://cdn.pixabay.com/photo/2022/11/16/12/40/food-7595910_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/12/04/16/49/indian-food-3856050_1280.jpg",
    " https://cdn.pixabay.com/photo/2023/01/17/07/59/mossel-dish-7724006_1280.jpg",
    "https://cdn.pixabay.com/photo/2021/11/01/15/52/spring-roll-6760871_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/06/26/12/49/red-wine-2443699_1280.jpg",
  ];

  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  const values = [
    { title: "EXCELLENCE", content: "We pursue the highest standards in all we do." },
    { title: "INNOVATION", content: "We foster creativity to solve real-world problems." },
    { title: "COLLABORATION", content: "We work with others to achieve greater impact." },
  ];

  const departments = [
    { title: "Satellite Systems", image: "https://cdn.pixabay.com/photo/2022/10/27/10/23/astronaaut-7550543_1280.png" },
    { title: "Research and Innovation", image: "https://cdn.pixabay.com/photo/2021/09/10/22/17/business-6614313_1280.png" },
    { title: "Space Missions & Data", image: "https://cdn.pixabay.com/photo/2024/01/26/08/06/ai-generated-8533600_1280.jpg" },
    { title: "Accounting & Finance", image: "https://cdn.pixabay.com/photo/2019/10/18/19/51/financial-4560047_1280.jpg" },
    { title: "ICT", image: "https://cdn.pixabay.com/photo/2019/02/15/17/09/cloud-3998880_1280.jpg" },
    { title: "Spacecraft Structures & Mechanism", image: "https://cdn.pixabay.com/photo/2023/05/23/11/51/machine-8012596_1280.jpg" },
    { title: "Communications", image: "https://cdn.pixabay.com/photo/2021/11/25/20/01/tv-6824507_1280.png" },
    { title: "Administration", image: "https://cdn.pixabay.com/photo/2023/11/18/15/45/work-8396635_1280.jpg" },
  ];


  const faqs = [
    {
      question: "WHY IS SPACE SCIENCE TECHNOLOGY ESSENTIAL TO NIGERIA?",
      answer: "Space science supports national development in communication, security, agriculture, and climate monitoring.",
    },
    {
      question:
        "HOW DOES SPACE SCIENCE TECHNOLOGY BENEFIT NIGERIA'S AGRICULTURAL SECTOR?",
      answer: "It improves precision farming, soil monitoring, and crop yield forecasting using satellite data.",
    },
    {
      question:
        "WHAT ROLE DOES SPACE SCIENCE TECHNOLOGY PLAY IN NIGERIA'S ENVIRONMENTAL MANAGEMENT?",
      answer: "It enables real-time monitoring of deforestation, pollution, and natural resource use.",
    },
  ];





  return (
    <div className="mt-16">
      {/* Banner Video Section */}
      <div id="home" className="relative w-full h-screen">
        {/* Video Background */}
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src="https://cdn.pixabay.com/video/2023/08/05/174708-852018337_large.mp4"
          type="video/mp4"
          muted
          loop
          autoPlay
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-40 px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-8">
            WELCOME TO CENTER FOR <br className="hidden md:block" /> SATELLITE TECHNOLOGY DEVELOPEMENT
          </h1>
          <a
            href="/about"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md shadow-md transition duration-300"
          >
            ABOUT US
          </a>
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className="absolute bottom-4 right-4 p-3 bg-gray-800 bg-opacity-50 text-white rounded-full shadow-md hover:bg-gray-700 transition duration-300"
        >
          {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
        </button>
      </div>


      {/* Satellite Project Showcase Section */}
      <div id="projects" className="bg-white py-16 px-4 text-white">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-700">
          Our Key Initiatives
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="https://cdn.pixabay.com/photo/2017/10/22/22/38/drone-2879538_1280.jpg"
              alt="Our Projects"
              className="rounded-lg shadow-md mb-4"
            />
            <h3 className="text-xl font-semibold text-black">Our Projects</h3>
            <p className="text-sm mt-2 text-black">
              Advancing satellite platforms, remote sensing, and mission operations.
            </p>
          </div>

          {/* Project 2 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="https://cdn.pixabay.com/photo/2015/01/14/18/54/satellite-photo-599494_1280.jpg"
              alt="Research on Sustainable Energy Systems"
              className="rounded-lg shadow-md mb-4"
            />
            <h3 className="text-xl font-semibold text-black">Research on Sustainable Energy Systems</h3>
            <p className="text-sm mt-2 text-black ">
              Exploring renewable energy through satellite-enabled technologies.
            </p>
          </div>

          {/* Project 3 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="https://cdn.pixabay.com/photo/2023/02/04/21/03/business-7768170_1280.jpg"
              alt="Global Partnerships"
              className="rounded-lg shadow-md mb-4"
            />
            <h3 className="text-xl font-semibold text-black">Global Partnerships</h3>
            <p className="text-sm mt-2 text-black">
              Collaborating with international agencies to expand innovation and impact.
            </p>
          </div>
        </div>
      </div>




      {/* About Us */}
      <div id="about-us" className="grid grid-cols-1 md:grid-cols-2 h-[550px] gap-8 items-center p-8 bg-white">
        {/* Left Grid - Text Section */}
        <div>
          <h2 className="text-4xl font-bold text-green-700  text-center mb-4">ABOUT US</h2>
          <p className="text-gray-800 mb-8">
            The Centre for Satellite Technology Development (CSTD) is a leading arm of NASRDA, dedicated to building Nigeria’s capacity in satellite design, development, and innovation. As a key contributor to national space programs like NigeriaSat-1, NigeriaSat-2, and the Tubesat project, CSTD plays a vital role in applying satellite technology for environmental monitoring, agriculture, security, and communication.

            We work closely with local and international partners to drive research, develop skills, and support sustainable solutions through space science. With a strong focus on innovation and knowledge transfer, CSTD is shaping the future of Nigeria’s space technology and empowering the next generation of aerospace professionals.
          </p>

          {/* Icons Row */}
          <div className="grid grid-cols-2 gap-6 text-gray-800 font-semibold">
            <div className="flex items-start gap-3">
              <FaTrophy className="text-blue-600 text-3xl" />
              <p>WE HAVE A<br />REPUTATION FOR<br />EXCELLENCE</p>
            </div>
            <div className="flex items-start gap-3">
              <FaSlidersH className="text-blue-600 text-3xl" />
              <p>WE BUILD<br />PARTNERSHIPS</p>
            </div>
            <div className="flex items-start gap-3">
              <FaThumbsUp className="text-blue-600 text-3xl" />
              <p>GUIDED BY<br />COMMITMENT</p>
            </div>
            <div className="flex items-start gap-3">
              <FaUsers className="text-blue-600 text-3xl" />
              <p>A TEAM OF<br />PROFESSIONALS</p>
            </div>
          </div>
        </div>

        {/* Right Grid - Image Section */}
        {/* Our Values */}
        <div>
          <h2 className="text-4xl font-bold text-green-700 text-center mb-4">OUR VALUES</h2>
          <p className="text-gray-800 mb-6">
            We operate under this set of core values to guide us on our mission and activities.
          </p>

          {values.map((val, index) => (
            <div key={index} className="mb-3 border border-gray-300 rounded">
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-4 py-3 font-semibold"
              >
                {val.title}
                {open === index ? (
                  <ChevronUpIcon className="w-5 h-5" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5" />
                )}
              </button>
              {open === index && (
                <div className="px-4 pb-4 text-sm text-gray-700">{val.content}</div>
              )}
            </div>
          ))}
          <button className="mt-6 bg-blue-600 text-white px-6 py-3 font-bold rounded hover:bg-blue-700">
            Learn More
          </button>
        </div>
      </div>

      {/* Gallery Section */}
      <div id="gallery" className="py-16 bg-white flex justify-center">
        <div className="w-full max-w-6xl px-4">
          <h2 className="text-4xl text-green-700 font-bold text-center mb-10">Gallery</h2>

          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
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
                  className="rounded-lg shadow-xl w-full h-64 object-cover"
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


      {/* Latest News Section */}
      <div id="latest-news" className="bg-white py-16 px-4">
        <h2 className="text-4xl text-center  text-green-700 font-bold  mb-12">Latest News</h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* News Item 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/28/16/36/raisting-satellite-1010862_1280.jpg"
              alt="Satellite Launch"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">New Satellite Launch Announced</h3>
              <p className="text-sm text-black">The agency confirms the launch date for its newest Earth observation satellite.</p>
            </div>
          </div>

          {/* News Item 2 */}
          <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">CSTD Hosts Innovation Workshop</h3>
            <p className="text-sm text-black">
              Researchers gathered to explore future technologies in climate monitoring, AI, and nanosatellite systems.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet porro temporibus debitis quos ratione ex, sapiente aspernatur nemo dignissimos esse, alias culpa veritatis officia obcaecati molestias non reiciendis quam repudiandae.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vitae, dicta sint aliquam quam neque ipsum fugiat eos commodi ratione, veritatis provident voluptatem placeat molestiae consectetur odio aliquid quae suscipit?
            </p>
          </div>

          {/* News Item 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
            <img
              src="https://cdn.pixabay.com/photo/2012/11/28/09/08/mars-67522_1280.jpg"
              alt="Research Collaboration"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Nigeria Partners with EU on Space Tech</h3>
              <p className="text-sm text-black">A new partnership with the European Union aims to boost R&D in sustainable satellite systems.</p>
            </div>
          </div>

          {/* News Item 4 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
            <img
              src="https://cdn.pixabay.com/photo/2022/01/09/10/19/satellite-6925679_1280.jpg"
              alt="Tech Demo"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Technology Demonstration in Abuja</h3>
              <p className="text-sm text-black">Live demo of unmanned aerial systems for disaster response and agriculture mapping.</p>
            </div>
          </div>

          {/* News Item 5 */}
          <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">CSTD Scientist Wins Award</h3>
            <p className="text-sm text-black">
              Dr. Adewale received the KARI innovation medal for outstanding contributions in nanosatellite development.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni facilis facere natus quae. Perspiciatis, ea blanditiis amet nihil eius qui rerum aut ad illum doloremque quisquam quae quam iure suscipit.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores obcaecati ea ipsam voluptates consectetur minima repudiandae facere, explicabo, enim reiciendis deleniti vitae totam. Ducimus recusandae ipsam, iusto veniam quisquam incidunt.
            </p>
          </div>

          {/* News Item 6 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
            <img
              src="https://cdn.pixabay.com/photo/2012/11/28/11/25/satellite-67718_1280.jpg"
              alt="STEM Outreach"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">STEM Outreach Hits 50 Schools</h3>
              <p className="text-sm text-black">The space center reaches students nationwide with its science and satellite education campaign.</p>
            </div>
          </div>
        </div>
      </div>


      {/* Our Departments section */}
      <section className="bg-white py-12 px-4 text-white">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-10">Our Departments</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="relative bg-white text-black rounded-lg shadow-2xl p-4 pt-20"
            >
              {/* Image Div */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-44 h-24 bg-blue-200 rounded-md overflow-hidden shadow-xl">
                <img
                  src={dept.image}
                  alt={dept.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-center text-lg font-semibold mb-2">{dept.title}</h3>

              {/* Explore Link */}
              <p className="text-center text-blue-600 font-medium cursor-pointer hover:underline">
                Explore
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* leadership section */}
      <div id="leadership" className="bg-white py-16 px-4">
        <h1 className="text-4xl text-center text-green-700 font-bold mb-10">Our Leadership</h1>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Grid */}
          <div className="flex items-center justify-center">
            <img
              src="https://central.nasrda.gov.ng/wp-content/uploads/2025/03/Eng-Sadq-Umar.jpg"
              alt="CSTD CEO"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Grid */}
          <div className="flex flex-col justify-center text-center px-8 md:px-16">
            {/* Quotation Icon */}
            <h1 className="text-lg font-bold text-black mb-4">Dr Sadiq Umar</h1>
            {/* Description */}
            <p className="text-lg text-black mb-6">
              The director of CSTD
            </p>
            {/* Source */}
            <p className="text-black font-bold text-lg">
              Under the visionary leadership of Dr. Sadiq Umar, the director of CSTD, the centre is repositioning itself as an engine of national development. The centre has prioritised community outreach to address grassroots challenges and stimulate the academic interest of the girl child in satellite systems.

              Dr. Umar’s key focus is incentivising research activities that accelerate sustainable national development. Hence, the management and staff of CSTD emphasise the importance of research, innovation, and partnerships with universities and research institutions to deepen its culture of research and innovation.
            </p>
          </div>

        </div>

      </div>

      <div className="bg-white py-16 px-4 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* FAQ Section */}
        <div>
          <h2 className="text-2xl font-bold text-center text-green-700 mb-6">FAQS</h2>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 mb-4 p-4 rounded-md cursor-pointer bg-white shadow"
              onClick={() => toggleFaq(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg">{faq.question}</h3>
                <span className="text-xl">{openIndex === index ? "▲" : "▼"}</span>
              </div>
              {openIndex === index && (
                <p className="mt-2 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">HAVE QUESTIONS?</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="border border-gray-300 px-4 py-2 w-full rounded-md"
              />
              <input
                type="email"
                placeholder="email"
                className="border border-gray-300 px-4 py-2 w-full rounded-md"
              />
            </div>
            <textarea
              placeholder="Enter Your Message"
              className="border border-gray-300 px-4 py-2 w-full rounded-md h-32"
            ></textarea>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-bold"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>


      <div className=" bg-slate-950 h-[100px]">

      </div>


    </div>
  );
};

export default Home;





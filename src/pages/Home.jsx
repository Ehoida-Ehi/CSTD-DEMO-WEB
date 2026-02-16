import { useRef, useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { FaPlay, FaPause, FaTrophy, FaThumbsUp, } from "react-icons/fa";
import { FaHandshake, FaPeopleGroup } from "react-icons/fa6";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { FaChevronDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import useRevealOnScroll from "../components/RevealnScroll";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import sadqUmarImg from '../assets/images/Eng-Sadq-Umar.jpg';
import nigImg from "../assets/images/earth-africa2.png"
import partners from "../assets/images/partnership.png"
import engineers from "../assets/images/graduates.png"
import projects from "../assets/images/satellite.png"
import years from "../assets/images/2026.png"

import excellence from "../assets/images/excellence.png"
import innovation from "../assets/images/innovation.png"
import teamwork from "../assets/images/collaboration.png"
import purpose from "../assets/images/purpose.png"
import integrity from "../assets/images/integrity.png"
import professionalism from "../assets/images/professionals.png"

import projectImg from '../assets/images/drone-2879538_1280.jpg';
import environmentImg from '../assets/images/satDev/tubeSat.jpg';
import partnershipImg from '../assets/images/satDev/globalcollabo.jpg';

import nasrdaImg from "../assets/images/NASRDA-Logo_N2.png"

import {departmentsDetails, homeImages} from '../utils/images';
import { NavPageContext } from "../context/NavPageContext";
// import { set } from "react-datepicker/dist/date_utils";

const Home = () => {
  const videoRef = useRef(null);
  const { BASEURL } = useContext(NavPageContext);
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

  const images = homeImages

  // Latest news pulled from the same backend the CMS News page manages
  const [latestNewsItems, setLatestNewsItems] = useState([]);

  // Fetch latest news from backend (same source as CMS News.jsx)
  useEffect(() => {
    const fetchLatestNews = async () => {
      try {
        const resp = await axios.get(`${BASEURL}/news/fetchnews`);
        const data = resp.data?.data || [];

        // Normalize into a simple card structure
        const normalized = data.map((item) => ({
          id: item._id,
          title: item.title,
          brief: item.brief,
          date: item.date,
          thumbnail: item.media?.[0]?.thumbnail || "",
          type: "dynamic",
        }));

        // Sort newest first
        normalized.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );

        setLatestNewsItems(normalized);
      } catch (error) {
        console.error("Failed to fetch latest news:", error);
      }
    };

    fetchLatestNews();
  }, [BASEURL]);

  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  const values = [
    { title: "EXCELLENCE", content: "We pursue the highest standards in all we do.", profile: excellence },
    { title: "INNOVATION", content: "We foster creativity to solve real-world problems.", profile: innovation },
    { title: "TEAM WORK", content: "We work with others to achieve greater impact.", profile: teamwork },
    { title: "PURPOSE", content: "Empowering the Future Through Knowledge and Research.", profile: purpose },
    { title: "INTEGRITY", content: "Guided by Principles, Accountability, Transparency and Trustworthy.", profile: integrity },
    { title: "PROFESSIONALISM", content: "Standard, Precision and Poise. Committed to Quality, Driven by Ethics.", profile: professionalism },

  ];

  const departments = departmentsDetails
  


  const faqs = [
    {
      question: "WHAT IS THE MAIN FUNCTION OF CSTD WITHIN NASRDA?",
      answer: "The Center for Satellite Technology Development (CSTD) is one of the strategic activity centers under the National Space Research and Development Agency (NASRDA). Its primary function is to design, develop, test, and integrate satellite systems and related technologies in Nigeria. CSTD also plays a leading role in building local capacity through technical training, satellite engineering research, and technology transfer programs, helping Nigeria move toward self-reliance in space technology.",
    },
    {
      question:
        "HAS CSTD SUCCESSFULLY BUILT OR CONTRIBUTED TO ANY SATELLITE PROJECTS?",
      answer: " Yes. CSTD has contributed significantly to several of Nigeria’s satellite missions. Notably, it played a vital role in: NigeriaSat-2: A high-resolution Earth observation satellite. NigeriaSat-X: A technology demonstration satellite built by Nigerian engineers trained in the UK and at CSTD. TUBESAT-1: A nanosatellite built locally in collaboration with international partners.These projects showcase Nigeria’s growing technical capability in satellite design, integration, and systems testing.   ",
    },
    {
      question:
        "WAS ONE OF NIGERIA'S SATELLITE REALLY “MISSING”?",
      answer: "No, Nigeria has never lost a satellite in the literal sense of it being “missing” in space. The confusion often comes from media misinterpretations or public misconceptions about satellite operations.The specific case people often refer to involves NigeriaSat-1, launched in 2003. It completed its operational lifespan and was decommissioned in 2012—well beyond its expected 5-year service life. It was not “lost” but retired after successfully serving its purpose in Earth observation and disaster monitoring.Satellites operate in Low Earth Orbit (LEO), and after their functional life ends, they either remain as space debris in orbit or are deorbited depending on the mission design. The idea that a satellite went “missing” implies failure or disappearance, which did not happen with any satellite developed or managed by NASRDA or CSTD.",
    },
  ];


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      toast.success('Form submitted successfully!');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    }
  };

    const { hash } = useLocation();

////////////////////////////ADELSON CODE///////////////////////////////////////////

const [isRevealAbout, setIsRevealAbout] = useState(false);
const [isRevealValue, setIsRevealValue] = useState(false);
const [isRevealDept, setIsRevealDept] = useState(false);
const [isRevealFAQ, setIsRevealFAQ] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const target = document.getElementById("about-section");
      if (!target) return;

      const rect = target.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
        setIsRevealAbout(true);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const target = document.getElementById("value-section");
      if (!target) return;

      const rect = target.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
        setIsRevealValue(true);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const target = document.getElementById("dept-section");
      if (!target) return;

      const rect = target.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
        setIsRevealDept(true);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const target = document.getElementById("FAQ-section");
      if (!target) return;

      const rect = target.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
        setIsRevealFAQ(true);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

const StatNumber = ({ target }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              setCount(Math.floor(current));
            }, 30);

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [target]);

    return (
      <div ref={ref} className="stat-number text-4xl font-bold text-blue-600">
        {count}
      </div>
    );
}
  return (
    <div className="mt-16">
      {/* Banner Video Section */}
      <div id="home">
        <div  className="relative w-full h-screen">
        {/* Video Background */}
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              src="https://cdn.pixabay.com/video/2020/04/30/37713-414754681_large.mp4"
              type="video/mp4"
              muted
              loop
              autoPlay
            />
        <div className="absolute inset-0 flex flex-col items-center space-y-3 justify-center text-center text-white bg-black bg-opacity-40 px-4">
          <h1 className="lg:text-3xl text-2xl md:text-5xl lg:px-20 font-bold mb-8">
            CENTER FOR SATELLITE TECHNOLOGY DEVELOPEMENT
          </h1>
          <p className="mx-auto lg:px-44 text-sm lg:text-lg">Pioneering Nigeria's space frontier through advanced satellite technology, cutting-edge research, and innovation that propels our nation toward a sustainable space-based future.</p>
          <a
            href="/about"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-sm shadow-md transition duration-300"
          >
            ABOUT US
          </a>
        </div>
        <button
          onClick={togglePlayPause}
          className="absolute bottom-4 right-4 p-3 bg-gray-800 bg-opacity-50 text-white rounded-full shadow-md hover:bg-gray-700 transition duration-300"
        >
          {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
        </button>
      </div>      
      
      <section>
        <div className={`w-full text-black dark:text-slate-500 bg-blue-50 dark:bg-slate-900 p-6 lg:p-8`} id="about-section">
          <div className="grid lg:grid-cols-2 gap-5">
            <div className={`about-content lg:col-span-1 lg:ml-10 lg:pl-20 lg:pt-10 ${!isRevealAbout ? "hidden" : "slide-in-left block overflow-hidden"}`}>
              <h2 className="header">About CSTD</h2>
             <div className="text-sm lg:text-lg">
              <p className="dark:text-slate-300">The Center for Satellite Technology Development (CSTD) is a leading arm of NASRDA, dedicated to building Nigeria's capacity in satellite design, development, and innovation. As a key contributor to national space programs like NigeriaSat-1, NigeriaSat-2, and the NigeriaEduSat project, CSTD plays a vital role in applying satellite technology for environmental monitoring, agriculture, security, and communication.</p>
              <p className="dark:text-slate-300">We work closely with international partners and local institutions to advance Nigeria's space capabilities through space science. With a strong focus on innovation and knowledge transfer, CSTD is shaping the future of Nigeria's space technology and empowering the next generation of aerospace professionals.</p>
             </div>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-[2rem] mt-[2rem]">
                  <div className="stat-item">
                    <div className="flex items-center justify-center space-x-5">
                      <span className="flex items-center  justify-center"><StatNumber target={20} /> <div className="pt-5 text-2xl h-24 font-bold">+</div></span>
                      <img src={years} width={40} alt="" />
                    </div>
                      <p className="stat-label">Years of Excellence</p>
                  </div>
                  <div className="stat-item ">
                    <div className="flex items-center justify-center space-x-5">
                      <span className="flex items-center justify-center"><StatNumber target={500} /> <div className="pt-5 text-2xl h-24 font-bold">+</div></span>
                      <img src={engineers} width={40} alt="" />
                    </div>
                      <p className="stat-label">Engineers Trained</p>
                  </div>
                  <div className="stat-item">
                    <div className="flex items-center justify-center space-x-5">
                      <span className="flex items-center justify-center"><StatNumber target={15} /> <div className="pt-5 text-2xl h-24 font-bold text-white">+</div></span>
                      <img src={projects} width={40} alt="" />
                    </div>
                      
                      <p className="stat-label">Satellite Projects</p>
                  </div>
                  <div className="stat-item">
                    <div className="flex items-center justify-center space-x-5">
                      <span className="flex items-center justify-center"><StatNumber target={50} /> <div className="pt-5 text-2xl h-24 font-bold">+</div></span>
                      <img src={partners} width={40} alt="" />
                    </div>
                      <p className="stat-label">International Partners</p>
                  </div>
              </div>
          </div>
          <div className={`about-content bg-blue-50 dark:bg-slate-900 lg:col-span-1 ${!isRevealAbout ? "hidden" : "slide-in-right overflow-hidden"}`}>
            <div className="about-visual my-auto align-middle bg-blue-50 dark:bg-slate-900">
              <img src={nigImg} className="flex icon lg:w-[24rem] w-[16rem]" alt="Image not Available" />
            </div>
          </div>
          </div>                
        </div>
      </section>
      <section>
        <div className="pt-20 px-10 lg:px-20 space-y-10 bg-gradient-to-b from-blue-50 via-transparent to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900" id={"value-section"}>
          <hr className="w-[70%] mx-auto border border-b-blue-700"/>
          <h2 className="text-4xl font-bold header text-center">OUR VALUES</h2>
          <p className="text-gray-800 dark:text-slate-300 text-center text-sm lg:text-lg">We operate under this set of core values to guide us on our mission and activities.</p>
          <div className={`grid lg:grid-cols-3 gap-6 lg:px-20 lg:py-10 py-5 ${!isRevealValue ? "hidden" : "slide-in-top block overflow-hidden"}`}>
             {values.map((val, index) => (
              <div key={index} className="value-card text-black dark:text-slate-100 bg-slate-100 shadow-md dark:bg-slate-900 rounded-sm col-span-1 items-center flex flex-col space-y-4">
                <div className="rounded-sm p-10">
                  {open === index ? (
                  <button onClick={()=>toggle(index)} className="w-full flex justify-center items-center px-4 py-3 font-semibold">
                    <div className="flex flex-col space-y-5 items-center justify-center">
                      <img src={val.profile} className="w-28 mx-auto" alt="Image Profile" />
                      <p>
                        {val.title}
                      </p>
                    </div>
                  </button>
                  ) : (
                  <button onClick={() => toggle(index)} className="w-full flex justify-center items-center px-4 py-3 font-semibold">
                    <div className="flex flex-col space-y-5">
                      <img src={val.profile} className="w-28 mx-auto" alt="Image Profile" />
                      <p>
                        {val.title}
                      </p>
                    </div>
                  </button>  
                  )}
                
                <div className={`transition-all duration-300 overflow-hidden ${open === index ? "max-h-40" : "max-h-0"}`}>
                  <div className="px-4 pb-4 text-sm text-gray-700 dark:text-slate-300">{val.content}</div>
                </div>
                </div>
              </div>
            ))}          
          </div>
        </div>
      </section>
      
      <section>
        <div id="leadership" className="space-y-10 lg:p-6 lg:px-32 p-4 bg-blue-50 dark:bg-slate-900">
          <div  className="py-10 bg-blue-50 dark:bg-slate-900 px-4">
            <hr className="w-[85%] mx-auto border border-b-blue-700"/>
            <div className="mb-10 pt-10 text-black flex flex-col gap-5">
              <h1 className="text-4xl text-center header font-bold">Our Leadership</h1>
              <p className="lg:p-12 lg:text-lg text-sm text-center dark:text-slate-300">Visionary leadership driving Nigeria's space technology advancement.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 rounded-lg lg:p-6 p-2 shadow-lg bg-gradient-to-b lg:bg-gradient-to-r from-blue-950 via-slate-300 to-blue-50 dark:from-blue-100 dark:via-white dark:to-yellow-50">   
              <div className="flex items-center justify-center col-span-2">
                <img
                  src={sadqUmarImg}
                  alt="CSTD CEO"
                  className="lg:h-[350px] h-[250px] object-cover"
                />
              </div>

              <div className="flex flex-col justify-center lg:px-8 md:px-16 col-span-3">                
                <div className="text-center">
                  <h1 className="text-lg font-bold text-black mt-2 mb-4">ENGR.(DR) SADIQ UMAR ABUBAKAR, FNSE, FNISEng</h1>
                  <p className="lg:text-lg text-sm text-black mb-6">
                    THE DIRECTOR, CENTER FOR SATELLITE TECHNOLOGY DEVELOPMENT, CSTD
                  </p>
                </div>
                <p className="hidden lg:block text-black font-semibold lg:text-lg text-sm p-2">
                  Under the visionary leadership of Dr. Sadiq Umar, the director of CSTD, the centre is repositioning itself as an engine of national development. The centre has prioritised community outreach to address grassroots challenges and stimulate the academic interest in satellite systems.

                  Dr. Umar’s key focus is incentivising research activities that accelerate sustainable national development. Hence, the management and staff of CSTD emphasise the importance of research, innovation, and partnerships with universities and research institutions to deepen its culture of research and innovation.
                </p>
                <div className="lg:hidden space-y-5 text-black font-semibold lg:text-lg text-sm p-2">
                  <p>Under the visionary leadership of Dr. Sadiq Umar, the director of CSTD, the centre is repositioning itself as an engine of national development.</p>
                  <p>The centre has prioritised community outreach to address grassroots challenges and stimulate the academic interest in satellite systems.</p>
                  <p>Dr. Umar’s key focus is incentivising research activities that accelerate sustainable national development.</p>
                  <p>Hence, the management and staff of CSTD emphasise the importance of research, innovation, and partnerships with universities and research institutions to deepen its culture of research and innovation.</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
      
      <section  className="bg-blue-50 dark:bg-slate-900 py-4 px-4 text-white dark:text-slate-100" id="departments">
        <div className="mt-10 mb-20" id="dept-section">
        <hr className="w-[70%] mx-auto border border-b-blue-700"/>
          <h2 className="text-4xl mt-10 font-bold text-center header">Our Departments</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto my-10 p-6 lg:px-10">
            {departments.map((dept, index) => (
              <div key={index} className={`relative bg-white dark:bg-slate-800 text-black dark:text-slate-100 rounded-md shadow-2xl value-card ${!isRevealDept ? "hidden" : "slide-in-top block overflow-hidden"}`}>
                {/* Image Div */}
                  <h3 className="lg:hidden text-center text-lg font-semibold mb-2 p-6">{dept.title}</h3>
                  <img
                    src={dept.image}
                    alt={dept.title}
                    className="w-full lg:h-[65%] rounded-b-[2px] lg:rounded-t-[5px] object-cover"
                  />
                {/* Title */}
                <h3 className="hidden lg:block text-center text-lg font-semibold mt-6 px-6">{dept.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      
     <section>
      <div id="key-initiatives">
        <div  className="bg-blue-50 dark:bg-slate-900 px-4 text-white dark:text-slate-100">
        <hr className="w-[70%] mx-auto border border-b-blue-700"/>
          <h2 className="text-4xl font-bold text-center mt-10 mb-20 header">
            Our Key Initiatives
          </h2>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:px-20 px-6 md:grid-cols-3 lg:h-[50vh] gap-8 relative">
            {/* Project 1 */}
            <div className="flex flex-col items-center text-center lg:absolute lg:w-[25%] rounded-lg lg:left-10 top-30vh">
              <div className="rounded overflow-hidden h-full w-full">
                <img
                  src={projectImg}
                  alt="Our Projects"
                  className="shadow-md w-full h-full transPic"/>
              </div>
              <h3 className="text-xl font-semibold text-black dark:text-slate-100">Our Projects</h3>
              <p className="text-sm mt-2 text-black dark:text-slate-300">
                Advancing satellite platforms, remote sensing, and mission operations.
              </p>
            </div>

            {/* Project 2 */}
            <div className="flex flex-col items-center text-center lg:absolute lg:w-[25%] rounded-lg lg:right-[29rem] top-30vh">
              <div className="rounded overflow-hidden h-full w-full">
                <img
                  src={environmentImg}
                  alt="Research on Sustainable Energy Systems"
                  className="shadow-md w-full h-full transPic"/>
              </div>
              <h3 className="text-xl font-semibold text-black dark:text-slate-100">Research on Sustainable Energy Systems</h3>
              <p className="text-sm mt-2 text-black dark:text-slate-300">
                Exploring renewable energy through satellite-enabled technologies.
              </p>
            </div>

            {/* Project 3 */}
            <div className="flex flex-col items-center text-center lg:absolute lg:w-[25%] rounded-lg lg:right-10">
              <div className="rounded overflow-hidden h-full w-full">
                <img
                  src={partnershipImg}
                  alt="Global Partnerships"
                  className="shadow-md w-full h-full transPic"/>
              </div>
              <h3 className="text-xl font-semibold text-black dark:text-slate-100">Global Partnerships</h3>
              <p className="text-sm mt-2 text-black dark:text-slate-300">
                Collaborating with international agencies to expand innovation and impact.
              </p>
            </div>
          </div>
        </div>
      </div>    
     </section>

      <section>
      <div id="gallery">
          <div  className="py-16 bg-gradient-to-b from-blue-50 via-transparent to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 flex justify-center">
            <div className="w-full px-4">
             <hr className="w-[70%] mx-auto border border-b-blue-700"/>
              <h2 className="text-4xl header font-bold text-center mt-10 mb-10">Gallery</h2>

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
                className="rounded-lg w-[300px] h-[400px] lg:max-w-6xl lg:h-auto lg:w-auto"
              >
                {images.map((image, index) => (
                  <SwiperSlide
                    key={index}
                    className="flex justify-center items-center w-[300px] md:w-[400px] lg:w-[500px]"
                  >
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="rounded-lg shadow-xl w-full h-[600px] object-cover"
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
                    border: 2px solid #1d4ed8; /* blue-700 border for inactive bullets */
                    transition: opacity 0.3s ease, transform 0.3s ease;
                  }
                  .swiper-pagination-bullet-active {
                    background-color: #3b82f6; /* Tailwind's blue-500 */
                    border:transparent;
                    opacity: 1;
                    transform: scale(1.2);
                  }
                `}
              </style>
            </div>
          </div>
        </div>
      </section>
     
      <section>
        <div id="latest-news">
          <div className="bg-gradient-to-b from-blue-50 via-transparent to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 lg:py-16 px-6 lg:px-24">
          <hr className="w-[80%] mx-auto border border-b-blue-700"/>
            <h2 className="text-4xl text-center header font-bold mt-10 mb-12">
              Latest News
            </h2>

            {/* Combine dynamic news with hardcoded entries, newest first */}
            {(() => {
              const staticNews = [
                {
                  id: "static-1",
                  title: "New Satellite Launch Announced",
                  brief:
                    "The agency confirms the launch date for its newest Earth observation satellite.",
                  date: "2015-08-01",
                  thumbnail:
                    "https://cdn.pixabay.com/photo/2015/10/28/16/36/raisting-satellite-1010862_1280.jpg",
                },
                {
                  id: "static-2",
                  title: "CSTD Hosts Innovation Workshop",
                  brief:
                    "Researchers gathered to explore future technologies in climate monitoring, AI, and nanosatellite systems.",
                  date: "2015-08-01",
                  thumbnail: nasrdaImg,
                },
                {
                  id: "static-3",
                  title: "Nigeria Partners with EU on Space Tech",
                  brief:
                    "A new partnership with the European Union aims to boost R&D in sustainable satellite systems.",
                  date: "2015-08-01",
                  thumbnail:
                    "https://cdn.pixabay.com/photo/2012/11/28/09/08/mars-67522_1280.jpg",
                },
              ];

              const combined = [...latestNewsItems, ...staticNews].sort(
                (a, b) =>
                  new Date(b.date).getTime() - new Date(a.date).getTime()
              );

              if (combined.length === 0) {
                return (
                  <p className="text-center text-gray-500">
                    No news available at the moment.
                  </p>
                );
              }

              return (
                <div className="lg:w-[90%] mx-auto">
                  <Swiper
                    spaceBetween={24}
                    slidesPerView={1}
                    breakpoints={{
                      768: { slidesPerView: 2 },
                      1024: { slidesPerView: 3 },
                    }}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                  >
                    {combined.map((item) => (
                      <SwiperSlide key={item.id}>
                        <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition relative bg-gradient-to-t from-blue-100 to-blue-50 dark:from-slate-800 dark:to-slate-800 h-full flex flex-col">
                          {item.thumbnail && (
                            <img
                              src={item.thumbnail}
                              alt={item.title}
                              className="w-full h-80 object-cover"
                            />
                          )}
                          <div className="p-4 text-black dark:text-slate-100 flex-1 pb-10">
                            <h3 className="text-lg font-semibold mb-2 underline line-clamp-2">
                              {item.title}
                            </h3>
                            <p className="text-sm line-clamp-3">
                              {item.brief}
                            </p>
                            {item.date && (
                              <p className="roboto font-extrabold text-xs mt-3">
                                {new Date(item.date).toLocaleDateString(
                                  "en-US",
                                  {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  }
                                )}
                              </p>
                            )}
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              );
            })()}
          </div>
        </div>
      </section>

      <section>
        <div id="FAQ-section">
          <div  className="bg-gradient-to-b from-blue-50 via-transparent to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 py-16 px-4 lg:px-40 grid grid-cols-1 text-black dark:text-slate-100 lg:grid-cols-2 gap-10">
            <div className={`col-span-1 ${!isRevealFAQ ? "hidden" : "slide-in-left overflow-hidden"}`}>
              <h2 className="text-2xl font-bold text-center header mb-6">FAQS</h2>
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-300 dark:border-slate-700 mb-4 p-4 rounded-md cursor-pointer bg-white dark:bg-slate-800 shadow"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-lg w-[80%]">{faq.question}</h3>
                    <span className="text-xl">{openIndex === index ? (<FaAngleUp />) : (<FaChevronDown />)}</span>
                  </div>
                  {openIndex === index && (
                    <p className="mt-2 dark:text-slate-300">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
            <div className={`col-span-1 ${!isRevealFAQ ? "hidden" : "slide-in-right overflow-hidden"}`}>
              <h2 className="text-2xl font-bold header mb-6 text-center">HAVE QUESTIONS?</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="border border-gray-300 px-4 py-2 w-full rounded-md"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="border border-gray-300 px-4 py-2 w-full rounded-md"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Enter Your Message"
                    className="border border-gray-300 px-4 py-2 w-full rounded-md h-32"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-sm font-bold"
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
            <ToastContainer position="top-center" transition={Flip} autoClose={3000} hideProgressBar={true} closeOnClick pauseOnHover draggable />
          </div>
        </div>     
      </section>
    </div>
    </div>
  );
};

export default Home;





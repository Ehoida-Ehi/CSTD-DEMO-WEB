import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { FaGears } from "react-icons/fa6";
import { PiArrowFatLinesRightFill } from "react-icons/pi";
import { HiOutlineNewspaper } from "react-icons/hi2";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import {rniImages} from "../utils/images"


const RnI = () => {

const image1 = "https://cdn.pixabay.com/photo/2024/01/10/16/22/woman-8499959_1280.jpg"
const image2 = "https://cdn.pixabay.com/photo/2015/08/25/00/01/drone-905955_1280.jpg"
const image3 = "https://cdn.pixabay.com/photo/2017/09/10/02/58/drone-asperjando-2734242_1280.jpg"

const [
   pic5,
   pic6,
   pic7,
   pic8, 
   pic9, 
   pic11, 
   pic12, 
   pic13, 
   pic14, 
   pic15, 
   pic16, 
   pic17, 
] = rniImages

  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev === 0 ? 1 : prev === 1 ? 2 : 0));
    }, 5000); // change image every 5 seconds

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
    <div className="mt-16">
      
      <div className="w-full h-screen relative overflow-hidden">
        <img
          src={image1}
          alt="Image 1"
          className={`w-full h-full object-cover object-center absolute top-0 left-0 transition-opacity duration-1000 ${
            activeImage === 0 ? "opacity-100" : "opacity-0"
          }`}
        />
        <img
          src={image2}
          alt="Image 2"
          className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-1000 ${
            activeImage === 1 ? "opacity-100" : "opacity-0"
          }`}
        />
        <img
          src={image3}
          alt="Image 3"
          className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-1000 ${
            activeImage === 2 ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 rounded-lg p-2 bg-opacity-90">
            RESEARCH AND INNOVATION
          </h1>
        </div>
      </div>

      <div className="bg-white py-16 px-4 lg:px-20 text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 grid-cols-1 md:grid-cols-3 gap-8 h-[70vh] my-2 p-4">
          <div className="lg:col-span-2">
              <h1 className="text-xl font-semibold text-green-600 lg:text-3xl font-serif">Pioneering the Future of Satellite Research and Technology</h1>
              <p className="text-sm mt-2 text-black pe-10">
                At CSTD, our commitment to cutting-edge research and innovation fuels the advancement of satellite technology, space applications, and national development goals. Our scientists, engineers, and partners work collaboratively to turn ideas into practical solutions for Earth observation, communication, navigation, and environmental monitoring.
              </p>
          </div>
          <img src={pic5} alt="IMAGES" className="lg:col-span-3 h-[50%] w-full object-cover" />
        </div>  
        <div className="flex space-x-3 items-center text-black mt-20 mb-5 lg:my-12">
          <HiMiniWrenchScrewdriver className="text-3xl text-green-900" />
          <h1 className="font-serif lg:text-3xl text-2xl font-semibold text-green-800">Upcoming Projects</h1>
          <FaGears className="text-3xl text-green-900" />
        </div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 grid-cols-1 md:grid-cols-3 gap-3 h-fit my-2 p-8 border text-black bg-blue-950">
          {/* <img src="" alt="" /> */}
          <div className="border-2 border-gray-400 py-2 px-4 space-y-2 bg-white shadow-lg shadow-gray-800">
            <img src={pic6} alt="IMAGES" className="w-16 mx-auto"/>
            <h1 className="text-center font-extrabold uppercase">AI-Powered Satellite Image Analytics for National Security</h1>
            <h1 className="text-sm">Objective: Train an AI model on satellite imagery to automatically detect suspicious patterns such as illegal mining, deforestation, or unusual maritime activity.</h1>
            <div className="grid grid-cols-2 gap-1 ">
              <ul className="text-xs space-y-2 list-disc p-4 border-r border-black">
                <li><b>Why It Matters:</b> Enables proactive defense and anti-smuggling efforts across borders and forests.</li>
                <li><b>Technologies Involved:</b> Satellite imagery, computer vision, deep learning, secured data pipelines.</li>
              </ul>
              <ul className="text-xs space-y-2 list-disc px-6">
                <li><b>Partners:</b> DSS, DSA, NPF, Ministry of Defence, NIMASA.</li>
                <li><b>Output:</b> Operational prototype for 3 focus zones (Niger Delta, Zamfara forests, Gulf of Guinea) by Q3 2025.</li>
              </ul>
            </div>
          </div>
          <div className="border-2 border-gray-400 py-2 px-4 space-y-2 bg-white shadow-lg shadow-gray-800">
            <img src={pic6} alt="IMAGES" className="w-16 mx-auto"/>
            <h1 className="text-center font-extrabold uppercase">Passive Radar CubeSat Demonstrator</h1>
            <h1 className="text-sm">Objective: Build a CubeSat that uses existing radio and TV broadcasts as illumination sources for Earth observation</h1>
            <div className="grid grid-cols-2 gap-1 ">
              <ul className="text-xs space-y-2 list-disc p-4 border-r border-black">
                <li><b>Why It Matters:</b> Enables continuous Earth monitoring without power-hungry active radar systems.</li>
                <li><b>Technologies Involved:</b> Software-defined radio, signal processing algorithms, passive radar techniques.</li>
              </ul>
              <ul className="text-xs space-y-2 list-disc px-6">
                <li><b>Partners:</b> Broadcasting corporations, academic research groups, environmental monitoring agencies.</li>
                <li><b>Output:</b> Working CubeSat design with demonstrated capability to detect large vessels and terrain features by Q3 2025.</li>
              </ul>
            </div>
          </div>
          <div className="border-2 border-gray-400 py-2 px-4 space-y-2 bg-white shadow-lg shadow-gray-800">
            <img src={pic6} alt="IMAGES" className="w-16 mx-auto"/>
            <h1 className="text-center font-extrabold uppercase">CubeSat-Based Ionosphere Monitoring System</h1>
            <h1 className="text-sm">Objective: RF sensors to collect real-time data on ionospheric conditions affecting satellite communications and GPS accuracy.</h1>
            <div className="grid grid-cols-2 gap-1 ">
              <ul className="text-xs space-y-2 list-disc p-4 border-r border-black">
                <li><b>Why It Matters:</b> Provides crucial data for predicting communication disruptions and improving satellite navigation precision.</li>
                <li><b>Technologies Involved:</b> RF sensors, low-power microcontrollers, miniaturized antennas, open-source data processing.</li>
              </ul>
              <ul className="text-xs space-y-2 list-disc px-6">
                <li><b>Partners:</b> University physics departments, telecommunications companies, meteorological agencies.</li>
                <li><b>Output:</b> Functional 1U CubeSat prototype with 12-month operational capability and public data portal by Q4 2025.</li>
              </ul>
            </div>
          </div>
          
        </div>
        <div className="flex flex-col">
          <div id="projects">
    <div className="flex space-x-3 items-center text-black mt-12 mb-5 lg:mt-20">
            <HiMiniWrenchScrewdriver className="text-3xl text-green-900" />
            <h1 className="font-serif lg:text-3xl text-2xl font-semibold text-green-800">Past Projects</h1>
            <FaGears className="text-3xl text-green-900" />
          </div>
          <div className="p-2 border">
            <div className="grid grid-cols-5 h-fit w-full text-black space-y-10 items-center p-8 my-10 border-b-2 border-b-black">
              <img src={pic7} alt="IMAGES" className="col-span-3 object-cover lg:w-[80%] w-full" />
              <div className="col-span-2 space-y-2">
                <h1 className="text-md lg:text-3xl text-center font-extrabold text-green-800">Unmanned Ground Vehicle (UGV)</h1>
                <div className="hidden lg:block space-y-2">
                <h1>CSTD designed and developed an Unmanned Ground Vehicle (UGV). The UGV is designed as a fit-for-purpose robot, capable of deployment in potentially hazardous environments.</h1>
                <p><b>Specific Capabilities:</b></p>
                <ul className="list-disc py-2 px-6">
                  <li>Object Identification</li>
                  <li>Obstacle Avoidance</li>
                  <li>Gas Detection</li>
                  <li>Environmental Monitoring (Temperature, Humidity, and Pressure)</li>
                  <li>Perimeter surveillance </li>
                </ul>
                </div>
              </div>
            </div>      
            <div className="grid grid-cols-5 h-fit w-full text-black space-y-10 p-8 items-center gap-3 my-2 border-b-2 border-black">
              <div className="col-span-2 space-y-2">
                <h1 className="text-md lg:text-3xl text-center font-extrabold text-green-800">CSTD Tubesat Project </h1>
                <div className="hidden lg:block space-y-2">
                <h1>CSTD developed a TubeSat, a lightweight, inexpensive pico-satellite to demonstrate technical capacity to build larger and more sophisticated satellites for national development.</h1>
                <p><b>Project Justification:</b></p>
                <ul className="list-disc py-2 px-6">
                  <li>Hands-on experience for young engineers in space mission development and operations.</li>
                  <li>A stepping stone for building larger micro-satellites.</li>
                  <li>Fosters industry-academia collaboration, addressing skill shortages in the space sector.</li>
                  <li>Environmental Monitoring (Temperature, UV Intensity, GPS, Pressure and Gas Sensors)</li>
                </ul>
                </div>
              </div>
              <img src={pic8} alt="IMAGES" className="col-span-3 object-cover w-full lg:w-[60%]" />
            </div>      
            <div className="grid grid-cols-5 h-full w-full text-black space-y-2 p-8 items-center gap-3 my-2 border-b-2 border-black">
              <img src={pic9} alt="IMAGES" className="col-span-3 object-fit w-full lg:w-[60%] lg:h-fit flex mx-auto" />
              <div className="col-span-2 space-y-2">
                <h1 className="text-md text-center font-extrabold text-green-800 lg:text-3xl">Greenhouse Gas Measurement and Data Retrieval System</h1>
                <div className="hidden lg:block space-y-2">
                <h1>CSTD developed a greenhouse gas measurement and data retrieval system. The project aligns with Nigeria's commitments to the United Nations Framework Convention on Climate Change and showcases CSTD's progress towards achieving satellite technology competence.</h1>
                <p><b>Significance:</b></p>
                <ul className="list-disc py-2 px-6">
                  <li>Addresses global climate change challenges</li>
                  <li>To reduce greenhouse gas emissions by 30% by 2030</li>
                  <li>Demonstrates CSTD's capability in satellite technology development</li>
                  <li>Provides a platform for staff training and development</li>
                  <li>Potential for future collaborations and income generation</li>
                </ul>
                </div>
              </div>
            </div>      
            <div className="grid grid-cols-5 h-full w-full text-black space-y-2 p-8 gap-3 items-center my-2 border-b-2 border-black">
              <div className="col-span-2 space-y-2">
                <h1 className="text-md text-center font-extrabold text-green-800 lg:text-3xl">3-axis Fluxgate Magnetometer Project </h1>
                <div className="hidden lg:block space-y-2">
                  <h1>CSTD developed a high-quality, low-noise ring core fluxgate magnetometer for measuring magnetic fields in space and on Earth.</h1>
                  <p><b>Project Justification:</b></p>
                  <ul className="list-disc py-2 px-6">
                    <li>Enhances Nigeria's space technology capabilities</li>
                    <li>Reduces dependence on imported components for satellite systems</li>
                    <li>Opens possibilities for commercial applications in various industries</li>
                    <li>Demonstrates CSTD's ability to produce space-grade scientific instruments</li>
                  </ul>
                </div>
              </div>
              <img src={pic11} alt="IMAGES" className="col-span-3 object-fit w-full lg:w-[60%] lg:h-fit flex mx-auto" />
            </div>      
            <div className="grid grid-cols-5 h-full w-full text-black space-y-2 p-8 gap-3 items-center my-2 border-b-2 border-black">
              <img src={pic12} alt="IMAGES" className="col-span-3 object-fit w-full lg:w-[60%] lg:h-fit flex mx-auto" />
              <div className="col-span-2 space-y-2">
                <h1 className="text-md text-center font-extrabold text-green-800 lg:text-3xl">Attitude Determination and Control System (ADCS) Project</h1>
                <div className="hidden lg:block space-y-2">
                  <p>Environmental tests must be conducted to ensure that a satellite can operate within the harsh conditions of space such as gravity gradient, aerodynamic torques and solar radiations.</p>
                  <p> Attitude Determination and Control Subsystem (ADCS) software and hardware tests must be carried out on a test bed. CSTD developed an ADCS prototype.</p>
                </div>
              </div>
            </div>      
            <div className="grid grid-cols-5 h-full w-full text-black space-y-2 p-8 gap-3 items-center my-2 border-b-2 border-black">
              <div className="col-span-2 space-y-2">
                <h1 className="text-md text-center font-extrabold text-green-800 lg:text-3xl">S-band Filtration Project For a Leo Satellite Ground Station</h1>
                <div className="hidden lg:block space-y-2">
                  <h1>An in-house designed S-band Band-pass filter modeled after the filter used for the NigeriaSat-2 satellite Ground Station.</h1>
                  <h1><b>Significance:</b></h1>
                  <ul className="list-disc py-2 px-6">
                    <li>Cost-Effectiveness: A low-cost alternative to imported satellite components</li>
                    <li>Environmental Friendliness: Reduces reliance on environmentally impactful manufacturing processes abroad.</li>
                    <li>Technological Advancement: Showcases CSTD's expertise in developing critical satellite components</li>
                  </ul>
                </div>
              </div>
              <img src={pic13} alt="IMAGES" className="col-span-3 object-fit w-full lg:w-[80%] lg:h-[120%] lg:p-10 h-[100%] flex mx-auto" />
            </div>      
            <div className="grid grid-cols-5 h-full w-full text-black space-y-2 p-8 gap-3 items-center my-2 border-b-2 border-black">
              <img src={pic14} alt="IMAGES" className="col-span-3 object-fit w-full lg:w-[80%] lg:h-[100%] h-[100%] flex mx-auto" />
              <div className="col-span-2 space-y-2">
                <h1 className="text-md text-center font-extrabold text-green-800 lg:text-3xl">Development Of A Low Frequency Satellite Receiver</h1>
                <div className="hidden lg:block space-y-2">
                  <h1>Software-based radio frequency (RF) is used to minimize the size of the radio transceiver and to provide a larger bandwidth spectrum at higher operating frequencies and higher data rates.</h1>
                  <h1>Miniturized transceiver circuit reduces production costs and maximizes flexibility</h1>
                  <h1><b>Application:</b></h1>
                  <h1>It is compact and adaptable for various applications, including CubeSat, TubeSat, and CanSat communication and data collection.                </h1>
                </div>
              </div>
            </div>      
            <div className="grid grid-cols-5 h-full w-full text-black space-y-2 p-8 gap-3 items-center my-2 border-b-2 border-black">
              <div className="col-span-2 space-y-2">
                <h1 className="text-md text-center font-extrabold text-green-800 lg:text-3xl">Fabrication of 2 Meter Parabolic Dish Using Natural Fibre And Polyester Resin</h1>
                <div className="hidden lg:block space-y-2">
                  <h1>CSTD developed a 2-meter parabolic dish using natural fiber composites, specifically Banana Empty Fruit Bunch (BEFB) fibers and polyester resin.</h1>
                  <h1><b>Significance:</b></h1>
                  <ul className="list-disc py-2 px-6">
                    <li>Self-reliance in satellite technology development.</li>
                    <li>Promotes the use of sustainable, potentially lower-cost materials in satellite dish fabrication.</li>
                    <li>Future exploration of natural fiber composites in various space industry applications</li>
                  </ul>
                </div>
              </div>
              <img src={pic15} alt="IMAGES" className="col-span-3 object-fit w-full lg:w-[80%] lg:h-[100%] h-[100%] flex mx-auto" />
            </div>      
            <div className="grid grid-cols-5 h-full w-full text-black space-y-2 p-8 gap-3 items-center my-2 border-b-2 border-black">
              <img src={pic16} alt="IMAGES" className="col-span-3 object-fit w-full lg:w-[90%] lg:h-[100%] h-[100%] flex mx-auto" />
              <div className="col-span-2 space-y-2">
                <h1 className="text-md text-center font-extrabold text-green-800 lg:text-3xl">Green Synthesis Of Silver Nanoparticles And Its Application In Carbon Quantum Dots Sensitized Solar Cells For Enhanced Photovoltaic Performance</h1>
                <div className="hidden lg:block space-y-2">
                  <h1>Project focuses on developing a smart design strategy to enhance the performance of Carbon Quantum Dot Sensitized Solar Cells (CQDSSC) by introducing in-plane surface plasmon (SP) nanoparticles.</h1>
                  <h1><b>Significance:</b></h1>
                  <ul className="list-disc py-2 px-6">
                    <li>Addresses Nigeria's energy challenges</li>
                    <li>Reduces reliance on fossil fuels</li>
                    <li>Potential for widespread use in rural and off-grid communities</li>
                    <li>Stimulates local manufacturing and job creation in the renewable energy sector</li>
                  </ul>
                </div>
              </div>
            </div> 
          </div>
          </div>
          <div id="publications" >
            <div className="text-black p-3">
            <p className="items-center flex gap-2 my-10"><h1 className="font-serif lg:text-3xl text-2xl font-semibold text-green-800">Publications & White Papers</h1><HiOutlineNewspaper className="lg:text-3xl text-green-800" /></p>
            <div className="grid sm:grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-2">
              <img src="https://d2rty5wuu5bi5t.cloudfront.net/eyJidWNrZXQiOiJyc24tYnVja2V0Iiwia2V5IjoicHJvZHVjdGlvbi90ZWFzZXJzL21hdGhzLWJsb2cuanBnIiwiZWRpdHMiOnsianBlZyI6eyJxdWFsaXR5Ijo4MiwicHJvZ3Jlc3NpdmUiOnRydWUsInRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pemVTY2FucyI6dHJ1ZX0sInJlc2l6ZSI6eyJ3aWR0aCI6MTAyNCwiaGVpZ2h0Ijo3NjgsImZpdCI6ImNvdmVyIn0sInNoYXJwZW4iOnRydWV9fQ==" alt="IMAGES" className="lg:hidden rows-span-1 lg:col-span-1 w-full object-cover mx-auto justify-center flex h-full"/>
              <div className="flex flex-col sm:row-span-1 lg:col-span-1 items-center my-auto">
                <h1>Explore our latest research publications, case studies, and technical reports:</h1>
                <div className="lg:text-md text-sm font-semibold p-8 mt-3 lg:mt-0">
                  <h1>“AI-driven Object Recognition for Satellite Imagery” – 2024</h1>
                  <h1>“Utilizing CubeSats for Flood Prediction in Sub-Saharan Africa” – 2023</h1>
                  <h1>“Challenges in Indigenous Satellite Assembly” – 2022</h1>
                </div>
                <button className="bg-green-600 text-white w-fit p-3 rounded-lg cursor-pointer flex mt-5 items-center gap-2">
                📚 <p className="hover:underline">View All Publications</p> <PiArrowFatLinesRightFill className="text-green-950 text-xl hover:text-white"/>                
                </button>
              </div>
              <img src={pic17} alt="IMAGES" className="hidden sm:rows-span-1 lg:col-span-1 w-full object-cover mx-auto justify-center lg:flex h-full"/>
            </div>
          </div>  
          </div>
      
        </div>
      </div>
    </div>
  );
};

export default RnI;





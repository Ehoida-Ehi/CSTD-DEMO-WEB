import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { FaGears } from "react-icons/fa6";
import { PiArrowFatLinesRightFill } from "react-icons/pi";
import { HiOutlineNewspaper } from "react-icons/hi2";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { rniImages } from "../utils/images";

const RnI = () => {
  const image1 = "https://cdn.pixabay.com/photo/2024/01/10/16/22/woman-8499959_1280.jpg";
  const image2 = "https://cdn.pixabay.com/photo/2015/08/25/00/01/drone-905955_1280.jpg";
  const image3 = "https://cdn.pixabay.com/photo/2017/09/10/02/58/drone-asperjando-2734242_1280.jpg";

  const [pic5, pic6, pic7, pic8, pic9, pic11, pic12, pic13, pic14, pic15, pic16, pic17] = rniImages;

  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev === 0 ? 1 : prev === 1 ? 2 : 0));
    }, 5000);
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
      {/* Hero Carousel */}
      <div className="w-full h-screen relative overflow-hidden">
        <img
          src={image3}
          alt="Drone landscape"
          className={`w-full h-full object-cover object-center absolute top-0 left-0 transition-opacity duration-1000 ${
            activeImage === 0 ? "opacity-100" : "opacity-0"
          }`}
        />
        <img
          src={image2}
          alt="Drone in flight"
          className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-1000 ${
            activeImage === 1 ? "opacity-100" : "opacity-0"
          }`}
        />
        <img
          src={image1}
          alt="Woman with drone"
          className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-1000 ${
            activeImage === 2 ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 rounded-lg p-2 bg-opacity-20">
            RESEARCH AND INNOVATION
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white dark:bg-slate-900 py-16 px-4 lg:px-20 text-slate-900 dark:text-slate-100">
        {/* Introduction */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 grid-cols-1 gap-8 my-2 p-4">
          <div className="lg:col-span-2">
            <h1 className="text-xl font-bold text-slate-600 dark:text-blue-400 lg:text-3xl">
              Pioneering the Future of Satellite Research and Technology
            </h1>
            <p className="text-sm mt-2 text-slate-800 dark:text-slate-200 pe-10">
              At CSTD, our commitment to cutting-edge research and innovation fuels the advancement of satellite technology, space applications, and national development goals. Our scientists, engineers, and partners work collaboratively to turn ideas into practical solutions for Earth observation, communication, navigation, and environmental monitoring.
            </p>
          </div>
          <img
            src={pic5}
            alt="Research team"
            className="lg:col-span-3 w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Upcoming Projects */}
        <div className="flex space-x-3 items-center text-slate-900 dark:text-slate-100 mt-20 mb-5 lg:my-12">
          <HiMiniWrenchScrewdriver className="text-3xl text-green-900 dark:text-green-400" />
          <h1 className="font-serif lg:text-3xl text-2xl font-semibold text-green-800 dark:text-green-400">
            Upcoming Projects
          </h1>
          <FaGears className="text-3xl text-green-900 dark:text-green-400" />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 my-2 p-8 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 bg-blue-50 dark:bg-slate-800">
          {[ 
            {
              title: "AI-Powered Satellite Image Analytics for National Security",
              objective: "Train an AI model on satellite imagery to automatically detect suspicious patterns such as illegal mining, deforestation, or unusual maritime activity.",
              why: "Enables proactive defense and anti-smuggling efforts across borders and forests.",
              tech: "Satellite imagery, computer vision, deep learning, secured data pipelines.",
              partners: "DSS, DSA, NPF, Ministry of Defence, NIMASA.",
              output: "Operational prototype for 3 focus zones (Niger Delta, Zamfara forests, Gulf of Guinea) by Q3 2025."
            },
            {
              title: "Passive Radar CubeSat Demonstrator",
              objective: "Build a CubeSat that uses existing radio and TV broadcasts as illumination sources for Earth observation",
              why: "Enables continuous Earth monitoring without power-hungry active radar systems.",
              tech: "Software-defined radio, signal processing algorithms, passive radar techniques.",
              partners: "Broadcasting corporations, academic research groups, environmental monitoring agencies.",
              output: "Working CubeSat design with demonstrated capability to detect large vessels and terrain features by Q3 2025."
            },
            {
              title: "CubeSat-Based Ionosphere Monitoring System",
              objective: "RF sensors to collect real-time data on ionospheric conditions affecting satellite communications and GPS accuracy.",
              why: "Provides crucial data for predicting communication disruptions and improving satellite navigation precision.",
              tech: "RF sensors, low-power microcontrollers, miniaturized antennas, open-source data processing.",
              partners: "University physics departments, telecommunications companies, meteorological agencies.",
              output: "Functional 1U CubeSat prototype with 12-month operational capability and public data portal by Q4 2025."
            }
          ].map((project, idx) => (
            <div
              key={idx}
              className="border-2 border-gray-400 dark:border-slate-600 py-4 px-4 space-y-3 bg-white dark:bg-slate-900 shadow-lg shadow-gray-800 dark:shadow-slate-950"
            >
              <img src={pic6} alt="Project icon" className="w-16 mx-auto" />
              <h1 className="text-center font-extrabold uppercase text-sm md:text-base">
                {project.title}
              </h1>
              <p className="text-sm">{project.objective}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <ul className="list-disc pl-4 space-y-1">
                  <li>
                    <b>Why:</b> {project.why}
                  </li>
                  <li>
                    <b>Tech:</b> {project.tech}
                  </li>
                </ul>
                <ul className="list-disc pl-4 space-y-1">
                  <li>
                    <b>Partners:</b> {project.partners}
                  </li>
                  <li>
                    <b>Output:</b> {project.output}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Past Projects */}
        <div id="projects">
          <div className="flex space-x-3 items-center text-slate-900 dark:text-slate-100 mt-12 mb-5 lg:mt-20">
            <HiMiniWrenchScrewdriver className="text-3xl text-green-900 dark:text-green-400" />
            <h1 className="font-serif lg:text-3xl text-2xl font-semibold text-green-800 dark:text-green-400">
              Past Projects
            </h1>
            <FaGears className="text-3xl text-green-900 dark:text-green-400" />
          </div>

          <div className="p-2 border border-slate-300 dark:border-slate-600 space-y-8">
            {/* Project 1: UGV */}
            <div className="flex flex-col lg:flex-row items-center gap-6 p-8 border-b-2 border-slate-800 dark:border-slate-600">
              <img src={pic7} alt="UGV" className="w-full lg:w-1/2 object-cover rounded-lg" />
              <div className="lg:w-1/2 space-y-3">
                <h2 className="text-xl lg:text-3xl text-center lg:text-left font-extrabold text-green-800 dark:text-green-400">
                  Unmanned Ground Vehicle (UGV)
                </h2>
                <div className="space-y-2">
                  <p>
                    CSTD designed and developed an Unmanned Ground Vehicle (UGV). The UGV is designed as a fit-for-purpose robot, capable of deployment in potentially hazardous environments.
                  </p>
                  <p className="font-semibold">Specific Capabilities:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Object Identification</li>
                    <li>Obstacle Avoidance</li>
                    <li>Gas Detection</li>
                    <li>Environmental Monitoring (Temperature, Humidity, and Pressure)</li>
                    <li>Perimeter surveillance</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Project 2: Tubesat */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-6 p-8 border-b-2 border-slate-800 dark:border-slate-600">
              <img src={pic8} alt="Tubesat" className="w-full lg:w-1/2 object-cover rounded-lg" />
              <div className="lg:w-1/2 space-y-3">
                <h2 className="text-xl lg:text-3xl text-center lg:text-left font-extrabold text-green-800 dark:text-green-400">
                  CSTD Tubesat Project
                </h2>
                <div className="space-y-2">
                  <p>
                    CSTD developed a TubeSat, a lightweight, inexpensive pico-satellite to demonstrate technical capacity to build larger and more sophisticated satellites for national development.
                  </p>
                  <p className="font-semibold">Project Justification:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Hands-on experience for young engineers in space mission development and operations.</li>
                    <li>A stepping stone for building larger micro-satellites.</li>
                    <li>Fosters industry-academia collaboration, addressing skill shortages in the space sector.</li>
                    <li>Environmental Monitoring (Temperature, UV Intensity, GPS, Pressure and Gas Sensors)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Project 3: Greenhouse Gas Measurement */}
            <div className="flex flex-col lg:flex-row items-center gap-6 p-8 border-b-2 border-slate-800 dark:border-slate-600">
              <img src={pic9} alt="Greenhouse Gas" className="w-full lg:w-1/2 object-cover rounded-lg" />
              <div className="lg:w-1/2 space-y-3">
                <h2 className="text-xl lg:text-3xl text-center lg:text-left font-extrabold text-green-800 dark:text-green-400">
                  Greenhouse Gas Measurement and Data Retrieval System
                </h2>
                <div className="space-y-2">
                  <p>
                    CSTD developed a greenhouse gas measurement and data retrieval system. The project aligns with Nigeria's commitments to the United Nations Framework Convention on Climate Change and showcases CSTD's progress towards achieving satellite technology competence.
                  </p>
                  <p className="font-semibold">Significance:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Addresses global climate change challenges</li>
                    <li>To reduce greenhouse gas emissions by 30% by 2030</li>
                    <li>Demonstrates CSTD's capability in satellite technology development</li>
                    <li>Provides a platform for staff training and development</li>
                    <li>Potential for future collaborations and income generation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Project 4: Magnetometer */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-6 p-8 border-b-2 border-slate-800 dark:border-slate-600">
              <img src={pic11} alt="Magnetometer" className="w-full lg:w-1/2 object-cover rounded-lg" />
              <div className="lg:w-1/2 space-y-3">
                <h2 className="text-xl lg:text-3xl text-center lg:text-left font-extrabold text-green-800 dark:text-green-400">
                  3-axis Fluxgate Magnetometer Project
                </h2>
                <div className="space-y-2">
                  <p>
                    CSTD developed a high-quality, low-noise ring core fluxgate magnetometer for measuring magnetic fields in space and on Earth.
                  </p>
                  <p className="font-semibold">Project Justification:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Enhances Nigeria's space technology capabilities</li>
                    <li>Reduces dependence on imported components for satellite systems</li>
                    <li>Opens possibilities for commercial applications in various industries</li>
                    <li>Demonstrates CSTD's ability to produce space-grade scientific instruments</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Project 5: ADCS */}
            <div className="flex flex-col lg:flex-row items-center gap-6 p-8 border-b-2 border-slate-800 dark:border-slate-600">
              <img src={pic12} alt="ADCS" className="w-full lg:w-1/2 object-cover rounded-lg" />
              <div className="lg:w-1/2 space-y-3">
                <h2 className="text-xl lg:text-3xl text-center lg:text-left font-extrabold text-green-800 dark:text-green-400">
                  Attitude Determination and Control System (ADCS) Project
                </h2>
                <div className="space-y-2">
                  <p>
                    Environmental tests must be conducted to ensure that a satellite can operate within the harsh conditions of space such as gravity gradient, aerodynamic torques and solar radiations. Attitude Determination and Control Subsystem (ADCS) software and hardware tests must be carried out on a test bed. CSTD developed an ADCS prototype.
                  </p>
                </div>
              </div>
            </div>

            {/* Project 6: S-band Filter */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-6 p-8 border-b-2 border-slate-800 dark:border-slate-600">
              <img src={pic13} alt="S-band filter" className="w-full lg:w-1/2 object-cover rounded-lg" />
              <div className="lg:w-1/2 space-y-3">
                <h2 className="text-xl lg:text-3xl text-center lg:text-left font-extrabold text-green-800 dark:text-green-400">
                  S-band Filtration Project For a Leo Satellite Ground Station
                </h2>
                <div className="space-y-2">
                  <p>
                    An in-house designed S-band Band-pass filter modeled after the filter used for the NigeriaSat-2 satellite Ground Station.
                  </p>
                  <p className="font-semibold">Significance:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Cost-Effectiveness: A low-cost alternative to imported satellite components</li>
                    <li>Environmental Friendliness: Reduces reliance on environmentally impactful manufacturing processes abroad.</li>
                    <li>Technological Advancement: Showcases CSTD's expertise in developing critical satellite components</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Project 7: Low Frequency Receiver */}
            <div className="flex flex-col lg:flex-row items-center gap-6 p-8 border-b-2 border-slate-800 dark:border-slate-600">
              <img src={pic14} alt="Low frequency receiver" className="w-full lg:w-1/2 object-cover rounded-lg" />
              <div className="lg:w-1/2 space-y-3">
                <h2 className="text-xl lg:text-3xl text-center lg:text-left font-extrabold text-green-800 dark:text-green-400">
                  Development Of A Low Frequency Satellite Receiver
                </h2>
                <div className="space-y-2">
                  <p>
                    Software-based radio frequency (RF) is used to minimize the size of the radio transceiver and to provide a larger bandwidth spectrum at higher operating frequencies and higher data rates. Miniaturized transceiver circuit reduces production costs and maximizes flexibility.
                  </p>
                  <p className="font-semibold">Application:</p>
                  <p>
                    It is compact and adaptable for various applications, including CubeSat, TubeSat, and CanSat communication and data collection.
                  </p>
                </div>
              </div>
            </div>

            {/* Project 8: Parabolic Dish */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-6 p-8 border-b-2 border-slate-800 dark:border-slate-600">
              <img src={pic15} alt="Parabolic dish" className="w-full lg:w-1/2 object-cover rounded-lg" />
              <div className="lg:w-1/2 space-y-3">
                <h2 className="text-xl lg:text-3xl text-center lg:text-left font-extrabold text-green-800 dark:text-green-400">
                  Fabrication of 2 Meter Parabolic Dish Using Natural Fibre And Polyester Resin
                </h2>
                <div className="space-y-2">
                  <p>
                    CSTD developed a 2-meter parabolic dish using natural fiber composites, specifically Banana Empty Fruit Bunch (BEFB) fibers and polyester resin.
                  </p>
                  <p className="font-semibold">Significance:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Self-reliance in satellite technology development.</li>
                    <li>Promotes the use of sustainable, potentially lower-cost materials in satellite dish fabrication.</li>
                    <li>Future exploration of natural fiber composites in various space industry applications</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Project 9: Solar Cells */}
            <div className="flex flex-col lg:flex-row items-center gap-6 p-8 border-b-2 border-slate-800 dark:border-slate-600">
              <img src={pic16} alt="Solar cells" className="w-full lg:w-1/2 object-cover rounded-lg" />
              <div className="lg:w-1/2 space-y-3">
                <h2 className="text-xl lg:text-3xl text-center lg:text-left font-extrabold text-green-800 dark:text-green-400">
                  Green Synthesis Of Silver Nanoparticles And Its Application In Carbon Quantum Dots Sensitized Solar Cells For Enhanced Photovoltaic Performance
                </h2>
                <div className="space-y-2">
                  <p>
                    Project focuses on developing a smart design strategy to enhance the performance of Carbon Quantum Dot Sensitized Solar Cells (CQDSSC) by introducing in-plane surface plasmon (SP) nanoparticles.
                  </p>
                  <p className="font-semibold">Significance:</p>
                  <ul className="list-disc pl-6 space-y-1">
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

        {/* Publications */}
        <div id="publications" className="text-slate-900 dark:text-slate-100 p-3">
          <p className="items-center flex gap-2 my-10">
            <h1 className="font-serif lg:text-3xl text-2xl font-semibold text-green-800 dark:text-green-400">
              Publications & White Papers
            </h1>
            <HiOutlineNewspaper className="lg:text-3xl text-green-800 dark:text-green-400" />
          </p>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 items-center">
            <img
              src="https://d2rty5wuu5bi5t.cloudfront.net/eyJidWNrZXQiOiJyc24tYnVja2V0Iiwia2V5IjoicHJvZHVjdGlvbi90ZWFzZXJzL21hdGhzLWJsb2cuanBnIiwiZWRpdHMiOnsianBlZyI6eyJxdWFsaXR5Ijo4MiwicHJvZ3Jlc3NpdmUiOnRydWUsInRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pemVTY2FucyI6dHJ1ZX0sInJlc2l6ZSI6eyJ3aWR0aCI6MTAyNCwiaGVpZ2h0Ijo3NjgsImZpdCI6ImNvdmVyIn0sInNoYXJwZW4iOnRydWV9fQ=="
              alt="Publications"
              className="w-full h-auto object-cover rounded-lg lg:order-1 order-2"
            />
            <div className="flex flex-col items-center lg:items-start lg:order-2 order-1 space-y-4">
              <p className="text-center lg:text-left">
                Explore our latest research publications, case studies, and technical reports:
              </p>
              <div className="text-sm lg:text-base font-semibold space-y-1">
                <p>“AI-driven Object Recognition for Satellite Imagery” – 2024</p>
                <p>“Utilizing CubeSats for Flood Prediction in Sub-Saharan Africa” – 2023</p>
                <p>“Challenges in Indigenous Satellite Assembly” – 2022</p>
              </div>
              <button className="bg-green-600 text-white w-fit p-3 rounded-lg cursor-pointer flex items-center gap-2 hover:bg-green-700 transition">
                📚 <span className="hover:underline">View All Publications</span>{" "}
                <PiArrowFatLinesRightFill className="text-green-950 text-xl hover:text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RnI;
import { Link, useLocation } from "react-router-dom";
import cstdImg from '../assets/images/cstd logoogo.png';
import { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";


export default function Navbar() {
  const [isSmallScreen, setSmallScreen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
        setSmallScreen(false)
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);
 
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950 z-50">
      <div className="lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-left">
            <img
              src={cstdImg}
              alt="NASRDA Logo"
              className="w-16 mt-2 mb-2"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center text-md">
            {/** Navigation Items with Dropdown */}
            <Link to="/" className="text-white hover:text-green-600 relative group">
              Home
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/About" className="text-white hover:text-green-600 relative group">
              About Us
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <SatelliteDropdown />
            <Link to="/RnI" className="text-white hover:text-green-600 relative group">
              Research & Innovation
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <a href="#departments" className="text-white hover:text-green-600 relative group">
              Departments
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <Dropdown label="Media" items={["News", "Gallery", "Videos"]} />
            <Link to="/Contact" className="text-white hover:text-green-600 relative group">
              Contact Us
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Right Side - News/Events */}
          <div className="text-white hidden md:flex space-x-2 items-center">
            <Link to="/#latest-news" className="hover:text-green-600">News</Link>
            <span>|</span>
            <Link to="/#events" className="hover:text-green-600">Events</Link>
          </div>

          <div className="lg:hidden flex">
            <RxHamburgerMenu className="text-xl z-50" onClick={()=>{setSmallScreen(true); setIsOpen(true)}}/>
            {isSmallScreen ? (
              <div>
                {isOpen && (<div className="fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300"></div>)}
                <div className="lg:hidden text-md bg-white fixed z-30 right-0 w-[55%] text-black top-[4rem]">
                  <div className="relative">
                    <div className="flex flex-col gap-4 items-start p-3" ref={menuRef} onClick={()=>{setIsOpen(false); setSmallScreen(false)}}>
                        {/** Navigation Items with Dropdown */}
                      <Link to="/" className="">
                        Home
                        <span className=""></span>
                      </Link>
                      <Link to="/About" className="">
                        About Us
                        <span className=""></span>
                      </Link>
                      <Link to="/RnI" className="">
                        Research & Innovation
                        <span className=""></span>
                      </Link>
                      <a href="#departments" className="">
                        Departments
                        <span className=""></span>
                      </a>
                      <Link to="/Contact" className="">
                        Contact Us
                        <span className=""></span>
                      </Link>  
                    </div>
                  </div>
                  
                </div>
              </div>
            ) : null}
          </div>
          
        </div>
      </div>
    </nav>
  );
}

// Helper to create valid section IDs
function slugify(text) {
  return text
    .toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
}



function Dropdown({ label, items, page }) {
  const location = useLocation();

  const externalLinks = {
    "NigeriaSAT – 1": "https://central.nasrda.gov.ng/space-missions/nigeriasat-1/",
    "NigeriaSAT – 2": "https://central.nasrda.gov.ng/space-missions/nigeriasat-2/",
    "NigeriaSAT -X": "https://central.nasrda.gov.ng/space-missions/nigeriasat-x/",
    "Mission & Vision": "/about#mission-and-vision",
    "SIP": "/about#sip",
    "Projects": "/rni#projects",
    "Publications": "/rni#publications",
    "Departments": "/#departments",
    "Gallery": "/media#gallery",
    "News": "/media#news",
    "Partner with us": "/contact#partner",
    "Map": "/contact#map",
  };

  const isExternal = (url) => /^https?:\/\//.test(url);

  return (
    <div className="relative group">
      <Link to={page} className="text-white hover:text-green-600 relative group">
        {label}
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
      </Link>

      <div className="absolute top-full left-0 bg-white shadow-lg rounded-md text-md hidden group-hover:block z-50 min-w-[180px]">
        {items.map((item, idx) => {
          const href = externalLinks[item] || `${page}#${slugify(item)}`;

          if (isExternal(href)) {
            return (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-slate-800 hover:bg-green-100 hover:text-green-700 text-sm"
              >
                {item}
              </a>
            );
          }

          const isSamePageHash = href.startsWith("#") || href.startsWith(`${location.pathname}#`);

          return isSamePageHash ? (
            <a
              key={idx}
              href={href}
              className="block px-4 py-2 text-slate-800 hover:bg-green-100 hover:text-green-700 text-sm"
            >
              {item}
            </a>
          ) : (
            <Link
              key={idx}
              to={href}
              className="block px-4 py-2 text-slate-800 hover:bg-green-100 hover:text-green-700 text-sm"
            >
              {item}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function SatelliteDropdown() {
  const satelliteItems = [
    { name: "Nigeria Sat-1", path: "/Sat1" },
    { name: "Nigeria Sat-2", path: "/Sat2" },
    { name: "Nigeria Sat-X", path: "/SatX" }
  ];

  return (
    <div className="relative group">
      <button className="text-white hover:text-green-600 relative group">
        Satellite Missions
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
      </button>
      <div className="absolute top-full left-0 bg-white shadow-lg rounded-md text-md hidden group-hover:block z-50 min-w-[200px]">
        {satelliteItems.map((item, idx) => (
          <Link
            key={idx}
            to={item.path}
            className="block px-4 py-2 text-slate-800 hover:bg-green-100 hover:text-green-700 text-sm"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}



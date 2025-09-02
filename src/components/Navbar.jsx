import { Link, useLocation } from "react-router-dom";
import cstdImg from '../assets/images/cstd logoogo.png';


export default function Navbar() {
 
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <Dropdown label="Home" items={["Mission & Vision", "Department", "Leadership"]} />
            <Dropdown label="About Us" items={["Mission & Vision", "Leadership", "History"]} />
            <Dropdown label="Satellite Missions" items={["Past Missions", "Ongoing Projects", "Upcoming Launches"]} />
            <Dropdown label="Research & Innovation" items={["Focus Areas", "Facilities", "Publications"]} />
            <Dropdown label="Divisions" items={["Engineering", "Systems", "Operations"]} />
            <Dropdown label="Media" items={["News", "Gallery", "Videos"]} />
            <Dropdown label="Contact Us" items={["Email", "Phone", "Map", "Partner with us"]} />
          </div>

          {/* Right Side - News/Events */}
          <div className="text-white hidden md:flex space-x-2 items-center">
            <Link to="/#latest-news" className="hover:text-green-600">News</Link>
            <span>|</span>
            <Link to="/#events" className="hover:text-green-600">Events</Link>
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
    { name: "NigeriaSAT-1", path: "/Sat1" },
    { name: "NigeriaSAT-2", path: "/Sat2" },
    { name: "NigeriaSAT-X", path: "/SatX" }
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



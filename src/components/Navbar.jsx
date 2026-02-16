import { Link, useLocation } from "react-router-dom";
import cstdImg from '../assets/images/cstd logoogo.png';
import { useContext, useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaSun, FaMoon, FaDesktop } from "react-icons/fa6";
import { NavPageContext } from "../context/NavPageContext";
import { useTheme } from "../context/ThemeContext";
import axios from "axios";
import EventsSidebar from "./EventsSidebar";

function NavMenuItem({ to, children, className = "", onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`text-white dark:text-white hover:text-green-400 dark:hover:text-green-400 relative group ${className}`.trim()}
    >
      {children}
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}

function ThemeToggle() {
  const { theme, setTheme, themes } = useTheme();

  const cycle = [themes.light, themes.dark, themes.system];
  const currentIndex = cycle.indexOf(theme);
  const nextIndex = (currentIndex + 1) % cycle.length;
  const nextTheme = cycle[nextIndex];

  const icons = {
    [themes.light]: FaSun,
    [themes.dark]: FaMoon,
    [themes.system]: FaDesktop,
  };
  const labels = {
    [themes.light]: "Light mode",
    [themes.dark]: "Dark mode",
    [themes.system]: "System default",
  };
  const iconColors = {
    [themes.light]: "text-amber-100",
    [themes.dark]: "text-indigo-300",
    [themes.system]: "text-blue-400",
  };

  const Icon = icons[theme];
  const nextLabel = labels[nextTheme];

  return (
    <button
      type="button"
      onClick={() => setTheme(nextTheme)}
      title={`${labels[theme]} (click for ${nextLabel})`}
      aria-label={`Switch to ${nextLabel}`}
      className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 active:scale-95 hover:bg-white/10 ${iconColors[theme]}`}
    >
      <Icon className="w-5 h-5" aria-hidden />
    </button>
  );
}

export default function Navbar({navPages}) {
  const [isSmallScreen, setSmallScreen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null);
  const { BASEURL } = useContext(NavPageContext);

  const [eventsSidebarOpen, setEventsSidebarOpen] = useState(false);
  const [eventsLoading, setEventsLoading] = useState(false);
  const [eventsError, setEventsError] = useState("");
  const [events, setEvents] = useState([]);

  const closeEventsSidebar = () => setEventsSidebarOpen(false);
  const openEventsSidebar = () => setEventsSidebarOpen(true);

  // const {navPages, setNavPages} = useContext(NavPageContext)

  // const BASEURL = "https://cstd-backend-server.onrender.com/api/CSTDsite"

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

  // Lock body scroll while sidebar is open
  useEffect(() => {
    if (!eventsSidebarOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [eventsSidebarOpen]);

  // Fetch events when sidebar opens (keeps it "updated")
  useEffect(() => {
    if (!eventsSidebarOpen) return;

    const fetchEvents = async () => {
      setEventsLoading(true);
      setEventsError("");
      try {
        const resp = await axios.get(`${BASEURL}/events/fetchevents`);
        const data = resp.data?.data || [];
        setEvents(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Failed to fetch events:", err);
        setEventsError("Failed to load events. Please try again.");
        setEvents([]);
      } finally {
        setEventsLoading(false);
      }
    };

    fetchEvents();
  }, [eventsSidebarOpen, BASEURL]);

  // useEffect(()=>{
  //   const getNavPages = async(e)=>{
  //     try {
  //       const resp = await axios.get(`${BASEURL}/pages/links`)
  //       setNavPages(resp.data)
  //       console.log(resp.data)
  //     } catch (error) {
  //       console.error("Failed to fetch: ", error)
  //     }
  //   }
  //   getNavPages()
  // },[])
 
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950 z-50 border-b border-slate-800">
      <div className="lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-left flex items-center gap-2">
            <img
              src={cstdImg}
              alt="NASRDA Logo"
              className="w-16 mt-2 mb-2"
            />
            <p className="text-white text-4xl font-bold">CSTD</p>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex space-x-8 items-center text-md">
            {/** Navigation Items with Dropdown */}
            <NavMenuItem to="/">Home</NavMenuItem>
            {navPages ? (
              navPages.map((navPage) => {
                const isRni =
                  navPage.pageName === "Research and Innovation" ||
                  navPage.pageName === "Research & Innovation" ||
                  navPage.pageName === "R&I";
                return (
                  <NavMenuItem
                    key={navPage._id}
                    to={navPage.path}
                  >
                    {isRni ? (
                      <span className="relative inline-block">
                        <span className="block group-hover:hidden transition-all duration-700">
                          R & I
                        </span>
                        <span className="hidden group-hover:inline transition-all duration-700 whitespace-nowrap">
                          Research and Innovation
                        </span>
                      </span>
                    ) : (
                      navPage.pageName
                    )}
                  </NavMenuItem>
                );
              })
            ) : (
              <div>No Pages Found</div>
            )}
          </div>

          {/* Right Side (lg) - News/Events + Theme Toggle */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="text-white flex space-x-2 items-center">
              <NavMenuItem to="/#latest-news">News</NavMenuItem>
              <span>|</span>
              <NavMenuItem
                to="/#events"
                onClick={(e) => {
                  e.preventDefault();
                  openEventsSidebar();
                }}
              >
                Events
              </NavMenuItem>
            </div>
            <ThemeToggle />
          </div>

          {/* Mobile/Tablet - Theme Toggle (left) + Burger (right) */}
          <div className="lg:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              type="button"
              className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors z-50"
              onClick={() => { setSmallScreen(true); setIsOpen(true); }}
              aria-label="Open menu"
            >
              <RxHamburgerMenu className="text-xl" />
            </button>
            {isSmallScreen ? (
              <div>
                {isOpen && (
                  <div
                    className="fixed inset-0 bg-black/60 z-20 transition-opacity duration-300"
                    onClick={() => {
                      setIsOpen(false);
                      setSmallScreen(false);
                    }}
                  />
                )}
                <div className="lg:hidden text-md bg-slate-50 dark:bg-slate-950 rounded-bl-lg fixed z-30 right-0 w-[70%] sm:w-[55%] h-[70%] text-slate-900 dark:text-slate-100 top-[4rem] border-l border-slate-200 dark:border-slate-800 shadow-xl transform transition-transform duration-300 ease-out">
                  <div className="relative h-full flex flex-col" ref={menuRef}>
                    <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-slate-800">
                      <span className="text-sm font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-200">
                        Menu
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          setIsOpen(false);
                          setSmallScreen(false);
                        }}
                        className="p-1.5 rounded-md text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        aria-label="Close menu"
                        title="Close"
                      >
                        ✕
                      </button>
                    </div>

                    <NavMenuItem
                      to="/"
                      className="block p-3 !text-inherit hover:!text-green-400"
                      onClick={() => {
                        setIsOpen(false);
                        setSmallScreen(false);
                      }}
                    >
                      Home
                    </NavMenuItem>
                    {navPages ? (
                      navPages.map((navPage) => {
                        const isRni =
                          navPage.pageName === "Research and Innovation" ||
                          navPage.pageName === "Research & Innovation" ||
                          navPage.pageName === "R&I";
                        return (
                          <NavMenuItem
                            key={navPage._id}
                            to={navPage.path ?? `/${navPage.pageId}`}
                            className="block p-3 !text-inherit hover:!text-green-400"
                            onClick={() => {
                              setIsOpen(false);
                              setSmallScreen(false);
                            }}
                          >
                            {isRni ? (
                              <span className="relative inline-block">
                                <span className="block group-hover:hidden transition-all duration-200">
                                  R and I
                                </span>
                                <span className="hidden group-hover:inline transition-all duration-200 whitespace-nowrap">
                                  Research and Innovation
                                </span>
                              </span>
                            ) : (
                              <span>{navPage.pageName}</span>
                            )}
                          </NavMenuItem>
                        );
                      })
                    ) : (
                      <p>Unable to load pages</p>
                    )}

                  </div>
                  
                </div>
              </div>
            ) : null}
          </div>
          
        </div>
      </div>

      <EventsSidebar
        open={eventsSidebarOpen}
        onClose={closeEventsSidebar}
        events={events}
        loading={eventsLoading}
        error={eventsError}
      />
    </nav>
  );
}

// Helper to create valid section IDs
function slugify(text) {
  return text
    .toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
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



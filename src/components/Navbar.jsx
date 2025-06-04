import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
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
            <Dropdown label="Home" page="/" items={["Values", "Leadership", "Departments", "Key Initiatives", "Gallery", "Latest News", "FAQ"]} />
            <Dropdown label="About Us" page="/#" items={["Mission & Vision", "History", "SIP"]} />
            <Dropdown label="Satellite Missions" page="https://central.nasrda.gov.ng/space-missions/" items={["NigeriaSAT – 1", "NigeriaSAT – 2", "NigeriaSAT -X"]} />
            <Dropdown label="Research & Innovation" page="#" items={["Projects", "Publications"]} />
            <Dropdown label="Divisions" page="/#" items={["Departments"]} />
            <Dropdown label="Media" page="/#" items={["News", "Gallery", "Videos"]} />
            <Dropdown label="Contact Us" page="/#" items={["Email", "Phone", "Map", "Partner with us"]} />
          </div>

          {/* Right Side - News/Events */}
          <div className="text-white hidden md:flex space-x-2 items-center">
            <Link to="/news" className="hover:text-green-600">News</Link>
            <span>|</span>
            <Link to="/events" className="hover:text-green-600">Events</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Helper to create valid section IDs
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function Dropdown({ label, items, page }) {
  // Define specific external links for NigeriaSAT dropdown
  const externalLinks = {
    "NigeriaSAT – 1": "https://central.nasrda.gov.ng/space-missions/nigeriasat-1/",
    "NigeriaSAT – 2": "https://central.nasrda.gov.ng/space-missions/nigeriasat-2/",
    "NigeriaSAT -X": "https://central.nasrda.gov.ng/space-missions/nigeriasat-x/"
  };

  return (
    <div className="relative group">
      {/* Page link with React Router */}
      <Link to={page} className="text-white hover:text-green-600 relative group">
        {label}
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
      </Link>

      {/* Dropdown Menu */}
      <div className="absolute top-full left-0 bg-white shadow-lg rounded-md text-md hidden group-hover:block z-50 min-w-[180px]">
        {items.map((item, idx) => {
          const externalHref = externalLinks[item];
          return externalHref ? (
            <a
              key={idx}
              href={externalHref}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-slate-800 hover:bg-green-100 hover:text-green-700 text-sm"
            >
              {item}
            </a>
          ) : (
            <a
              key={idx}
              href={`#${slugify(item)}`}
              className="block px-4 py-2 text-slate-800 hover:bg-green-100 hover:text-green-700 text-sm"
            >
              {item}
            </a>
          );
        })}
      </div>
    </div>
  );
}



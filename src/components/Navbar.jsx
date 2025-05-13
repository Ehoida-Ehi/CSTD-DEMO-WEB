import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-left">
            <h1 className="text-green-500 text-lg font-bold">NASRDA</h1>
            <p className="text-blue-500 text-sm -mt-1">LOGO</p>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center text-md">
            {/** Navigation Items with Dropdown */}
            <Dropdown label="Home" items={["Mission & Vision", "Department", "Leadership"]} />
            <Link to="/about"><Dropdown label="About Us" items={["Mission & Vision", "Leadership", "History"]} /></Link>
            <Dropdown label="Satellite Missions" items={["Past Missions", "Ongoing Projects", "Upcoming Launches"]} />
            <Dropdown label="Research & Innovation" items={["Focus Areas", "Facilities", "Publications"]} />
            <Dropdown label="Divisions" items={["Engineering", "Systems", "Operations"]} />
            <Dropdown label="Media" items={["News", "Gallery", "Videos"]} />
            <Dropdown label="Contact Us" items={["Email", "Phone", "Map", "Partner with us"]} />
          </div>

          {/* Right Side - News/Events */}
          <div className="text-white hidden md:flex space-x-2 items-center">
            <a href="#" className="hover:text-green-600">News</a>
            <span>|</span>
            <a href="#" className="hover:text-green-600">Events</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Dropdown({ label, items }) {
  return (
    <div className="relative group">
      <button className="text-white hover:text-green-600 relative group">
        {label}
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
      </button>
      <div className="absolute top-full left-0 bg-white shadow-lg rounded-md text-md hidden group-hover:block z-50 min-w-[180px] ">
        {items.map((item, idx) => (
          <a
            key={idx}
            href="#"
            className="block px-4 py-2 text-slate-800 hover:bg-green-100 hover:text-green-700 text-sm"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}



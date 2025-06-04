import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import cstdImg from '../assets/images/cstd logoogo.png';


const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white px-6 py-12">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
           {/* Logo and Mission */}
           <div className="md:col-span-2">
             <img
                src={cstdImg}
               alt="NASRDA Logo"
               className="w-20 mb-4"
             />
             <h2 className="text-2xl font-bold mb-2">
               Center For Satellite Technology Development
             </h2>
             <p className="text-sm text-gray-300 mb-4 leading-relaxed">
               CSTD explores the unknown in air and space, innovates for the benefit
               of humanity, and inspires the world through discovery.
             </p>
             <a href="#" className="block underline text-sm text-white mb-2">
               About CSTD's Mission
             </a>
             <a
               href="#"
               className="text-red-500 font-bold text-sm flex items-center"
             >
               Join Us <span className="ml-1">→</span>
             </a>
           </div>
   
           {/* Footer Links */}
           <div>
             <ul className="space-y-2 text-sm">
               <li>Home</li>
               <li>News & Events</li>
               <li>Multimedia</li>
               <li>
                 CSTD+
                 <span className="ml-2 text-xs px-1 py-0.5 border border-white rounded">
                   LIVE
                 </span>
               </li>
               <li>Projects</li>
             </ul>
           </div>
   
           <div>
             <ul className="space-y-2 text-sm">
               <li>Satellite in Space</li>
               <li>Earth</li>
               <li>The Solar System</li>
               <li>The Universe</li>
               <li>Science</li>
             </ul>
           </div>
   
           <div>
             <ul className="space-y-2 text-sm">
               <li>Aeronautics</li>
               <li>Technology</li>
               <li>Learning Resources</li>
               <li>About CSTD</li>
               <li>Patnership</li>
             </ul>
           </div>
   
           {/* Social Icons */}
           <div>
             <h3 className="text-gray-300 font-semibold mb-4">Follow CSTD</h3>
             <div className="flex gap-4 mb-4">
               <FaFacebookF className="text-xl" />
               <FaInstagram className="text-xl" />
               <FaXTwitter className="text-xl" />
               <FaYoutube className="text-xl" />
             </div>
             <ul className="space-y-2 text-sm">
               <li>More CSTD Social Accounts</li>
               <li>CSTD Newsletters</li>
             </ul>
           </div>
         </div>
   
         {/* Divider */}
         <hr className="my-8 border-gray-700" />
   
         {/* Bottom Links */}
         <div className="max-w-7xl mx-auto text-xs text-gray-400 flex flex-wrap justify-between gap-y-2">
           <div className="flex flex-wrap gap-4">
             <a href="#">Sitemap</a>
             <a href="#">For Media</a>
             <a href="#">Privacy Policy</a>
             <a href="#">FOIA</a>
             <a href="#">No FEAR Act</a>
             <a href="#">Office of the IG</a>
             <a href="#">Budget & Annual Reports</a>
             <a href="#">Agency Financial Reports</a>
             <a href="#">Contact CSTD</a>
             <a href="#">Accessibility</a>
           </div>
           <div className="mt-4">
             Page Last Updated: <span className="text-white font-medium">May 19, 2025</span><br />
             Page Editor: <span className="font-semibold text-white">Ehi Jennifer Ehoida</span><br />
             Responsible CSTD Official:{" "}
             <span className="font-semibold text-white">Omotayo Maryam</span>
           </div>
         </div>
       </footer> 
  );
};

export default Footer;

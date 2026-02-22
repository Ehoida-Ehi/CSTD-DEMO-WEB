import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaFingerprint } from "react-icons/fa";
import { FaNewspaper, FaCalendarDays } from "react-icons/fa6";
import { useEventsSidebar } from "../context/EventsSidebarContext";

const FAB_BREAKPOINT = 1024; // show only below laptop (tablets and mobile)

export default function MobileFAB() {
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(false);
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { setEventsSidebarOpen } = useEventsSidebar();

  // Only show FAB on tablets and mobile (strictly not laptops)
  useEffect(() => {
    const checkWidth = () => {
      setVisible(window.innerWidth < FAB_BREAKPOINT);
    };
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  // Close expanded state when clicking outside
  useEffect(() => {
    if (!expanded) return;
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [expanded]);

  const handleNewsClick = () => {
    setExpanded(false);
    if (location.pathname === "/") {
      const el = document.getElementById("latest-news");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/?scrollTo=latest-news");
    }
  };

  const handleEventsClick = () => {
    setExpanded(false);
    setEventsSidebarOpen(true);
  };

  if (!visible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed bottom-6 right-6 z-[55] flex flex-col items-end gap-3 lg:hidden"
      aria-label="Quick actions"
    >
      {/* Sub-buttons (shown when expanded) */}
      <div
        className={`flex flex-col items-center gap-3 transition-all duration-300 ease-out ${
          expanded ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none translate-y-2"
        }`}
      >
        <button
          type="button"
          onClick={handleNewsClick}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-700 dark:bg-slate-600 text-white shadow-lg hover:bg-slate-600 dark:hover:bg-slate-500 active:scale-95 transition-all"
          aria-label="Go to latest news"
          title="Latest News"
        >
          <FaNewspaper className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={handleEventsClick}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-700 dark:bg-slate-600 text-white shadow-lg hover:bg-slate-600 dark:hover:bg-slate-500 active:scale-95 transition-all"
          aria-label="Open events"
          title="Events"
        >
          <FaCalendarDays className="w-5 h-5" />
        </button>
      </div>

      {/* Main FAB – thumbprint */}
      <button
        type="button"
        onClick={() => setExpanded((e) => !e)}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-slate-800 dark:bg-slate-700 text-white shadow-xl hover:bg-slate-700 dark:hover:bg-slate-600 active:scale-95 transition-all border-2 border-slate-600 dark:border-slate-500"
        aria-label={expanded ? "Close quick actions" : "Open quick actions"}
        aria-expanded={expanded}
      >
        <FaFingerprint className="w-7 h-7" />
      </button>
    </div>
  );
}

import { useEffect, useState } from "react";

export default function useRevealOnScroll(selectors = []) {
  const [isReveal, setIsReveal] = useState()
 useEffect(() => {
    const onScroll = () => {
      const target = document.getElementById("reveal-section");
      if (!target) return;

      const rect = target.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
        setIsReveal(true);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}

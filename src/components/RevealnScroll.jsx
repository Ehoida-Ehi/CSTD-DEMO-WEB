import { useEffect } from "react";

export default function useRevealOnScroll(selectors = []) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-x-0"); 
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 } // adjust visibility threshold
    );

    selectors.forEach((selector) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((el) => {
        observer.observe(el);
      });
    });

    return () => observer.disconnect();
  }, [selectors]);
}

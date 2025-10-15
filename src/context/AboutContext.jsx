import { Children, createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const AboutContext = createContext()
export function AboutProvider({children}){

    const [activeImage, setActiveImage] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
        setActiveImage((prev) => (prev === 0 ? 1 : prev === 1 ? 2 : 0));
    }, 5000); // change image every 5 seconds

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

    return(
        <AboutContext.Provider value={{activeImage, setActiveImage}}>
         {children}
        </AboutContext.Provider>
    )
}
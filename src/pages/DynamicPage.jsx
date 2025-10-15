import { useContext, useState, useEffect, useRef } from "react";
import { NavPageContext } from "../context/NavPageContext";
import striptags from "striptags"
import { PageDetailsContext } from "../context/PageDetailContext";
import { AboutContext } from "../context/AboutContext";

const DynamicPage =({page}) =>{
    const {navPages, setNavPages} = useContext(NavPageContext)
    const [open, setOpen] = useState(null);
    const [seeText, setSeeText] = useState(null)
    const { activeImage, setActiveImage } = useContext(AboutContext)
    
    if(!page){
        return <p className="my-20">Page Could Not Be Found</p> 
    }

    const { content, pageName, path } = page;
      
    const toggleText = (i)=>{
      setSeeText(prev => (prev === i ? null : i))
    }

    const StatNumber = ({ target }) => {
      const [count, setCount] = useState(0);
      const ref = useRef(null);
      const delayBetweenCycles = 10000; // 3 seconds pause before restarting

      useEffect(() => {
        let observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const startCounting = () => {
                  let current = 0;
                  const increment = target / 50;

                  const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                      current = target;
                      clearInterval(timer);

                      // ⏸️ Wait before restarting the count
                      setTimeout(() => {
                        setCount(0); // Reset
                        startCounting(); // Restart
                      }, delayBetweenCycles);
                    }
                    setCount(Math.floor(current));
                  }, 30);
                };

                startCounting();
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 1 } // fully visible before triggering
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
          if (ref.current) observer.unobserve(ref.current);
        };
      }, [target]);

      return (
        <div ref={ref} className="stat-number text-4xl font-bold text-blue-600">
          {count}
        </div>
      );
    };
    return (
      <div className="mt-16 space-y-10">
        {Object.entries(content).map(([key, section]) => {
          // only for "Our Values"
          let firstLineValues = "";
          let firstLineLeadership = "";
          let secondLineLeadership = "";
          let mainBodyLeadership = "";
          let firstLineDepartment = "";
          let firstLineInitiatives = "";
          
          if (section.title === "Our Values" && section.details) {
            const match = section.details.match(/<span[^>]*>(.*?)<\/span>/);
            firstLineValues = match ? match[1] : "";
          }
          if (section.title === "Our Leadership" && section.details) {
            const match = section.details.match(/<span[^>]*>(.*?)<\/span>/);
            const match2 = section.details.match(/<strong[^>]*>(.*?)<\/strong>/);
            const match3 = section.details.match(/<p[^>]*>[\s\S]*?<span[^>]*>\s*([^<]+?)\s*<\/span>\s*<\/p>/gi);
            firstLineLeadership = match ? match[1] : "";
            secondLineLeadership = match ? match2[1] : "";
            mainBodyLeadership = match ? match3[1] : "";
          }
          if (section.title === "Our Departments" && section.details) {
            const match = section.details.match(/<span[^>]*>(.*?)<\/span>/);
            firstLineDepartment = match ? match[1] : "";
          }
          if (section.title === "Our Key Initiatives" && section.details) {
            const match = section.details.match(/<span[^>]*>(.*?)<\/span>/);
            firstLineInitiatives = match ? match[1] : "";
          }

          const html = section.details
          const numbers = []
          const html2 =  html.replace(
            /(<li[^>]*>\s*(?:<span[^>]*><\/span>)?[^<]*?)\b(\d+)\b([^<]*<\/li>)/gi,
            (match, before, num, after) => {
              numbers.push(num.trim());
              return `${before}${after}`; // Rebuild <li> without the digits
            }
          )
          
          const title = section.title

          const valDescRegex = /<li[^>]*>[\s\S]*?<span[^>]*>\s*([^<]+?)\s*<\/span>\s*<\/li>/gi;
          const valDescriptions = [...html.matchAll(valDescRegex)].map(m => m[1].trim());        

          const initDescRegex = /<p[^>]*>[\s\S]*?<span[^>]*>\s*([^<]+?)\s*<\/span>\s*<\/p>/gi;
          const initDescriptions = [...html.matchAll(initDescRegex)].map(m => m[1].trim());        

          const valueRegex = /<li[^>]*>\s*(?:<span[^>]*><\/span>)?\s*([^:<]+):/gi;
          const valueLabels = [...html.matchAll(valueRegex)].map(m => m[1].trim());      
          const valueContent = valueLabels.map((label, i) => ({
            label,
            description: valDescriptions[i] || ""
          }));

          const aboutRegex = /<li[^>]*>\s*(?:<span[^>]*><\/span>)?\s*([^<]+)<\/li>/gi;
          const aboutLabels = [...html.matchAll(aboutRegex)].map(m => m[1].trim());      
          const aboutContent = aboutLabels.map((label, i) => ({
            label,
            // description: valDescriptions[i] || ""
          }));

          console.log("About me: ", aboutContent)

          const plainText = html.replace(/<[^>]+>/g, '').trim();
          const parts = plainText.split(/\s*;\s*/).filter(Boolean);
          const departmentContent = parts.map((label, i) => ({
            label
          }))
          
          const initiateRegex = /<p[^>]*>\s*<span[^>]*>([^<]+)<\/span>\s*<\/p>/gi;
          const initiateContent = [...html.matchAll(initiateRegex)].map(match => {
            const [label, description] = match[1].split(":").map(m => m.trim());
            return {
              label,
              description
            }
          });
                 
        return (
          <div key={key} className="mb-4">
            {/* Normal title (except Hero) */}
            {(key === "hero" || key === "banner") ? null : (
              <h2 className="text-3xl font-bold text-center text-blue-950">
                {section.title}
              </h2>
            )}

            {/* Special Hero Section */}
            {section.title === "Hero" && pageName === "Home Page" && (
              <div className="w-full h-full relative">
                {section.images.map((img, i) => (
                  <img
                    key={i}
                    src={img.url}
                    alt={`${section.title} ${i + 1}`}
                    className="shadow-md w-full h-[100vh] object-cover"
                  />
                ))}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-40">
                  <div
                    className="lg:text-xl text-lg md:text-5xl lg:px-20 font-bold"
                    dangerouslySetInnerHTML={{ __html: section.details }}
                  />
                  <p className="mx-auto lg:px-44 text-sm lg:text-lg">
                    Pioneering Nigeria's space frontier through advanced satellite
                    technology, cutting-edge research, and innovation that propels
                    our nation toward a sustainable space-based future.
                  </p>
                  <a
                    href="/about"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md shadow-md transition duration-300"
                  >
                    ABOUT US
                  </a>
                </div>
              </div>
            )}

            {/* Our Values special first line */}
            {section.title === "Our Values" && firstLineValues && (
              <>
                <div>
                  <h1
                  className="text-xl font-bold text-black text-center mt-6"
                  dangerouslySetInnerHTML={{ __html: firstLineValues }}
                  />
                </div>
                {section.images?.length > 0 && section.title !== "Hero" && (
                <div className="text-black flex mx-auto flex-col items-center">
                  {section.title === "Our Values" && (
                    <div
                      className="text-black max-w-none text-center"
                      // dangerouslySetInnerHTML={{ __html: section.details }}
                    />
                  )}
                  {section.title === "Our Values" && (
                    <div className="grid lg:grid-cols-3 gap-6 w-full px-10 lg:px-40 lg:py-10 py-5">
                      {section.images.map((img, i) => (
                        <>                        
                          <div key={i} onClick={()=>{toggleText(i)}} className={`value-card text-black rounded-lg col-span-1 py-10 px-4 items-center flex flex-col space-y-4 transition-all duration-300 `}>
                            <img
                              src={img.url}
                              alt={`${section.title} ${i + 1}`}
                              className={`w-28 ${
                                section.title === "Our Values" ? "p-1" : ""
                              }`}
                            />
                            {section.title === "Our Values" && valueContent[i] && (
                              <p className="text-lg font-semibold text-gray-700">
                                {valueContent[i].label}
                              </p>
                            )}
                            <div className={`transition-all duration-300 overflow-hidden ${seeText === i ? "max-h-20" : "max-h-0 max-w-0"}`}>
                              <div className="text-sm w-full text-gray-700">{valueContent[i].description}</div>
                            </div>
                          </div>
                        </>                      
                      ))}
                    </div>
                  )}
                </div>
              )}
              </>
            )}
            {section.title === "Our Leadership" && firstLineLeadership && (
              <>
                <h1
                  className="text-xl font-bold text-black text-center mt-6"
                  dangerouslySetInnerHTML={{ __html: firstLineLeadership }}
                />
                {section.images?.length > 0 && section.title === "Our Leadership" && (
                  <div className="lg:p-20 p-4">
                    <div className="grid grid-cols-1 md:grid-cols-5 border rounded-lg lg:p-6 p-2 shadow-lg bg-gradient-to-b lg:bg-gradient-to-r from-blue-950 via-transparent to-blue-50">
                      <div className="flex items-center justify-center col-span-2">
                        {section.images.map((img)=>(
                          <img src={img.url} className="lg:h-[300px] h-[200px] object-cover" alt="" />
                        ))}
                      </div>
                      <div className="flex flex-col justify-center lg:px-8 md:px-16 col-span-3">                
                        <div className="text-center">
                          <h1 className="text-lg font-bold text-black mb-4" dangerouslySetInnerHTML={{ __html: secondLineLeadership }} />
                          <p className="lg:text-lg text-sm text-black mb-6" dangerouslySetInnerHTML={{ __html: firstLineLeadership }} />
                        </div>
                        <p className="hidden lg:block font-semibold lg:text-lg text-sm p-2 bg-transparent" dangerouslySetInnerHTML={{ __html: mainBodyLeadership }} />
                        <div className="lg:hidden space-y-5 text-black font-semibold lg:text-lg text-sm p-2 bg-transparent">
                          <p className="" dangerouslySetInnerHTML={{ __html: mainBodyLeadership }} />
                        </div>
                      </div>

                    </div>
                  </div>                    
                )}
              </>
            )}
            {section.title === "Our Departments" && firstLineDepartment && (
              <>
              {section.title === "Our Departments" && (
                <div className="grid lg:grid-cols-3 gap-6 w-full py-10 px-10 lg:px-40">
                  {section.images.map((img, i) => (
                    <>                        
                      <div key={i} className={`value-card2 text-black rounded-lg col-span-1 items-center space-y-4 transition-all duration-300 grid grid-rows-4`}>
                        <img
                          src={img.url}
                          alt={`${section.title} ${i + 1}`}
                          className={`w-full h-full object-cover row-span-3`}
                        />
                        {section.title === "Our Departments" && departmentContent[i] && (
                          <p className="text-sm lg:text-lg p-1 font-semibold text-gray-700">
                            {departmentContent[i].label}
                          </p>
                        )}
                      </div>
                    </>
                  ))}
                </div>
              )}
              </>
            )}
            {section.title === "Our Key Initiatives" && firstLineInitiatives && (
              <>                                    
              <div className="grid lg:grid-cols-3 gap-6 w-full py-10 px-10 lg:px-40">
                {section.images.map((img, i) => (
                    <div key={i} className={`text-black rounded-lg col-span-1 items-center space-y-4 transition-all duration-300 grid grid-rows-4`}>
                      <img
                        src={img.url}
                        alt={`${section.title} ${i + 1}`}
                        className={`w-full h-full object-cover row-span-3 border-b transPic`}
                      />
                      {section.title === "Our Key Initiatives" && initiateContent[i] && (
                        <p className="text-sm lg:text-lg text-center font-semibold text-gray-700">
                          {initiateContent[i].label} 
                        </p>
                      )}
                    </div> 
                ))}
                </div>
              </>
            )}

            {/* Images */}
            {section.title === "About Us" && pageName === "About Page" && (
              
              <div className="">
                <div className="w-full h-screen relative overflow-hidden">
                  {section.images.map((img, i) => (                  
                    <img
                      src={img.url}
                      alt="Image 1"
                      className={`w-full h-full object-cover object-center absolute top-0 left-0 transition-opacity duration-1000 ${activeImage === i ? "opacity-100" : "opacity-0"} `}
                    />
                ))}
                </div>
              </div>
            )}
              <div>
                  {section.title === "History of CSTD" && (
                    <div className="grid lg:grid-cols-5 px-10 py-5 gap-5 bg-blue-50 text-black">
                      <div className="col-span-3">
                        <p dangerouslySetInnerHTML={{ __html: html2.replace(/<ol[^>]*>[\s\S]*?<\/ol>/gi, '')}} />
                        <div className="grid lg:grid-cols-2 grid-cols-1 px-10 gap-[2rem] mt-[2rem]">
                          {section.images.slice(1).map((img, i) => (
                            <div className="stat-item" key={i}>
                              <div className="flex items-center justify-center space-x-5">  
                                <div className="text-black">
                                  {aboutContent[i] && (
                                    <>
                                      <div className="flex items-center justify-center space-x-5">
                                        {numbers && numbers[i] && (
                                          <StatNumber key={i} target={parseInt(numbers[i], 10)} />
                                        )}
                                        <img src={img.url} width={40} alt="Image Not Found" />
                                      </div>
                                      <p>{aboutContent[i].label}</p>
                                    </>
                                  )}                                      
                                </div>                       
                              </div>
                            </div>
                          ))}

                        </div>
                      </div>
                      <div className="col-span-2">
                        {section.images.map((img, i) => (
                          ( i === 0 ? (
                            <div className="about-visual my-auto align-middle bg-blue-50">
                              <img src={img.url} className="flex icon lg:w-[24rem] w-[16rem]" />
                            </div>
                          ) : null)
                        ))}
                      </div>
                    </div>
                  )}
                </div>
          </div>

        );
      })}
    </div>
  );
};

export default DynamicPage
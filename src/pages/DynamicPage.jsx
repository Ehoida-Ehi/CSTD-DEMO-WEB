import { useContext } from "react";
import { NavPageContext } from "../context/NavPageContext";
import striptags from "striptags"

const DynamicPage =({page}) =>{
    const {navPages, setNavPages} = useContext(NavPageContext)
    if(!page){
        return <p className="my-20">Page Could Not Be Found</p>
    }

    const { content, pageName, path } = page;

    const stripHtml = (htmlString) => {
      const doc = new DOMParser().parseFromString(htmlString, 'text/html');
      return doc.body.textContent || "";
    };

    // const rawTitle = page?.content?.banner?.title || "";
    // const plainText = rawTitle.replace(/<[^>]+>/g, "").trim()
    // const sentences = plainText.split('.').map(s => s.trim()).filter(Boolean);
    // const customHTML = `
    //   ${sentences[0] ? `<h1 class="lg:text-3xl text-2xl md:text-5xl font-bold">${sentences[0]}.</h1>` : ""}
    //   ${sentences[1] ? `<h2 class="text-2xl font-semibold text-blue-800">${sentences[1]}.</h2>` : ""}
    //   ${sentences.slice(2).length > 0 ? `<p class="text-lg text-gray-700">${sentences.slice(2).join('. ')}.</p>` : ""}
    // `;

     
  return (
    <div className="mt-20 space-y-10">
      {/* Loop through each section dynamically */}
      {Object.entries(content, pageName, path).map(([key, section]) => (
        <div key={key} className="space-y-4">
          {section.title !== "Hero" && <h2 className="text-2xl font-bold text-center text-blue-950">{section.title}</h2>}
          {(section.title === "Hero" && pageName === "Home Page") && (
            <div className="w-full h-full relative">
              {section.images.map((img, i) => (
                <img
                  key={i}
                  src={img.url}
                  alt={`${section.title} ${i + 1}`}
                  className="shadow-md w-full h-[100vh]"
                />
              ))}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-40">
                <div className="lg:text-3xl text-2xl md:text-5xl lg:px-20 font-bold" dangerouslySetInnerHTML={{ __html: section.details }} />
                <p className="mx-auto lg:px-44 text-sm lg:text-lg">Pioneering Nigeria's space frontier through advanced satellite technology, cutting-edge research, and innovation that propels our nation toward a sustainable space-based future.</p>
                <a
                  href={"/about"}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md shadow-md transition duration-300"
                >
                  ABOUT US
                </a>
              </div>
            </div>
          )}
          {/* {Object.entries(content, pageName, path).map(([key, section]) => {
            if (section.title === "Our Values" && section.details) {
              const match = section.details.match(/<span[^>]*>(.*?)<\/span>/);
              const firstLine = match ? match[1] : "";
              return (
                <div key={key} className="text-black">
                  {firstLine && (
                    <h1
                      className="lg:text-3xl text-2xl md:text-5xl font-bold text-center"
                      dangerouslySetInnerHTML={{ __html: firstLine }}
                    />
                  )}
                </div>
              );
            }
            else{
              return null
            }
          })} */}
          {(section.images?.length > 0 && section.title !== "Hero") && (
            <div className="text-black">
              {section.title === "Our Values" ? <div className="text-black max-w-none text-center" dangerouslySetInnerHTML={{ __html: section.details }} /> : null}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-20 gap-5">
                {section.images.map((img, i) => (
                  <img
                    key={i}
                    src={img.url}
                    alt={`${section.title} ${i + 1}`}
                    className={`rounded-lg shadow-md ${section.title === "Our Values" ? 'p-10' : ''}`}
                  />
                ))}
              </div>
            </div>
          )}
          
          {/* <div className="text-black max-w-none" dangerouslySetInnerHTML={{ __html: section.details }} />   */}
         
        </div>
      ))}
    </div>
  );
};

export default DynamicPage
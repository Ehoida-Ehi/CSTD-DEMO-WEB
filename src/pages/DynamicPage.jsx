import { useContext } from "react";
import { NavPageContext } from "../context/NavPageContext";

const DynamicPage =({page}) =>{
    const {navPages, setNavPages} = useContext(NavPageContext)
    if(!page){
        return <p>Page Could Not Be Found</p>
    }

    const { content } = page;
     
  return (
    <div className="p-6 my-20 space-y-10">
      {/* Loop through each section dynamically */}
      {Object.entries(content).map(([key, section]) => (
        <div key={key} className="space-y-4">
          {/* Title */}
          <h2 className="text-2xl font-bold text-blue-950">
            {section.title}
          </h2>

          {/* HTML details */}
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: section.details }}
          />

          {/* Images if any */}
          {section.images?.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {section.images.map((img, i) => (
                <img
                  key={i}
                  src={img.url}
                  alt={`${section.title} ${i + 1}`}
                  className="rounded-lg shadow-md"
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DynamicPage
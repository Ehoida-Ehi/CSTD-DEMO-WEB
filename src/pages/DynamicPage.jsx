import { useContext } from "react";
import { NavPageContext } from "../context/NavPageContext";

const DynamicPage =() =>{
    const {pages, setPages} = useContext(NavPageContext)
     return (
        <div>
            {pages ? (
                pages.map((page)=>{
                    <div className="p-4" key={page._id}>
                        <h1 className="text-2xl font-bold">{page.title}</h1>
                        <div dangerouslySetInnerHTML={{ __html: page.content }} />
                    </div>
                })
            ) : <p>No Pages Found</p>}
        </div>
    
  );
}

export default DynamicPage
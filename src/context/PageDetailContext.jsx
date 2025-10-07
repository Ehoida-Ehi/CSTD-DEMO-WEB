import { createContext, useContext, useEffect, useState } from "react";
import { NavPageContext} from "./NavPageContext";
import axios from "axios";

export const PageDetailsContext = createContext()
export function PageDetailsProvider({children}) {
    const [pageDetails, setPageDetails] = useState([])
    const {BASEURL} = useContext(NavPageContext)
    useEffect(()=>{
        const getPageDetails = async(e)=>{
            try {
                console.log(BASEURL)
                const resp = await axios.get(`${BASEURL}/pages/home`)
                setPageDetails(resp)
                console.log("PageDetails: ", resp)
            } catch (error) {
                console.error("Failed to fetch page details: ", error)
            }
        }
        getPageDetails()
    }, [])    
    return(
        <PageDetailsContext.Provider value={{pageDetails, setPageDetails}}>
            {children}
        </PageDetailsContext.Provider>
    )
}
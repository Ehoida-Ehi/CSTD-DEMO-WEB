import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const NavPageContext = createContext()

const BASEURL = "https://cstd-backend-server.onrender.com/api/CSTDsite"
export const NavPageProvider = ({children})=>{
    const [navPages, setNavPages] = useState(null)
    const [pages, setPages] = useState(null)
    useEffect(()=>{
    const getNavPages = async(e)=>{
      try {
        const resp = await axios.get(`${BASEURL}/pages/links`)
        setNavPages(resp.data)
        console.log(resp.data)
      } catch (error) {
        console.error("Failed to fetch: ", error)
      }
    }
    getNavPages()
  },[])
  return(
    <NavPageContext.Provider value={{navPages, setNavPages, pages, setPages}}>
        {children}
    </NavPageContext.Provider>
    )
}
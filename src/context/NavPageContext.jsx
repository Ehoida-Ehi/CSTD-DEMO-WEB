import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const NavPageContext = createContext()

const BASEURL = "https://cstd-backend-server.onrender.com/api/CSTDsite"
export function NavPageProvider({children}){
    const [navPages, setNavPages] = useState([])
    // const [pages, setPages] = useState([])

    useEffect(()=>{
    const getNavPages = async(e)=>{
      try {
        const resp = await axios.get(`${BASEURL}/pages/links`)
        setNavPages(resp.data.data)
        console.log(resp.data.data)
      } catch (error) {
        console.error("Failed to fetch: ", error)
      }
    }
    getNavPages()
  },[])
  return(
    <NavPageContext.Provider value={{navPages, setNavPages}}>
        {children}
    </NavPageContext.Provider>
    )
}
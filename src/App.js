import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Sat1 from './pages/Sat1';
import Sat2 from './pages/Sat2';
import SatX from './pages/SatX';
import Media from './pages/Media';
import RnI from './pages/RnI';

import { NavPageContext, NavPageProvider } from './context/NavPageContext';
import { useContext } from 'react';
import DynamicPage from './pages/DynamicPage';
const Content = () => {
  const {navPages, setNavPages, pages, setPages} = useContext(NavPageContext)  
  
  return (
    <>
      <Navbar navPages={navPages}/>
      <Routes>
        <Route path="/" element={<Home />} />
        {navPages ? (
          navPages.map((navPage)=>{
            return(
            <Route key={navPage._id} path={`${navPage.path}`} element={<DynamicPage page={navPage} />}  />  
            )
            
          })
          ) : (<p>Unable to Load Pages</p>)
        }
      </Routes>
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <NavPageProvider>
        <Content />
      </NavPageProvider>
    </Router>
  );
};

export default App;











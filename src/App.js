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

import { NavPageContext } from './context/NavPageContext';
import { useContext } from 'react';
import DynamicPage from './pages/DynamicPage';
const Content = () => {
  const {navPages, setNavPages, pages, setPages} = useContext(NavPageContext)  
  
  return (
    <>

      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Media" element={<Media />} />
        <Route path="/Sat1" element={<Sat1 />} />
        <Route path="/Sat2" element={<Sat2 />} />
        <Route path="/SatX" element={<SatX />} />
        <Route path="/RnI" element={<RnI />} /> */}
        {navPages ? (
          navPages.map((navPage)=>{
            <Route key={navPage._id} path={`/${navPage.pageId}`} element={<DynamicPage />}  />
          })
        ) : (<p>Unable to Load Pages</p>)}

      </Routes>
      <Footer />








    </>
  );
};

const App = () => {
  return (
    <Router>
      <Content />
    </Router>
  );
};

export default App;











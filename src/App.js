import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SatelliteMission from './pages/SatelliteMission';
import Sat1 from './pages/Sat1';
import Sat2 from './pages/Sat2';
import SatX from './pages/SatX';
import Media from './pages/Media';
import RnI from './pages/RnI';
import Publications from './pages/Publications';

import { NavPageContext, NavPageProvider } from './context/NavPageContext';
import { ThemeProvider } from './context/ThemeContext';
import { EventsSidebarProvider } from './context/EventsSidebarContext';
import { useContext } from 'react';
import DynamicPage from './pages/DynamicPage';
import { AboutProvider } from './context/AboutContext';
import MobileFAB from './components/MobileFAB';
const Content = () => {
  const { navPages } = useContext(NavPageContext);

  // Ensure "Research and Innovation" uses the dedicated RnI page component,
  // similar to how Home is wired as a static route.
  const dynamicPages =
    navPages?.filter(
      (navPage) => navPage.path?.toLowerCase() !== "/rni"
    ) || [];

  return (
    <>
      <Navbar navPages={navPages} />
      <MobileFAB />
      <Routes>
        {/* Routes to backend paths */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rni" element={<RnI />} />
        <Route path="/RnI" element={<RnI />} />
        <Route path="/about" element={<About />} />
        <Route path="/researchandinnovation" element={<RnI />} />
        <Route path="/satellitemissions" element={<SatelliteMission />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/sat1" element={<Sat1 />} />
        <Route path="/sat2" element={<Sat2 />} />
        <Route path="/satx" element={<SatX />} />
        <Route path="/media" element={<Media />} />
        
        {/* CMS-driven dynamic pages */}
        {/* Created to know it can be done, but not utilized rn */}
        {/* Used for test DynamicPage in the navbar as Home Page */}
        {dynamicPages.length > 0 ? (
          dynamicPages.map((navPage) => (
            <Route
              key={navPage._id}
              path={navPage.path}
              element={<DynamicPage page={navPage} />}
            />
          ))

        ) : null}
      </Routes>
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <ThemeProvider>
        <EventsSidebarProvider>
          <NavPageProvider>
            <AboutProvider>
              <Content />
            </AboutProvider>
          </NavPageProvider>
        </EventsSidebarProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;











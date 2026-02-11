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
import { AboutProvider } from './context/AboutContext';
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
      <Routes>
        {/* Static pages */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rni" element={<RnI />} />
        <Route path="/RnI" element={<RnI />} />
        <Route path="/about" element={<About />} />
        <Route path="/researchandinnovation" element={<RnI />} />

        {/* CMS-driven dynamic pages */}
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
      <NavPageProvider>
        <AboutProvider>
          <Content />
        </AboutProvider>
      </NavPageProvider>
    </Router>
  );
};

export default App;











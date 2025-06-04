import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Media from './pages/Media';
import RnI from './pages/RnI';


const Content = () => {
  const location = useLocation(); // Get the current location


  return (
    <>

      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
        <Route path="/media" element={<Media />} />
        <Route path="/rni" element={<RnI />} />


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











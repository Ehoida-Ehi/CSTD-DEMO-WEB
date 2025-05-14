import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';


const Content = () => {
  const location = useLocation(); // Get the current location


  return (
    <>

      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />


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











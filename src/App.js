import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
<<<<<<<<< Temporary merge branch 1
import Contact from './pages/Contact';
=========
import Media from './pages/Media';
>>>>>>>>> Temporary merge branch 2


const Content = () => {
  const location = useLocation(); // Get the current location


  return (
    <>

      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
<<<<<<<<< Temporary merge branch 1
        <Route path="/Contact" element={<Contact />} />
=========
        <Route path="/media" element={<Media />} />
>>>>>>>>> Temporary merge branch 2


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











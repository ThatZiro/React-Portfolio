import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from './pages/Projects/Projects.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import './App.css';
import About from './pages/About/About.jsx';
import Home from './pages/Home/Home.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Footer from './pages/Footer/footer.jsx';

function App() {
  const [isNavFixed, setIsNavFixed] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 1285;
      
      setIsNavFixed(scrollPosition > threshold);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Navigation lock={false}/>
                <Navigation isNavFixed={isNavFixed} lock={true} />
                <About/>
                <Projects/>
                <Contact/>
                <Footer/>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

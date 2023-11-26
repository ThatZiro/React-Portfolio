import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar/sidebar.jsx';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Blog from './pages/Blog/Blog.jsx';
import Contact from './pages/Contact/Contact.jsx';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Projects from './pages/Projects/Projects.jsx';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <TransitionGroup>
          <Routes>
            <Route
              path="/"
              element={
                <CSSTransition key="home" classNames="fade" timeout={5000}>
                  <Home />
                </CSSTransition>
              }
            />
            <Route
              path="/home"
              element={
                <CSSTransition key="home" classNames="fade" timeout={5000}>
                  <Home />
                </CSSTransition>
              }
            />
            <Route
              path="/projects"
              element={
                <CSSTransition key="projects" classNames="fade" timeout={5000}>
                  <Projects />
                </CSSTransition>
              }
            />
            <Route
              path="/about"
              element={
                <CSSTransition key="about" classNames="fade" timeout={5000}>
                  <About />
                </CSSTransition>
              }
            />
            <Route
              path="/blog"
              element={
                <CSSTransition key="blog" classNames="fade" timeout={5000}>
                  <Blog />
                </CSSTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <CSSTransition key="contact" classNames="fade" timeout={5000}>
                  <Contact />
                </CSSTransition>
              }
            />
          </Routes>
        </TransitionGroup>
      </BrowserRouter>
    </>
  );
}

export default App;


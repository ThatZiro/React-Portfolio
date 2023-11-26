import './sidebar.css'
import profilePicture from "../../assets/ProfilePicture.png"
import TechScroll from './splide.jsx';
import {Link} from 'react-router-dom';

const linkStyle = {
  textDecoration: 'none',
  color: 'inherit',
};
function Sidebar() {
  
  return (
    <>
      <div className="sidebar">
        <div className="info">
          <img src={profilePicture} alt="brandon barnes"/>
          <h1>Brandon Barnes</h1>
          <h2>Professional Developer</h2>
        </div>
          <nav>
            <Link to="/home" style={linkStyle}>Home</Link>
            <Link to="/projects" style={linkStyle}>Projects</Link>
            <Link to="/about" style={linkStyle}>About</Link>
            <Link to="/blog" style={linkStyle}>Blog</Link>
            <Link to="/contact" style={linkStyle}>Contact</Link>
          </nav>
        <div className="tech-scroll">
            <TechScroll/>
        </div>
      </div>
    </>
  )
}

export default Sidebar

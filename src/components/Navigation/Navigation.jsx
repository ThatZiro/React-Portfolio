// Navigation.js
import { Link as ScrollLink } from 'react-scroll';
import './Navigation.css';

function Navigation({ isNavFixed, lock }) {
  return (
    <nav className={lock ? isNavFixed ? 'fixed' : 'hidden' : ''}>
      <ScrollLink to="Home" spy={true} smooth={true} offset={-70} duration={500} className="link">
        Home
      </ScrollLink>
      <ScrollLink to="About" spy={true} smooth={true} offset={0} duration={500} className="link">
        About
      </ScrollLink>
      <ScrollLink to="Projects" spy={true} smooth={true} offset={0} duration={500} className="link">
        Projects
      </ScrollLink>
      <ScrollLink to="Contact" spy={true} smooth={true} offset={0} duration={500} className="link">
        Contact
      </ScrollLink>
      <ScrollLink to="Footer" spy={true} smooth={true} offset={0} duration={500} className="link">
        Blog
      </ScrollLink>
    </nav>
  );
}

export default Navigation;

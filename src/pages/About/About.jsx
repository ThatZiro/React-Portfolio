import './About.css';
import Skill from './skill.jsx';
import profilePicture from "../../assets/ProfilePicture.png"
import Hexagon from './Hexagon.jsx';

function About() {
  return (
    <>
      <div className="about-me">
        <h1>ABOUT</h1>
        <div className="about-cards">
          <div className="about-card">
            <Hexagon label="Frontend" percentage="70"/>
            <p>Creating captivating user experiences with HTML, CSS, and LESS/SASS for efficiency and style.</p>
          </div>
          <div className="about-card">
            <Hexagon label="Data" percentage="90"/>
            <p>Unleashing data's power with MySQL, MongoDB, and Node.js for dynamic and responsive experiences.</p>
          </div>
          <div className="about-card">
            <Hexagon label="Backend" percentage="80"/>
            <p>Architecting backend solutions with PHP and Node.js, ensuring seamless application functionality.</p>
          </div>
          <div className="about-card">
            <Hexagon label="Server" percentage="70"/>
            <p>Masterfully orchestrating APACHE/Linux environments for robust and finely-tuned foundations.</p>
          </div>
        </div>
        <div className="section">
          <div className="skills">
            <Skill label="Javascript" percentage="90"/>
            <Skill label="HTML/CSS" percentage="70"/>
            <Skill label="React" percentage="85"/>
            <Skill label="Node.js" percentage="85"/>
            <Skill label="MongoDB" percentage="90"/>
            <Skill label="Express.js" percentage="90"/>
            <Skill label="REST APIs" percentage="75"/>
            <Skill label="Database" percentage="80"/>
          </div>
          <div className="about">
            <img src={profilePicture} alt="brandon barnes"/>
            <div className="about-info">
              <p>Portland, OR - Remote Work A 5-year self-taught developer with a Certification from UCF College</p>
              <p>My long-term goal is to create innovative, user-centric software solutions that leave a lasting mark.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
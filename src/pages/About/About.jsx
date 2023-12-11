import './About.css';
import Hexagon from './Hexagon.jsx';
import Skill from './skill.jsx';
import ProfilePic from '../../../src/assets/ProfilePicture.png'
import {Link as ScrollLink} from 'react-scroll';
import React from 'react';
import Resume from '../../../src/assets/BrandonBanresResume.docx.pdf'
function About() {
  return (
    <>
      <div id="About" className="about-me">
        <h1>About Me</h1>
        <div className="section-1">
          <div className="about-header">
            <img src={ProfilePic} alt="picture of Brandom Barnes" />
            <div>
              <h1>I'm Brandon</h1>
              <p>Passionate Full Stack Web Developer | Agile Enthusiast | MERN Stack Advocate</p>
              <p>Self-taught for five years, bootcamp graduate, and quick learner. Expert in Figma, Jira, GitHub, and JetBrains IDE. Specialized in the MERN stack. Love tackling complex problems with a strong commitment to efficiency and adaptability in this ever-evolving tech landscape.</p>
            
            </div>
          </div>
          <div className="about-content">
            <div className="certifications">
              <h1>Certifications & Education</h1>
              <p>UCF Bootcamp <span>2023</span></p>
              <p>MongoDB University <span>2023</span></p>
            </div>
            <div className="resume">
              <a href={Resume} download="BrandonBarnesResume.pdf">
                <button>Download Resume</button>
              </a>
              {/*<button>Visit Blog</button>*/}
              <ScrollLink to={"Projects"} spy={true} smooth={true} offset={0} duration={500}>
                <button className="CTA">View My Work</button>
              </ScrollLink>
            </div>
          </div>
        </div>
        <div className="about-section">
          <div className="cards">
            <Hexagon label={"Technical Design"} desc={"Crafting seamless user interfaces and experiences that merge creative design with technical feasibility."}/>
            <Hexagon label={"Data Analyst"} desc={"Extracting actionable insights from complex datasets, guiding data-driven decision-making for improved business outcomes."}/>
            <Hexagon label={"Backend Specialist"} desc={" Developing and maintaining efficient server-side logic, ensuring smooth integration with frontend applications."}/>
            <Hexagon label={"Server Administrator"} desc={"Managing server infrastructure for optimal performance, security, and reliability, ensuring uninterrupted digital service operation."}/>
          </div>
          <div className="skills-section">
            <h2>Skills</h2>
            <Skill label={"Javascript"} percentage={"90"}/>
            <Skill label={"MongoDB"} percentage={"90"}/>
            <Skill label={"React"} percentage={"80"}/>
            <Skill label={"Node.js"} percentage={"80"}/>
            <Skill label={"C#"} percentage={"70"}/>
            <Skill label={"Express.js"} percentage={"70"}/>
            <Skill label={"PHP"} percentage={"60"}/>
            <Skill label={"Java"} percentage={"60"}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
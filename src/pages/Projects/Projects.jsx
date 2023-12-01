import './Projects.css'
import Button from '../../components/Button.jsx';
import Project from './Project.jsx';
import {useState} from 'react';
function Projects() {
  const [selectorPosition, setSelectorPosition] = useState({ left: 0, right: '75%' });
  const [selectedSection, setSelectedSection] = useState('All');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  
  const openModal = (project) => {
    setSelectedProject(project);
    setModalVisible(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setModalVisible(false);
    document.body.style.overflow = 'auto';
  };
  
  const moveSelector = (element) => {
    const menuItems = element.parentElement.children;
    for (const item of menuItems) {
      item.classList.remove("selected");
    }
    element.className = "selected";
    const rect = element.getBoundingClientRect();
    const offsetLeft = rect.left - element.parentElement.getBoundingClientRect().left;
    const offsetRight = element.parentElement.getBoundingClientRect().right - rect.right;
    
    setSelectorPosition({
      left: offsetLeft + 'px',
      right: offsetRight + 'px',
    });
    
    // Update the selected section
    setSelectedSection(element.id);
    console.log(element.id);
  };
  
  const projects = [
    { title: "ListyFlix", tech: "Javascript / Api", src: "/Listy-Flix.png", section: "JS", to:"/ListyFlix", intro:"Movie Database", stack:"HTML | CSS | JavaScript | Tailwind CSS | Jquery | RESTFUL Apis", desc:"This project showcases my expertise in web development using HTML, CSS, JavaScript, jQuery, and Tailwind CSS. It fetches data from external APIs, including OMDB for movie details and Stream Availability for streaming options. The clean, responsive design ensures an optimal user experience, highlighting my ability to seamlessly integrate multiple technologies for dynamic and informative web applications."},
    { title: "Tasty Tableau", tech: "Node.js / MySQL", src: "/Tasty-Tableau.png", section: "JS" , to:"/ListyFlix"},
    { title: "Hey Hedgie", tech: "MERN Stack", src: "/HeyHedgie.png", section: "React, Mongo" , to:"/ListyFlix"},
    { title:  "ComingSoon", tech: "Javascript / Api", src: "/Sub-Project-1.png", section: "Mongo" , to:"/ListyFlix"},
    { title: "ComingSoon1", tech: "Javascript / Api", src: "/Sub-Project-2.png", section: "" , to:"/ListyFlix"},
    { title: "ComingSoon2", tech: "Javascript / Api", src: "/Sub-Project-3.png", section: "React" , to:"/ListyFlix"},
    { title: "ComingSoon3", tech: "Javascript / Api", src: "/Sub-Project-4.png", section: "" , to:"/ListyFlix"},
  ];
  
  const filteredProjects = projects.map(project => {
    const sections = project.section.split(',').map(s => s.trim());
    const isInSelectedSection = selectedSection === 'All' || sections.includes(selectedSection);
    
    // Add a class based on the condition
    const fadeClass = isInSelectedSection ? 'fade-in' : 'fade-out';
    
    // Update the project object with the fadeClass
    return {
      ...project,
      fadeClass,
    };
  });

  return (
    <>
      <div id="Projects" className="projects">
        <h1>Projects</h1>
        <div className="menu">
          <div className="selector" style={selectorPosition}></div>
          <h3 id="All" onClick={() => moveSelector(document.getElementById('All'))}>All</h3>
          <h3 id="JS" onClick={() => moveSelector(document.getElementById('JS'))}>Javascript</h3>
          <h3 id="React" onClick={() => moveSelector(document.getElementById('React'))}>React</h3>
          <h3 id="Mongo" onClick={() => moveSelector(document.getElementById('Mongo'))}>MongoDB</h3>
        </div>
        <div className="projects-list">
          {filteredProjects.map((project, index) => {
            console.log(project); // This line should be inside curly braces
            return (
              <Project
                fade={project.fadeClass}
                title={project.title}
                tech={project.tech}
                src={project.src}
                onClick={() => openModal(project)}
              />
            );
          })}


          
          {/* Modal */}
          {modalVisible && (
            <div className="modal" >
              <div className="project-modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal-title">
                  <h1>{selectedProject.title}</h1>
                </div>
                <div className="modal-img" style={{ backgroundImage: `url(${selectedProject.src})` }}>
                  <svg className="div" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100">
                    <g fill="rgb(6, 9, 24)">
                      <path opacity=".5" d="M0 86.9V74.7l220.7-19.3L0 29.2V17.9l250 38-250 31z"/>
                      <path opacity=".5" d="M0 74.7v-8.8l145.2-12.7L0 36v-6.8l220.7 26.2L0 74.7z"/>
                      <path opacity=".5" d="M0 74.7v-8.8l145.2-12.7L0 36v-6.8l220.7 26.2L0 74.7z"/>
                      <path opacity=".5" d="M0 65.9V36l145.2 17.2L0 65.9z"/>
                      <path opacity=".5" d="M0 65.9V36l145.2 17.2L0 65.9z"/>
                      <path opacity=".75" d="M0 65.9V36l145.2 17.2L0 65.9z"/>
                      <path opacity=".5" d="M750 55.9l250-38v12.3L779.3 56.4 1000 75.7v11.2l-250-31zM500 18L250 56l250 31 250-31zM279.3 56.3L500 30.2l220.7 26.2L500 75.7z"/>
                      <path d="M500 17.9l-250 38-250-38v-18h1000v18l-250 38-250-38z"/>
                      <path d="M500 30.2L279.3 56.4 500 75.7l220.7-19.3zM335.4 55.5L500 36l164.6 19.5L500 70z" opacity=".5"/>
                      <path d="M500 30.2L279.3 56.4 500 75.7l220.7-19.3zM335.4 55.5L500 36l164.6 19.5L500 70z" opacity=".5"/>
                      <path opacity=".5" d="M664.6 55.5L500 69.9 335.4 55.5 500 36l164.6 19.5z"/>
                      <path opacity=".5" d="M664.6 55.5L500 69.9 335.4 55.5 500 36l164.6 19.5z"/>
                      <path opacity=".75" d="M664.6 55.5L500 69.9 335.4 55.5 500 36l164.6 19.5z"/>
                      <path opacity=".5" d="M1000 30.2V36L854.9 53.2 1000 65.9v9.8L779.3 56.4 1000 30.2z"/>
                      <path opacity=".5" d="M1000 30.2V36L854.9 53.2 1000 65.9v9.8L779.3 56.4 1000 30.2z"/>
                      <path opacity=".5" d="M1000 36v29.9L854.9 53.2 1000 36z"/>
                      <path opacity=".5" d="M1000 36v29.9L854.9 53.2 1000 36z"/>
                      <path opacity=".75" d="M1000 36v29.9L854.9 53.2 1000 36z"/>
                    </g>
                  </svg>
                </div>
                <div className="modal-content">
                  <h2>{selectedProject.tech}</h2>
                  <p>{selectedProject.desc}</p>
                  <div className="modal-nav">
                    <Button to={selectedProject.to} id={`${selectedProject.title}Site`} text="Visit Site" theme="dark" />
                    <svg className="modal-close" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none" onClick={closeModal}>
                      <path className="modal-close-color" d="M6.25 0C2.80273 0 0 3.20313 0 7.14286V42.8571C0 46.7969 2.80273 50 6.25 50H43.75C47.1973 50 50 46.7969 50 42.8571V7.14286C50 3.20313 47.1973 0 43.75 0H6.25ZM17.0898 15.9598C18.0078 14.9107 19.4922 14.9107 20.4004 15.9598L24.9902 21.2054L29.5801 15.9598C30.498 14.9107 31.9824 14.9107 32.8906 15.9598C33.7988 17.0089 33.8086 18.7054 32.8906 19.7433L28.3008 24.9888L32.8906 30.2344C33.8086 31.2835 33.8086 32.9799 32.8906 34.0179C31.9727 35.0558 30.4883 35.067 29.5801 34.0179L24.9902 28.7723L20.4004 34.0179C19.4824 35.067 17.998 35.067 17.0898 34.0179C16.1816 32.9687 16.1719 31.2723 17.0898 30.2344L21.6797 24.9888L17.0898 19.7433C16.1719 18.6942 16.1719 16.9978 17.0898 15.9598Z" fill="black" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
        
export default Projects;
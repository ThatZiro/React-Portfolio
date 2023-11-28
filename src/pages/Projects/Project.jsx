import './Projects.css'
function Project({ title, tech, src, onClick}) {
  return (
    <>
      <div className={`project ${title}`} onClick={onClick}>
        <div className="hover">
          <div>
            <h2>{title}</h2>
            <h3>{tech}</h3>
          </div>
          <h4>Click For More</h4>
        
        </div>
        <div className="project-img" style={{ backgroundImage: `url(${src})` }}></div>

      </div>
    </>
  );
}


export default Project;
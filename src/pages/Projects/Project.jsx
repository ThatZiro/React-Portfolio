import './Projects.css'
import {Transition} from 'react-transition-group';
import {useState} from 'react';


const duration = 600;
function Project({ title, tech, src, onClick, fadeState }) {
  console.log({ title, tech, src, onClick, fadeState })
  const [hide, setHide] = useState(false);
  
  const handleTransitionEnd = () => {
    setHide(!fadeState);
  };
  
  const fadeOut = {
    transition: 'all 600ms ease 0ms, opacity 600ms linear',
    transform: 'scale(0.01) transformX(300%)',
    opacity: 0,
  };
  
  
  
  const fadeIn = {
    transition: 'all 600ms ease 0ms',
    transform: 'scale(1)',
    opacity: 1,
  };
  
  return (
    <Transition
      in={fadeState}
      timeout={duration}
      onExit={() => handleTransitionEnd()}
    >
      {(state) => (
        <div
          className={`project ${title}`}
          onClick={onClick}
          onTransitionEnd={() => handleTransitionEnd}
          style={{
            ...(state === 'exited' && hide ? { display: 'none' } : { display: 'inline-block' }),
            ...(fadeState ? fadeIn : fadeOut),
          }}
        >
          <div className="hover">
            <div>
              <h2>{title}</h2>
              <h3>{tech}</h3>
            </div>
            <h4>Click For More</h4>
          </div>
          <div className="project-img" style={{ backgroundImage: `url(${src})` }}></div>
        </div>
      )}
    </Transition>
  );
}


export default Project;
import './Home.css';
import Background from './background.jsx';
import BubbleText from './Bubbletext.jsx';
import Button from '../../components/Button.jsx';

function Home() {
  return (
    <>
      <Background/>
      <div className="name" id="Home">
        <div className="text">
          <h1><BubbleText text="Hello, I'm Brandon Barnes"/></h1>
          <h1><BubbleText text="Full-Stack Web Developer"/></h1>
          <Button to="projects" id="view-work" text="View My Work" />
        </div>
      </div>
    </>
  );
}

export default Home;
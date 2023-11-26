import './Home.css';
import Background from './background.jsx';
import BubbleText from './Bubbletext.jsx';

function Home() {
  return (
    <>
      <Background/>
      <div className="name">
        <div className="text">
          <h1><BubbleText text="Hello, I'm Brandon Barnes"/></h1>
          <h1><BubbleText text="full-stack web developer"/></h1>
          <div className="view-work">
            <button>
            <span>View My Work ➔</span></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
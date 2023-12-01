import "./ContactButton.css"
import Plane from './Plane.jsx';

function ContactButton() {

    return (
      <button>
          <div className="svg-wrapper-1">
              <Plane></Plane>
          </div>
          <span>Send</span>
      </button>
    
    );
}

export default ContactButton;
import "./ContactButton.css"
import Plane from './Plane.jsx';

function ContactButton() {

    return (
      <button className="contact-button">
          <div className="svg-wrapper-1">
              <Plane></Plane>
          </div>
          <span>Send</span>
      </button>
    
    );
}

export default ContactButton;
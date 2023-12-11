import React, { useState } from 'react';
import './Contact.css';
import ContactButton from '../../components/ContactButton/ContactButton.jsx';
import Plane from '../../components/Plane/Plane.jsx';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [submitted, setSubmitted] = useState(false)
  const [messageCount, setMessageCount] = useState(0);
  
  const handleChange = (e) => {
    setFormData((prevFormData) => {
      const updatedFormData = {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
      setMessageCount(updatedFormData.message.length);
      return updatedFormData;
    });
  };
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    setSubmitted(true);
    //Logic Here
    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json("Message Sent");
      console.log(result);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };
  
  return (
    <div id="Contact" className="contact">
      <form onSubmit={handleSubmit}>
        {!submitted ? (
          <>
            <h1>CONTACT</h1>
            <h2>Have a question or want to work together?</h2>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input"
                placeholder="Enter your name"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input"
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="input"
                placeholder="Enter your phone number"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                maxLength="400"
                rows={4}
                className="input input-message"
                placeholder="Type your message (max 400 characters)"
                required
              />
              <p className="char-left">({400 - messageCount})</p>
            </div>
            
            <ContactButton/>
          </>
        ) :
          <div className="thankyou">
            <h2>Thank you for submitting a contact request!</h2>
            <Plane fly={true} scale={3} offsetY="0px"/>
          </div>
          
        }
      </form>
    </div>
  );
}
export default Contact;

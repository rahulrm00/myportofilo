import React, { useState } from "react";
import "./Contact.css"; 
import logo from "/Frameworks/parthiban/src/logo.jpg";
import HomePage from './HomePage';

function ContactPage() {
  const [ho,setho]=useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (email && message.trim() !== "") {
      setFeedbackMessage("Thanks for the response!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setFeedbackMessage("Enter your text");
    }
  };

  return (
    <div>
      {ho ? (<HomePage/>) : (
        <div>
      <div className="logo">
         
          <img src={logo} alt="parthi" onClick={()=>setho(true)}/>
        
      </div>
      <div className="contact-container">
        <h2>Contact Me</h2>
        <form id="contactForm" onSubmit={handleSubmit}>
          <div className="nam">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="em">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="msg">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
          <p id="feedmsg" className="feed-msg">
            {feedbackMessage}
          </p>
        </form>
      </div>
    </div>
   
  )};
   </div>
  );
}

export default ContactPage;

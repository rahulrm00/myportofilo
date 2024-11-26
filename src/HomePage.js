import React, { useState } from 'react';
import './App.css';
import ProjectPage from './ProjectPage';
import ContactPage from './ContactPage';
import logo from "/Frameworks/parthiban/src/logo.jpg";
import wp from "/Frameworks/parthiban/src/whatsapp.jpg";
import In from "/Frameworks/parthiban/src/Instagram (1).png";
import lin from "/Frameworks/parthiban/src/Linkedin.png";


const HomePage = () => {
  const [pro,setpro]=useState(false);
  const [con,setcon]=useState(false);
const send=()=>{

}
  return (
    <div>
      {pro ? (<ProjectPage/>) : con ? <ContactPage/> :(
        <div className="container">
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="parthi" />
        </div>
        <div className="nav-links">
        <button className="navli"onClick={()=>setpro(true)}>Project</button>
        <button  className="navli" onClick={()=>setcon(true)}>Contact</button>
        </div>
        <div className="nav-search">
          <input type="search" placeholder="Search" className="nav-search1" />
        </div>
      </nav>

      <div className="containers">
        <div className="mine">
          <div className="intro">
            <h1>I'm PARTHIBAN</h1>
            <strong>Web Developer & Data Analyst</strong>
            <a href="https://github.com/Parthiban39/resume.git" target="_blank" className="download-button">Download CV</a>
          </div>
          <div className="line"></div>
          <div className="follow-links">
            <a href="https://wa.me/9087589292" target="_blank">
              <img src={wp} alt="whatsapp" />
            </a>
            <a href="https://www.instagram.com/par._.thi?igsh=MWpwcmZ3enl5djNm" target="_blank">
              <img src={In} alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/in/parthiban-m-146891250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
              <img src={lin} alt="Linkedin" />
            </a>
          </div>
        </div>

        <div className="introduction">
          <h2>About</h2>
          <p>
            To secure a challenging software engineering position that utilizes my technical skills and knowledge
            while offering opportunities for professional growth and development in a collaborative team environment.
            I'm <span style={{ fontWeight: 'bold' }}>Creative, Determinant, communicator and adaptable to every environment.</span>
          </p>
        </div>

        <div className="skills">
          <h3>My Skills</h3>
          <div className="skills-item">
            {['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'C++', 'MySQL', 'AWS', 'Figma'].map((skill, index) => (
              <div className="item" key={index}>
                <img src={`https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg`} alt={skill} />
                <strong>{skill}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="blog">
          <h2>Portfolio</h2>
          <div className="blog-item">
            {['figma1', 'figma2', 'figma3', 'figma4', 'figma5'].map((figma, index) => (
              <div className="bitem" key={index}>
                <a href={`https://www.figma.com/design/${figma}`} target="_blank">{figma}</a>
              </div>
            ))}
          </div>
          <div className="view">
            <button className="view-more">View More</button>
          </div>
        </div>

        <div className="project">
          <h2>My Projects</h2>
          <div className="project-list">
            {[
              { title: 'IRIS DETECTION', description: ['The Iris Detector project aims to develop a Python application for detecting and localizing irises within facial images.', 'Skills utilized: Python, OpenCV, dlib, NumPy.'] },
              { title: 'TODO LIST', description: ['Designed and developed a personal portfolio website using HTML and CSS to showcase my work and skills.', 'Developed a sleek and modern portfolio site with HTML, CSS and JAVASCRIPT to exhibit my work.'] },
              { title: 'NOTEPAD USING C++', description: ['The aim is to provide a basic platform for users to create and edit plain text files.'] },
              { title: 'HEALTH CARE CHATBOT', description: ['The aim of the chatbot is to provide information, assist, and even diagnosis the disease and provide advice and treatment for the user.', 'Skills used: RASA, NLP, MACHINE LEARNING, Support Vector Machine, LSTM.'] },
              { title: 'BASIC CALCULATOR', description: ['The basic and simple design with well user interface to interact and to work with.', 'Tools used: HTML, CSS, JAVASCRIPT.'] }
            ].map((project, index) => (
              <div className="plist" key={index}>
                <h3>{project.title}</h3>
                <p>
                  {project.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </p>
                <a href="#" target="_blank">View demo</a>
              </div>
            ))}
          </div>
        </div>

        <div className="fbfromuser">
          <h2>Testimonial</h2>
          <p>The design <span className="spans">Quality, Flexibility, Documentation and Support</span> are all absolutely <span className="spans">Excellent</span>.</p>
        </div>

        <div className="contact">
          <h2>Contact Me</h2>
          <form id="contactform">
            <div className="nam">
              <label className="label" htmlFor="email">Email:</label>
              <input className="input" type="email" placeholder="Email" required />
            </div>
            <div className="msg">
              <label htmlFor="feedtxt">Message:</label>
              <textarea placeholder="enter text" id="feedtxt" required></textarea>
            </div>
            <button type="button" onClick={send}>Send</button>
            <p id="feedmsg" className="feed-msg"></p>
          </form>
        </div>

        <footer>
          <p>&COPY; Parthi2024</p>
        </footer>
      </div>
  
    </div>
      )
  };
  </div>
  );
};

export default HomePage;

import React, { useState } from "react";
import "./Project.css";
import HomePage from './HomePage';
import logo from "/Frameworks/parthiban/src/logo.jpg";

function ProjectPage() {
  const [ho,setho]=useState(false);
  return (
    <div>
      {ho ? (<HomePage/>) : (
        <div>
      <div className="logop">
          <img src={logo} alt="parthi" onClick={()=>setho(true)} />
        <h2 className="head">My Projects</h2>
      </div>

      <div className="project">
        <div className="project-list">
          <div className="plist">
            <h3>IRIS DETECTION</h3>
            <p>
              <li>
                The Iris Detector project aims to develop a Python application
                for detecting and localizing irises within facial images.
              </li>
              <li>
                It uses features such as iris segmentation and visualization for
                practical use cases like biometric authentication or gaze
                tracking.
              </li>
              <li>Skills utilized: Python, OpenCV, dlib, NumPy.</li>
            </p>
            <a href="#" target="_blank" rel="noopener noreferrer">
              View demo
            </a>
          </div>

          <div className="plist">
            <h3>TODO LIST</h3>
            <p>
              <li>
                Designed and developed a personal portfolio website using HTML
                and CSS to showcase my work and skills.
              </li>
              <li>
                Developed a sleek and modern portfolio site with HTML, CSS and
                JavaScript to exhibit my work.
              </li>
            </p>
            <a
              href="/demopages/todolist.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              View demo
            </a>
          </div>

          <div className="plist">
            <h3>NOTEPAD USING C++</h3>
            <p>
              <li>
                The aim is to provide a basic platform for users to create and
                edit plain text files.
              </li>
              <li>
                It's commonly used for simple note-taking, writing scripts, or
                editing configuration files due to its lightweight and
                fast-loading nature.
              </li>
            </p>
            <a href="#" target="_blank" rel="noopener noreferrer">
              View demo
            </a>
          </div>

          <div className="plist">
            <h3>HEALTH CARE CHATBOT</h3>
            <p>
              <li>
                The aim of the chatbot is to provide information, assist, and
                even diagnose the disease and provide advice and treatment for
                the user.
              </li>
              <li>
                Skills used: RASA, NLP, Machine Learning, Support Vector
                Machine, LSTM.
              </li>
            </p>
            <a
              href="/demopages/healthcare.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              View demo
            </a>
          </div>

          <div className="plist">
            <h3>BASIC CALCULATOR</h3>
            <p>
              <li>
                The basic and simple design with well user interface to interact
                and to work with.
              </li>
              <li>Tools used: HTML, CSS, JavaScript</li>
            </p>
            <a
              href="/demopages/calculator.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              View demo
            </a>
          </div>
        </div>
      </div>
      </div>
       )};
    </div>
 
  );
}

export default ProjectPage;

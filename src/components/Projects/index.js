import React from 'react';
import { FaPython, FaReact } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import './index.css'; // Create and import a CSS file for custom styling

const Projects = () => (
  <section className="bg-gradient-to-r from-black-500 to-gray-500section">
    <h2 className='section-title'>Projects & Certificates</h2>
    <div className=''>
      <div className=''>
        <div className='certificate mb-8'>
          <h1 className='certificate-title'>Certificates:</h1>
          <div className="grid">
            <div className="grid-item">
              <h3 className="grid-item-title"><FaPython style={{ color: 'green', fontSize: '48px' }} /> Programming: Python</h3>
              <span><a href="https://certificates.ccbp.in/intensive/programming-foundations?id=MDGHJSWNSM" className="grid-item-link">Python Certificate</a></span>
            </div>
            <div className="grid-item">
              <h3 className="grid-item-title"><FaReact style={{ color: 'red', fontSize: '48px' }} /> Frontend: ReactJs / VueJs / JavaScript</h3>
              <a href="https://certificates.ccbp.in/intensive/dynamic-web-application?id=PTJKDMTINS" className="grid-item-link">JavaScript Certificate</a><br />
              <a href="https://certificates.ccbp.in/intensive/javascript-essentials?id=UVKSCYUNEN" className="grid-item-link">JS Essentials Certificate</a><br />
              <a href="https://certificates.ccbp.in/intensive/reactjs?id=OVNDUUBFOI" className="grid-item-link">ReactJs Certificate</a>
            </div>
            <div className="grid-item">
              <h3 className="grid-item-title"><FaGolang style={{ color: 'blue', fontSize: '48px' }} /> Backend: Go</h3>
              <span><a href="https://www.udemy.com/certificate/UC-6a47f415-1b58-44e7-b139-00886b3cbf86/" className="grid-item-link">Go Certificate</a></span>
            </div>
          </div>
        </div>
        
        <div className='certificate'>
          <h1 className='certificate-title'>Projects:</h1>
          <div className="grid">
            <div className="grid-item">
              <h3 className="grid-item-title">Python: django and Pyqt5</h3>
            </div>
            <div className="grid-item">
              <h3 className="grid-item-title">MERN Stack: ReactJs / NodeJs</h3>
            </div>
            <div className="grid-item">
              <h3 className="grid-item-title">Backend: VueJs, Go and MongoDB</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;

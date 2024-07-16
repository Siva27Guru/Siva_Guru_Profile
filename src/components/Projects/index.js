import React from 'react';
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import './index.css'; // Create and import a CSS file for custom styling

const Projects = () => (
  <section className="text-black bg-gradient-to-r from-gray-700 to-gray-900 p-8">
    <h2 className='text-white text-4xl font-bold mb-4'>Projects & Certificates</h2>
    
    <div className='certificate mb-8'>
      <h1 className='text-2xl font-serif font-bold text-white mb-2'>Certificates:</h1>
      <div className="marquee">
        <div className="marquee-content flex space-x-8">
          <div className="p-6 bg-white rounded shadow hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold flex items-center"><FaPython style={{ color: 'green', fontSize: '48px' }} /> Programming: Python</h3>
            <span><a href="https://certificates.ccbp.in/intensive/programming-foundations?id=MDGHJSWNSM">Python Certificate</a></span>
          </div>
          <div className="p-6 bg-white rounded shadow hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold flex items-center"><FaReact style={{ color: 'red', fontSize: '48px' }} /> Frontend: ReactJs / VueJs / JavaScript</h3>
            <a href="https://certificates.ccbp.in/intensive/dynamic-web-application?id=PTJKDMTINS">JavaScript Certificate</a><br />
            <a href="https://certificates.ccbp.in/intensive/javascript-essentials?id=UVKSCYUNEN">JS Essentials Certificate</a><br />
            <a href="https://certificates.ccbp.in/intensive/reactjs?id=OVNDUUBFOI">ReactJs Certificate</a>
          </div>
          <div className="p-6 bg-white rounded shadow hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold flex items-center"><FaGolang style={{ color: 'blue', fontSize: '48px' }} /> Backend: Go</h3>
            <span><a href="https://www.udemy.com/certificate/UC-6a47f415-1b58-44e7-b139-00886b3cbf86/">Go Certificate</a></span>
          </div>
        </div>
      </div>
    </div>
    
    <div className='certificate'>
      <h1 className='text-2xl font-serif font-bold text-white mb-2'>Projects:</h1>
      <div className="marquee">
        <div className="marquee-content flex space-x-8">
          <div className="p-6 bg-white rounded shadow hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold">Python: django and Pyqt5</h3>
          </div>
          <div className="p-6 bg-white rounded shadow hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold">MERN Stack: ReactJs / NodeJs</h3>
          </div>
          <div className="p-6 bg-white rounded shadow hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold">Backend: VueJs, Go and MongoDB</h3>
          </div>
        </div>
      </div>
    </div>
    
  </section>
);

export default Projects;

import React from 'react';
import { FaPython, FaReact } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { DiReact } from "react-icons/di";
import { DiNodejs } from "react-icons/di";
import { DiDjango } from "react-icons/di";
import { FaVuejs } from "react-icons/fa6";
// import { SiSqlite } from "react-icons/si";
import { DiMysql } from "react-icons/di";

const Projects = () => (
  <section className="bg-gradient-to-r from-black-500 to-gray-500 p-12">
    <h2 className='section-title mt-0'>Projects & Certificates</h2>
    <div>
      <div>
        <div className='certificate'>
          <div className="grid">
            <div>
              <h2 className='font-serif text-white text-2xl mt-8'>Certficate:</h2>
            </div>
            <div className="grid-item font-serif bg-gradient-to-r from-black to-white m-2 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="grid-item-title"><FaPython style={{ color: 'green', fontSize: '48px', padding: '2px', margin: '3px' }} /> Programming: Python</h3>
              <span><a href="https://certificates.ccbp.in/intensive/programming-foundations?id=MDGHJSWNSM" className="grid-item-link">Python Certificate</a></span>
            </div>
            <div className="grid-item font-serif bg-gradient-to-r from-black to-white m-2 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="grid-item-title"><FaReact style={{ color: 'red', fontSize: '48px', padding: '2px', margin: '3px' }} /> Frontend: ReactJs / VueJs / JavaScript</h3>
              <a href="https://certificates.ccbp.in/intensive/dynamic-web-application?id=PTJKDMTINS" className="grid-item-link">JavaScript Certificate</a><br />
              <a href="https://certificates.ccbp.in/intensive/javascript-essentials?id=UVKSCYUNEN" className="grid-item-link">JS Essentials Certificate</a><br />
              <a href="https://certificates.ccbp.in/intensive/react-js?id=ASVRJKCUVT" className="grid-item-link">ReactJs Certificate</a>
            </div>
            <div className="grid-item font-serif bg-gradient-to-r from-black to-white m-2 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="grid-item-title"><FaGolang style={{ color: 'blue', fontSize: '48px', padding: '2px', margin: '3px' }} /> Backend: Go</h3>
              <span><a href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-3e1152db-3837-4222-8198-c00179c898ff.pdf" className="grid-item-link">Go Certificate</a></span>
            </div>
          </div>
        </div>
        
        <div className='certificate'>
          <div className="grid">
          <div>
              <h2 className='font-serif text-white text-2xl mt-8'>Projects:</h2>
            </div>
            <div className="grid-item font-serif bg-gradient-to-r from-black to-white m-2 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className='flex flex-row justify-between'>
              <div className='flex flex-col p-6'>
              <DiDjango style={{ color: 'green', fontSize: '48px' }}/><FaPython style={{ color: 'blue', fontSize: '48px' }}/>
                </div>
                <div className='flex flex-col justify-around'>
                  <div>
                  <h3 className="grid-item-title">Python: Django and Pyqt5</h3>
              </div>
              <div>
              <ul>
                <li>Project1: Productivity hour</li>
              </ul>
              </div>
              </div>
              </div>
            </div>
            <div className="grid-item font-serif bg-gradient-to-r from-black to-white m-2 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className='flex flex-row justify-between'>
              <div className='flex flex-col p-6'>
              <SiMongodb style={{ color: 'yellow', fontSize: '48px' }} /><SiExpress style={{ color: 'white', fontSize: '48px' }} /><DiReact style={{ color: 'pink', fontSize: '48px' }} /><DiNodejs style={{ color: 'green', fontSize: '48px' }} />
                </div>
                <div className='flex flex-col justify-around'>
                  <div>
              <h3 className="grid-item-title">MERN Stack: ReactJs / NodeJs</h3>
              </div>
              <div>
              <ul>
                <li>Project1: <a href='https://nxttrnz.ccbp.tech/' className="grid-item-link">Nxt Trendz</a></li>
                <li>Project2: <a href='https://Nxtwatchappln.ccbp.tech' className="grid-item-link">Nxt watch</a></li>
                <li>Demo user credential :<br/>
                  Login name: rahul<br/>
                  Password: rahul@2021</li>
              </ul>
              </div>
              </div>
              </div>
            </div>
            <div className="grid-item font-serif bg-gradient-to-r from-black to-white m-2 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className='flex flex-row justify-between'>
            <div className='flex flex-col p-6'>
            <FaVuejs style={{ color: 'green', fontSize: '48px' }} /><FaGolang style={{ color: 'Blue', fontSize: '48px' }}/><DiMysql  style={{ color: 'white', fontSize: '48px' }}/>
             </div> 
             <div className='flex flex-col'>
             <div className='mb-6'>
              <h3 className="grid-item-title mt-6">VueJs, Go and Mysql</h3>
              </div>
              <div>
              <ul>
                <li>Project1: HCM Project</li>
                <li>Project2: Microservices</li>
              </ul>
              </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;

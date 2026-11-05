import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => (
  <section className="bg-gradient-to-r from-black-500 to-gray-500 p-8">
    <h1 className='font-serif text-4xl font-bold mb-4 text-white'>Contact</h1>
    <hr className="border-black mb-8"/>
    <div className="flex flex-row justify-around font-serif bg-gradient-to-r from-black to-white m-2 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      <div className='flex flex-col bg-gradient-to-b from-gray-900 to-gray-800 rounded m-8 p-8'>
      <h1 className="text-white text-2xl font-semibold">Siva Guru</h1>
      <p className="text-white">Full Stack Developer, Chennai(TN), India</p>
      </div>
      <div>

      </div>
      <div>
      <p className="flex items-center mt-4"><FaEnvelope style={{ color: 'black', fontSize: '24px' }} className="mr-2" /> <a href="mailto:sivaguruat27@gmail.com" className="text-black-500">sivaguruat27@gmail.com</a></p>
      <p className="flex items-center mt-4"><FaLinkedin style={{ color: 'black', fontSize: '24px' }} className="mr-2" /> <a href="https://linkedin.com/in/siva27guru01/" className="text-black-500">LinkedIn</a></p>
      <p className="flex items-center mt-4"><FaGithub style={{ color: 'black', fontSize: '24px' }} className="mr-2" /> <a href="https://github.com/Siva27Guru/" className="text-black-500">GitHub</a></p>
      <p className="flex items-center mt-4"><FaPhone style={{ color: 'black', fontSize: '24px' }} className="mr-2" /> 9855100435</p>
      </div>
    </div>
  </section>
);

export default Contact;

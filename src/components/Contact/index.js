import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => (
  <section className="bg-gradient-to-r from-black-500 to-gray-500 p-8">
    <h1 className='font-serif text-4xl font-bold mb-4 text-white'>Contact</h1>
    <hr className="border-black mb-8"/>
    <div className="p-6 bg-white rounded shadow hover:shadow-lg transition-shadow duration-300">
      <h1 className="text-2xl font-semibold">Siva Guru</h1>
      <p>Full Stack Developer, Chennai(TN), India</p>
      <p className="flex items-center mt-4"><FaEnvelope className="mr-2" /> <a href="mailto:sivaguruat27@gmail.com" className="text-blue-500">sivaguruat27@gmail.com</a></p>
      <p className="flex items-center mt-4"><FaLinkedin className="mr-2" /> <a href="https://linkedin.com/in/siva27guru01/" className="text-blue-500">LinkedIn</a></p>
      <p className="flex items-center mt-4"><FaGithub className="mr-2" /> <a href="https://github.com/Siva27Guru/" className="text-blue-500">GitHub</a></p>
      <p className="flex items-center mt-4"><FaPhone className="mr-2" /> 9855100435</p>
    </div>
  </section>
);

export default Contact;

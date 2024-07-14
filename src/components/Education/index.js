import React from 'react';

const Education = () => (
  <section className="bg-gradient-to-r from-black-500 to-white-500 p-8">
    <h2 className='text-4xl font-bold mb-4 text-white'>Education</h2>
    <div className="mb-8 p-6 bg-white rounded shadow hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-2xl font-semibold">B.Tech in Computer Science Engineering</h3>
      <p>Bharathidasan University, Trichy, India</p>
      <p>2011 - 2015</p>
    </div>
    <div className="mb-8 p-6 bg-white rounded shadow hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-2xl font-semibold">Higher Secondary</h3>
      <p>Sitadevi Garodia Hindu Vidhyalaya Matriculation, Chennai, India</p>
      <p>2011</p>
    </div>
    <div className="p-6 bg-white rounded shadow hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-2xl font-semibold">SSLC</h3>
      <p>Sitadevi Garodia Hindu Vidhyalaya Matriculation, Chennai, India</p>
      <p>2009</p>
    </div>
  </section>
);

export default Education;

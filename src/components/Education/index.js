import React, { useState, useEffect } from 'react';
import './index.css'; // Create and import a CSS file for styling

const Education = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sections = [
    {
      title: "B.Tech Computer Science",
      school: "Bharathidasan University, Trichy, India",
      year: "2011 - 2015",
    },
    {
      title: "Higher Secondary",
      school: "Sitadevi Garodia Hindu Vidhyalaya Matriculation, Chennai, India",
      year: "2011",
    },
    {
      title: "SSLC",
      school: "Sitadevi Garodia Hindu Vidhyalaya Matriculation, Chennai, India",
      year: "2009",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sections.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [sections.length]);

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className='font-serif text-4xl font-bold mb-4 text-white'>Education</h2>
      <div className="font-serif rolling-banner m-auto rounded">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`education-section ${
              index === currentIndex ? 'active' : ''
            }`}
          >
            <hr />
            <div className='bg-white p-2'>  
            <h3 className="text-black text-xl font-semibold">{section.title}</h3>
            <p className="text-black text-xl">{section.school}</p>
            <p className="text-black text-xl">{section.year}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
      </div>
    </section>
  );
};

export default Education;
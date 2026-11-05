import React, { useState, useEffect } from 'react';
import './index.css';

const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sections = [
    {
      title: "Programmer Analyst Trainee",
      company: "Cognizant, Chennai, India",
      duration: "Nov 2015 - Nov 2016",
      details: [
        "Support ETL processes using IBM DataStage ensuring data accuracy and integrity.",
        "Assistance during Migration and monitored data pipelines for any anomalies or errors.",
        "Handling various Change and Incident Management as per Client Requirement.",
        "Collaborate with cross-functional teams and communicate on data integration issues.",
        "Documented ETL Processes, and troubleshooting procedures and updated best practices in SOPs of different applications."
      ]
    },
    {
      title: "Full Stack Developer (Apprenticeship)",
      company: "Nxtwave Disruptive Technologies Private Limited",
      duration: "Dec 2022 - Oct 2023",
      details: [
        "Programming foundations using Python.",
        "Full stack development using SERN stack.",
        "Contribute to backend development through assignments using NodeJs.",
        "Contribute to frontend development through ReactJs assignments.",
        "Assignments on managing databases with SQLite.",
        "Implement and test clean, maintainable code.",
        "Troubleshooting and technical support.",
        "Maintenance of code using GitHub repositories."
      ]
    },
    {
      title: "Full Stack Developer (Trainee)",
      company: "HR India Private Limited, Chennai, India",
      duration: "Oct 2023 - Apr 2024",
      details: [
        "Rest APIs for the backend development using Go for HCM product.",
        "Frontend development using Vue Js and Kendo Ui framework.",
        "Handling MongoDB collections through Go.",
        "Developing features, payroll process and creating functionalities.",
        "Troubleshooting, Debugging, and Technical Support activities to gather requirements.",
        "Unit testing about the functionality created.",
        "Maintenance of code using GitLab."
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sections.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [sections.length]);

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className='font-serif text-4xl font-bold mb-4 text-white text-center'>Professional Experience</h2>
      <div className="rolling-banner font-serif m-auto rounded">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`experience-section ${
              index === currentIndex ? 'active' : ''
            }`}
          >
            <hr />
            <div className='experience-card bg-white p-4'>  
              <h3 className="text-black text-2xl font-bold mb-2">{section.title}</h3>
              <p className="text-gray-700 mb-2">{section.company}</p>
              <p className="text-gray-700 mb-4">{section.duration}</p>
              <hr/>
              <ul className="list-decimal decorated-list mt-4">
                {section.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="text-gray-700">{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

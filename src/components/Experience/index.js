import React from 'react';

const Experience = () => (
  <section className="container mx-auto px-4 py-8">
    <h2 className="text-white text-4xl font-bold mb-8 text-center">Professional Experience</h2>

    <div className="flex flex-wrap -mx-4">
      {/* Experience Card 1 */}
      <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
          <h3 className="text-2xl font-bold mb-4">Full Stack Developer (Apprenticeship)</h3>
          <p>Nxtwave Disruptive Technologies Private Limited</p>
          <p>Dec 2022 - Oct 2023</p>
          <ul className="mt-4">
          <li>Programming foundations using Python.</li>
        <li>Full stack development using SERN stack.</li>
        <li>Contribute to backend development through assignments using NodeJs.</li>
        <li>Contribute to frontend development through ReactJs assignments.</li>
        <li>Assignments on managing databases with SQLite.</li>
        <li>Implement and test clean, maintainable code.</li>
        <li>Troubleshooting and technical support.</li>
        <li>Maintenance of code using GitHub repositories.</li>
          </ul>
        </div>
      </div>

      {/* Experience Card 2 */}
      <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
          <h3 className="text-2xl font-bold mb-4">Programmer Analyst Trainee</h3>
          <p>Cognizant, Chennai, India</p>
          <p>Nov 2015 - Nov 2016</p>
          <ul className="mt-4">
          <li>Support ETL processes using IBM DataStage ensuring data accuracy and integrity.</li>
        <li>Assistance during Migration and monitored data pipelines for any anomalies or errors.</li>
        <li>Handling various Change and Incident Management as per Client Requirement.</li>
        <li>Collaborate with cross-functional teams and communicate on data integration issues.</li>
        <li>Documented ETL Processes, and troubleshooting procedures and updated best practices in SOPs of different applications.</li>
          </ul>
        </div>
      </div>

      {/* Experience Card 3 */}
      <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
          <h3 className="text-2xl font-bold mb-4">Full Stack Developer (Trainee)</h3>
          <p>HR India Private Limited, Chennai, India</p>
          <p>Oct 2023 - Apr 2024</p>
          <ul className="mt-4">
          <li>Rest APIs for the backend development using Go for HCM product.</li>
        <li>Frontend development using Vue Js and Kendo Ui framework.</li>
        <li>Handling MongoDB collections through Go.</li>
        <li>Developing features, payroll process and creating functionalities.</li>
        <li>Troubleshooting, Debugging, and Technical Support activities to gather requirements.</li>
        <li>Unit testing about the functionality created.</li>
        <li>Maintenance of code using GitLab.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;

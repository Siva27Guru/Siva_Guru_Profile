import React from 'react';
import './App.css';

import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

const Home = () => (
  <header className='home-container'>
    <h1>Siva Guru</h1>
    <p>Full Stack Developer with relevant experience IT Industry and Education ethusiast, passionate about developing and managing web applications 
        using modern technologies like Go, MongoDB, VueJS, ReactJS, NodeJS, and Python.
        Adept at creating efficient backend APIs, developing intuitive frontend interfaces, and managing databases.
        Known for being a quick learner, adaptable to new tech stacks, and delivering high-quality code.
        Seeking a challenging role to leverage my skills and contribute to impactful projects.</p>
  </header>
);

export default App;

import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App font-mono bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen">
      <Navbar />
      <section id="home" className="mt-4 text-black p-8">
        <Home />
      </section>
      <section id="experience" className="flex flex-col md:flex-row justify-around text-white p-8">
        <Experience />
      </section>
      <section id="projects" className="p-8">
        <Projects />
      </section>
      <section id="contact" className="p-8">
        <Contact />
      </section>
    </div>
  );
}

export default App;

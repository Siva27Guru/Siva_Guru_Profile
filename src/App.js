import React from 'react';
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css'; // Remove this import if not using custom CSS

function App() {
  return (
    <div className="App font-mono bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen">
      <Navbar />
      <section id="home" className="m-4 text-black p-8">
        <Home />
      </section>
      <section id="experience" className="flex flex-col md:flex-row justify-around text-black p-8">
        <Education />
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

const Home = () => (
  <div>
    <header className="flex flex-col md:flex-row justify-around text-center font-serif bg-gradient-to-r from-black to-white m-2 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      <div className='p-8'>
        <img src="https://photutorial.com/wp-content/uploads/2023/04/Featured-image-AI-image-generators-by-Midjourney.png" alt="siva" />
      </div>
      <div className='text-blue m-8'>
        <h1 className="text-left text-2xl font-bold mb-4">Welcome Everyone..!!</h1>
        <p className="text-left text-lg">
          "I am Siva Guru, B.Tech [Computer Science]<br /> Software Developer, Chennai(TN), India.<br />
          Interested in Building Robust web applications.<br />
          Enhancing my scope towards application of computer as science to provide practical solutions for real-world problems."
        </p>
        <div className="text-left m-3">
          <h1 className='font-bold'>Skills Engaged in:</h1>
          <ol className='m-3'>
            <li><span>1.</span>MERN Stack</li>
            <li><span>2.</span>Golang</li>
            <li><span>3.</span>Vue Js</li>
            <li><span>4.</span>Python</li>
            <li><span>5.</span>SQL/NoSQL</li>
          </ol>
        </div>
      </div>
    </header>
  </div>
);

export default App;

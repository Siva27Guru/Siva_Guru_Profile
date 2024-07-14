import React from 'react';
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css'; // Remove this import if not using custom CSS

function App() {
  return (
    <div className="App bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen">
      <Navbar />
      <section id="home" className="m-4 text-white p-8">
        <Home />
      </section>
      <section id="experience" className="text-black p-8">
        <Experience />
      </section>
      <section id="education" className="p-8">
        <Education />
      </section>
      <section id="projects" className="text-white p-8">
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
  <header className="text-center bg-gradient-to-r from-black-500 to-white-500 m-2 p-8">
    <h1 className="text-left text-2xl font-bold mb-4">Welcome Everyone..!!</h1>
    <p className="text-left text-lg">"I am Siva Guru,B.Tech [Computer Science], Software Developer, Chennai(TN), India.<br/>
    Interested in Buiding Robust web applications.<br/>
    Enhancing my scope towards application of computer as science to provide practical solutions for real world problems."</p>

    <div className="text-left m-3">
      <h1>Skills Engaged in:</h1>
      <ol className='m-3'>
        <li><span>1.</span>MERN Stack</li>
        <li><span>2.</span>Golang</li>
        <li><span>3..</span>Vue Js</li>
        <li><span>4.</span>Python</li>
        <li><span>5.</span>SQl/NoSQL</li>
      </ol>
    </div>
  </header>
 </div>
);
export default App;

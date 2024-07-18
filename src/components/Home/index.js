import React from 'react';
import myImage from '../../images/my-image.png'; // Adjust the path relative to your component file

const Home = () => (
  <div>
    <header className="flex flex-col md:flex-row justify-around text-center font-serif bg-gradient-to-r from-black to-white m-2 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      <div className='flex flex-col bg-gradient-to-b from-gray-900 to-gray-800 rounded'>
      {/* <div className='mt-8'>
        <h1 className='text-white text-2xl'></h1></div> */}
      <div className='p-8'>
        <img src={myImage} alt="siva" className="rounded-full" />
      </div>
      <div><p className='text-white text-xl'>Siva Guru Thanikachalam</p></div>
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

export default Home;

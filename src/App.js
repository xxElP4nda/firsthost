import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Lyon1 from './Lyon1';

function Home() {
  return <body>
    <h2>Home Page</h2>
    <p>Extremely proud to present you the first version of Artooro.</p>
    <p>An immersive experience as you never lived it.</p>
    <p>Created by locals to be shared with you.</p>
    <p>Enjoy the Toor !</p>
    </body>;
}

function About() {
  return <body>
    <h2>About Page</h2>
      <p>Artooro was created as a guide, to let you sink into your next journey, and have a deeper taste of the city.</p>
      <p>We are also fond of learning new languages so we might have add some of these elements inside.</p>
      <p>Hope you enjoy our work.</p>
      <p>Cheers !</p>
  </body>
 
}

function Start() {
  return <body>
    <h2>Let's start the tOOr!</h2>
    <img src="/Users/thomascollet/Desktop/artooro/src/thomaspp.png" />
    <Link to="/Lyon1">Lyon</Link>
    </body>
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/about">About</Link>
        <Link to="/start">Start</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/start" element={<Start />} />
        <Route path="/Lyon1" element={<Lyon1 />} />
      </Routes>
    </Router>
  );
}

export default App;
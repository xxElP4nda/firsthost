import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Lyon1 from './Lyon1';
import Lyon2 from './Lyon2';
import Lyon3 from './Lyon3';
import Lyon4 from './Lyon4';
import Lyon5 from './Lyon5';
import Lyon6 from './Lyon6';
import Lyon7 from './Lyon7';
import Endtoor from './Endtoor';

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
        <Route path="/Lyon2" element={<Lyon2 />} />
        <Route path="/Lyon3" element={<Lyon3 />} />
        <Route path="/Lyon4" element={<Lyon4 />} />
        <Route path="/Lyon5" element={<Lyon5 />} />
        <Route path="/Lyon6" element={<Lyon6 />} />
        <Route path="/Lyon7" element={<Lyon7 />} />
        <Route path="/endtoor" element={<Endtoor />} />
      </Routes>
    </Router>
  );
}

export default App;
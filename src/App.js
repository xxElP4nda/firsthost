import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function Home() {
  return <body>
    <h2>Home Page</h2>
    <p>Welcome on the first version of Artooro</p>
    </body>;
}

function About() {
  return <body>
    <h2>About Page</h2>
      <p>Artooro was created as a guide, to let you sink into your next city trips, and have a deeper taste of the city's culture.</p>
      <p>We are also fond of learning new languages so we might have add some of these elements inside.</p>
      <p>Hope you will enjoy our work. Cheers!</p>
  </body>
 
}

function Start() {
  return <body>
    <h2>Let's start the TOOR!</h2>
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
      </Routes>
    </Router>
  );
}

export default App;
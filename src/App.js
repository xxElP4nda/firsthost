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
    <p>A new immersive experience to enrich your journey.</p>
    <p>Created by locals for you.</p>
    <p>Enjoy the Toor !</p>
    <div> <p> </p></div>
    <p><i>My wealth and treasure? It can be yours if you want it! Search for it! I left everything in that one place.</i></p>
    <p>Gol D. Roger</p>
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
      <p>I am glad you did not chicken out, and join this adventoor.</p>
      <p>You will not be disapointed!</p>
      <p>My name is Artooro, and I will be your personal guide during your trip.</p>
      <p>Me and my colleagues will provide you informations, advice and also little anecdotes from here to there.</p>
      <p>Oh, and I also love foreign languages!</p>
      <p>So hopefully, you'll learn some new words.</p>
      <h3>So now, tell me where are we heading to?</h3>
    <Link to="/Lyon1">Lyon https://maps.app.goo.gl/mbh5ToiV7ixU6Sqn9</Link>
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
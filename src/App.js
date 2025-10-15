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
import Lyon8 from './Lyon8';
import Lyon9 from './Lyon9';
import Lyon10 from './Lyon10';
import Lyon11 from './Lyon11';
import Lyon12 from './Lyon12';
import Lyon13 from './Lyon13';
import Lyon14 from './Lyon14';
import Endtoor from './Endtoor';
import pandartooro from './pandartooro.png';

function Home() {
  return <body>
    <h2>Home Page</h2>
    <p>Extremely proud to present you the first version of Artooro.</p>
    <p>A new immersive experience to enrich your journey.</p>
    <p>You will discover new places, contribute and know more about the food, the culture and other secrets.</p>
    <p>Created by locals for you.</p>
    <p>Enjoy the Toor !</p>
    <div> <p> </p></div>
    <p><i>My wealth and treasure? It can be yours if you want it! Search for it! I left everything in that one place.</i></p>
    <p><i>Gol D. Roger</i></p>
    <p>Follow us on <Link to="https://www.instagram.com/artooro.world/">Instagram @artooro.world</Link></p>
    </body>;
}

function About() {
  return <body>
    <h2>About Page</h2>
      <p>Artooro was created as a guide, to let you sink into your next journey, and have a deeper taste of the city.</p>
      <p>Once we travel around, we often like to get accute advice on what to see, where to go, what to eat, and in my case, to know about little anecdotes that makes the place special and unravel its curiosities.</p>
      <p>Some of us have had the chance to travel, study and live in different cities, therefore we have a lot of friends abroad.</p>
      <p>We are also fond of learning new languages so we might have add some of these elements inside.</p>
      <p>This was made for you, so you can visit but also share your favourite places around the World and help us make it a better place.</p>
      <p>Hope you enjoy our work.</p>
      <p>Cheers !</p>
  </body>
 
}

function Start() {
  return <body>
    <h2>Let's start the tOOr!</h2>
      <img src={pandartooro} alt="Artooro" width="200" height="200"/>
      <p>My name is Artooro, and I will be your personal guide during your trip.</p>
      <p>I am glad you did not chicken out, and join this adventoor.</p>
      <p>You will not be disapointed!</p>
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
        <Route path="/Lyon8" element={<Lyon8 />} />
        <Route path="/Lyon9" element={<Lyon9 />} />
        <Route path="/Lyon10" element={<Lyon10 />} />
        <Route path="/Lyon11" element={<Lyon11 />} />
        <Route path="/Lyon12" element={<Lyon12 />} />
        <Route path="/Lyon13" element={<Lyon13 />} />
        <Route path="/Lyon14" element={<Lyon14 />} />
        <Route path="/endtoor" element={<Endtoor />} />
      </Routes>
    </Router>
  );
}

export default App;
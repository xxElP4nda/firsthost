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
import FR_Lyon1 from './FR_Lyon1';
import FR_Lyon2 from './FR_Lyon2';
import FR_Lyon3 from './FR_Lyon3';
import FR_Lyon4 from './FR_Lyon4';
import FR_Lyon5 from './FR_Lyon5';
import FR_Lyon6 from './FR_Lyon6';
import FR_Lyon7 from './FR_Lyon7';
import FR_Lyon8 from './FR_Lyon8';
import FR_Lyon9 from './FR_Lyon9';
import FR_Lyon10 from './FR_Lyon10';
import FR_Lyon11 from './FR_Lyon11';
import FR_Lyon12 from './FR_Lyon12';
import FR_Lyon13 from './FR_Lyon13';
import FR_Lyon14 from './FR_Lyon14';
import FR_Endtoor from './FR_Endtoor';
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
      <p>Once we travel around, we often like to get accurate advice on what to see, where to go, what to eat, and in my case, to know about little anecdotes that makes the place special and it is even better if it is provided by a local!</p>
      <p>Some of us have had the chance to travel, study and live in different cities, therefore we have a lot of friends abroad.</p>
      <p>We are also fond of learning new languages so we might have added some of these elements inside.</p>
      <p>This was made for you, so you can visit but also share your favourite places around the World and help us make it a better place.</p>
      <p>Hope you enjoy our work.</p>
      <p>Cheers!</p>
      <p><i>The Artooro Team</i></p>
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
    <p><Link to="/Lyon1"> 🇬🇧 Lyon https://maps.app.goo.gl/mbh5ToiV7ixU6Sqn9</Link> </p>
    <p><Link to="/FR_Lyon1"> 🇫🇷 Lyon https://maps.app.goo.gl/mbh5ToiV7ixU6Sqn9</Link> </p>
    </body>
}

/* 

function Creatoor() {
  return <body>
    <h2>Create your own toor!</h2>
    <p>We created this platform as a collaborative way of sharing cultural specificities and bring tours to another level.</p>
    <p>As we love to travel and discover new cultures, we also know that tourism can have disastrous consequences at a social and environmental level.</p>
    <p>Therefore, through your contributions, we aim to impact the visited places and make them more sustainable.</p>
    <h3>Get rewarded!</h3>
    <p>Thanks to your visitoors, you will be able to get tips and improve each one of your toors!</p>
    <p>So you will directly know how pleasant it was, what you can keep, and how you can propose better experiences!</p>
  </body>
}

*/

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/about">About</Link>
        <Link to="/start">Start</Link>
 /*       <Link to="/creatoor">Creatoor</Link> */
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/start" element={<Start />} />
 /*       <Route path="/creatoor" element={<Creatoor />} /> */
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
        <Route path="/FR_Lyon1" element={<FR_Lyon1 />} />
        <Route path="/FR_Lyon2" element={<FR_Lyon2 />} />
        <Route path="/FR_Lyon3" element={<FR_Lyon3 />} />
        <Route path="/FR_Lyon4" element={<FR_Lyon4 />} />
        <Route path="/FR_Lyon5" element={<FR_Lyon5 />} />
        <Route path="/FR_Lyon6" element={<FR_Lyon6 />} />
        <Route path="/FR_Lyon7" element={<FR_Lyon7 />} />
        <Route path="/FR_Lyon8" element={<FR_Lyon8 />} />
        <Route path="/FR_Lyon9" element={<FR_Lyon9 />} />
        <Route path="/FR_Lyon10" element={<FR_Lyon10 />} />
        <Route path="/FR_Lyon11" element={<FR_Lyon11 />} />
        <Route path="/FR_Lyon12" element={<FR_Lyon12 />} />
        <Route path="/FR_Lyon13" element={<FR_Lyon13 />} />
        <Route path="/FR_Lyon14" element={<FR_Lyon14 />} />
        <Route path="/FR_endtoor" element={<FR_Endtoor />} />
      </Routes>
    </Router>
  );
}

export default App;
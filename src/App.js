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
import FRLyon1 from './FRLyon1';
import FRLyon2 from './FRLyon2';
import FRLyon3 from './FRLyon3';
import FRLyon4 from './FRLyon4';
import FRLyon5 from './FRLyon5';
import FRLyon6 from './FRLyon6';
import FRLyon7 from './FRLyon7';
import FRLyon8 from './FRLyon8';
import FRLyon9 from './FRLyon9';
import FRLyon10 from './FRLyon10';
import FRLyon11 from './FRLyon11';
import FRLyon12 from './FRLyon12';
import FRLyon13 from './FRLyon13';
import FRLyon14 from './FRLyon14';
import FREndtoor from './FREndtoor';
import pandartooro from './pandartooro.png';
import CateCorsucci from './CateCorsucci';

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
    <h2>Let's start the Toor!</h2>
      <img src={pandartooro} alt="Artooro" width="200" height="200"/>
      <p>My name is Artooro, and I will be your personal guide during your trip.</p>
      <p>I am glad you did not chicken out, and join this adventoor.</p>
      <p>You will not be disapointed!</p>
      <p>Me and my colleagues will provide you informations, advice and also little anecdotes from here to there.</p>
      <p>Oh, and I also love foreign languages!</p>
      <p>So hopefully, you'll learn some new words.</p>
      <h3>So now, tell me where are we heading to?</h3>
    <p><Link to="/Lyon1"> 🇬🇧 Lyon https://maps.app.goo.gl/mbh5ToiV7ixU6Sqn9</Link> </p>
    <p><Link to="/FRLyon1"> 🇫🇷 Lyon https://maps.app.goo.gl/mbh5ToiV7ixU6Sqn9</Link> </p>
    </body>
}


function Creatoor() {
  return <body>
    <h2>Create your own toor!</h2>
    <p>We created this platform as a collaborative way of sharing cultural specificities and bring tours to another level.</p>
    <p>As we love to travel and discover new cultures, we also know that tourism can have disastrous consequences at a social and environmental level.</p>
    <p>Therefore, through your contributions, we aim to impact the visited places and make them more sustainable.</p>
    <h3>Get rewarded!</h3>
    <p>Thanks to your visitoors, you will be able to get tips and improve each one of your toors!</p>
    <p>So you will directly know how pleasant it was, what you can keep, and how you can propose better experiences!</p>
    <p>Of course, it takes time and effort to build a toor.</p>
    <p>Therefore we will share with you the benefits!</p>
    <h3>Ready to contribute?</h3>
    <p>Join us <Link to="https://forms.gle/9HKQGTt4E9W2VLnD7"><strong>HERE</strong></Link>!</p>
  </body>
}


function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/about">About</Link>
        <Link to="/start">Start</Link>
        <Link to="/creatoor">Creatoor</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/start" element={<Start />} />
        <Route path="/creatoor" element={<Creatoor />} /> 
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
        <Route path="/FRLyon1" element={<FRLyon1 />} />
        <Route path="/FRLyon2" element={<FRLyon2 />} />
        <Route path="/FRLyon3" element={<FRLyon3 />} />
        <Route path="/FRLyon4" element={<FRLyon4 />} />
        <Route path="/FRLyon5" element={<FRLyon5 />} />
        <Route path="/FRLyon6" element={<FRLyon6 />} />
        <Route path="/FRLyon7" element={<FRLyon7 />} />
        <Route path="/FRLyon8" element={<FRLyon8 />} />
        <Route path="/FRLyon9" element={<FRLyon9 />} />
        <Route path="/FRLyon10" element={<FRLyon10 />} />
        <Route path="/FRLyon11" element={<FRLyon11 />} />
        <Route path="/FRLyon12" element={<FRLyon12 />} />
        <Route path="/FRLyon13" element={<FRLyon13 />} />
        <Route path="/FRLyon14" element={<FRLyon14 />} />
        <Route path="/FRendtoor" element={<FREndtoor />} />
        <Route path="/creatoor/CateCorsucci" element={<CateCorsucci />} />
      </Routes>
    </Router>
  );
}

export default App;
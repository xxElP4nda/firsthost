import React from 'react';
import { Link } from 'react-router-dom';

function StartPage() {
  return (
    <div>
      <img src="https://placekitten.com/400/200" alt="Cute kitten" />
      <p>Please come and visit <Link to="https://maps.app.goo.gl/oLURsmTGBrZ2a6XC6">the traboule here</Link>.</p>
      <p>But be quiet, you are walking under people's houses.</p>
      <p>Once you're done, just FYI, there are also the Cinema's museum and the silk museum.</p>
      <p>Silk was one of Lyon's biggest industry in the old times.</p>
      <p>Nowadays, time have changed.</p>
      <p>Labor people would work in silk factories, and are called the "Canuts".</p>
      <p>They were known to be very rebellious and had many revolts in the 19th century.</p>
      <p>They were asking for better wages and working conditions.</p>
      <p>Today, the word "Canut" is still used to refer to the people of Lyon.</p>
      <p>In any bouchons, you will find some "Cervelle de Canut", which is a white cheese preparation with shallots, chives and sometimes white wine.</p>
      <p>It is usually served as a spread on bread or as a dip for vegetables.</p>
      <p>It can be eaten as an apetizer on bread, or in France, cheese is also served for the dessert.</p>
      <p>I'm out of questions.</p>
      <p>What formula represent's Einstein theory on relativity?</p>
      <Link to="https://media.tenor.com/geWyjrqNbdAAAAAM/cat-no.gif"><button>F=m.a</button></Link>
      <Link to="https://media1.tenor.com/m/lMbSkCq3HjQAAAAC/lara-croft-saying-no-tomb-raider.gif"><button>P.V=n.R.T</button></Link>
      <Link to="/Lyon7">
        <button>E=m.c^2</button>
      </Link>
    </div>
  );
}

export default StartPage;
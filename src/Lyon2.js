import React from 'react';
import { Link } from 'react-router-dom';

function StartPage() {
  return (
    <div>
      <img src="https://placekitten.com/400/200" alt="Cute kitten" />
      <p>Well done, else you just realized that pushing the other buttons was useless.</p>
      <p>Louis XIV was known as "Le Roi Soleil", and it does not have anything to do with his talent in astrophysics.</p>
      <p>"Roi Soleil", which litterally translates into "Sun King", is related to the king's surdimensionated ego.</p>
      <p>Kind of the Elon Musk of those times, but on a horse, which is more sustainable than a car.</p>
      <p>You just won the link to our next destination!</p>
      <p>Please walk to <Link to="https://maps.app.goo.gl/HzXAAmtXxwczoHUz5">Place Saint-Jean</Link> where we will take on our next adventoors.</p>
      <p>To do so, follow Google Maps and <Link to="/Lyon4">press here</Link> once you arrived.</p>
      <p>Or let me guide you through it.</p>
      <p><Link to="/Lyon3"><button>I'll follow your lead!</button></Link><Link to="/Lyon4"><button>I'm already in Place Saint-Jean</button></Link></p>
    </div>
  );
}

export default StartPage;
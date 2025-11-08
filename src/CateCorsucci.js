import React from 'react';
import { Link } from 'react-router-dom';
import catecorsucci from './CateCorsucci.png';

function StartPage() {
  return (
    <div>
      <img src={catecorsucci} alt="Avatar" />
      <h3>About CateCorsucci</h3>
      <p>Caterina runs a family place and love welcoming guests to make them feel just like home.</p>
      <p>She knows Tuscany like no one else and can provide you a good overview of the surrounding's history and food specialities.</p>
      <p>She is an excellent oenologist and will guide you through the best Italian wines of the region.</p>
      <h3>Toors</h3>
      <Link to="https://www.poggiocorsucci.com/en/home-english/">Il Corsucci Tour!</Link>
      <p><i>Discover about the surroundings of Poggio Corsucci & enjoy the landscape as its most!</i></p>
      <h3>Website</h3>
      <Link to="https://www.poggiocorsucci.com/en/home-english/">
        Poggio Corsucci
      </Link>
    </div>
  );
}

export default StartPage;
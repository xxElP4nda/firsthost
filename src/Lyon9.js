import React from 'react';
import { Link } from 'react-router-dom';

function StartPage() {
  return (
    <div>
      <h3>One more time!</h3>
      <p>Alright, let me bring you back in History!</p>
      <p>Lyon was previously under Roman occupation.</p>
      <p>At that time, it was called Lugdunum.</p>
      <p>Therefore, you will see in different places of the city the remainings of that civilization.</p>
      <p>Happy that you did not leave, because not so far away, you will be able to discover the ancient theater.</p>
      <p>So take a walk till <Link to="https://maps.app.goo.gl/u8YoPr8FQsem4kkS8">here</Link> and enjoy the view.</p>
      <p>During the year, many events are held there, such as les Nuits de Fourvière.</p>
      <p>A music festival that took up all over Lyon.</p>
      <p>Sometimes there are also some representations, with shows with people disguized as Romans.</p>
      <p>Don't miss le Festival Romain next time.</p>
      <h3>The toor has come to an end</h3>
      <p>It breaks my heart to leave you there.</p>
      <p>But I hope it was a fun experience for you!</p>
      <p>Enjoy a last walk in <Link to="https://maps.app.goo.gl/xyc461XHosSJvjGT8">le Jardin de la Roseraie</Link></p>
      <p>See you soon!</p>
      <Link to="/Endtoor">
        <button>Thanks, Artooro.</button>
      </Link>
    </div>
  );
}

export default StartPage;
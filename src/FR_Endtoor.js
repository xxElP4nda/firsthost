import React from 'react';
import { Link } from 'react-router-dom';

function StartPage() {
  return (
    <div>
      <h2>Félicitations, vous venez de finir votre toor!</h2>
      <img src="https://i0.wp.com/media2.giphy.com/media/x790itVk2bD9K/giphy.gif" alt="Victory" />
      <p>J'espère que vous avez apprécié participer à cette expérience autant que nous nous sommes amusés à vous la préparer!</p>
      <p>Ce projet a mis quelques années à maturer, avant de finalement être lancé. </p>
      <p>Il n'a pas été facile de quitter mon boulot pour me lancer dans l'aventoor... </p>
      <p>Ce serait vraiment aimable de votre part de nous laisser un feedback!</p>
      <p>Nous aiderez-vous à nous améliorer?</p>
      <Link to="https://forms.gle/SXwfLs122Q2pA4V39">
        <button>Avec plaisir!</button>
      </Link>
      <Link to="https://www.instagram.com/artooro.world/"><button>Non, mais je vais vous suivre sur Instagram</button></Link>
    </div>
  );
}

export default StartPage;
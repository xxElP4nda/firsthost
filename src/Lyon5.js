import React from 'react';
import { Link } from 'react-router-dom';

function StartPage() {
  return (
    <div>
      <h3>Right! The Tartelette à la Praline!</h3>
      <img src="https://img-global.cpcdn.com/recipes/2955b85832182d54/600x852cq80/tartelette-a-la-praline-rose-photo-principale-de-la-recette.webp" alt="Tartelette à la Praline" />
      <p>Tartelette à la Praline is a small pastry that is very popular in Lyon.</p>
      <p>It is made with a buttery crust filled with a mixture of sugar and pink pralines, which are almonds coated in a pink-colored sugar.</p>
      <p>Pralines have become more Popular in Lyon but might have been invented somewhere else.</p>
      <p>Same as French Fries that should actually be called Belgian Fries because nowadays it is much more popular over there.</p>
      <p>Now that you are strolling around the "Vieux Lyon" neighborhood, let's see if I can show you some Traboules!</p>
      <h3>Traboules?!</h3>
      <p>Traboules are a type of passageway that is unique to the city of Lyon.</p>
      <p>They are narrow, covered passageways that connect buildings and courtyards, often running through the interior of blocks.</p>
      <p>Traboules were originally built in the 4th century to provide a shortcut for silk workers to transport their goods from one part of the city to another.</p>
      <p>Today, many of the traboules are still in use and can be explored by visitors to the city.</p>
      <p>Some of the most famous traboules in Lyon can be found in the Vieux Lyon neighborhood, where you can see beautiful examples of Renaissance architecture and hidden courtyards.</p>
      <p>Just be aware that some traboules are private and not open to the public, so be respectful of any signs or barriers you may encounter.</p>
      <p>Enjoy exploring these unique passageways and discovering the hidden gems of Lyon!</p>
      <p>Normally, I would send you to my friend Lucas, who works at the Diogene Library, but unfortunately he is doing something else now.</p>
      <p>So instead, I will let you go to the next place by answering the following question :</p>
      <p>What is my friend's name?</p>
      <Link to="https://media1.tenor.com/m/VUQaWMnKtgAAAAAd/no-let-me-think.gif"><button>Jean</button></Link>
      <Link to="https://media1.tenor.com/m/Ryw0q9D6ra0AAAAC/haha-gumichan.gif"><button>Pierre</button></Link>
      <Link to="/Lyon6">
        <button>Lucas</button>
      </Link>
    </div>
  );
}

export default StartPage;
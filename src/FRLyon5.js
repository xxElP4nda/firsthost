import React from 'react';
import { Link } from 'react-router-dom';

function StartPage() {
  return (
<div>
  <h3>Exactement ! La Tartelette à la Praline !</h3>
  <img src="https://img-global.cpcdn.com/recipes/2955b85832182d54/600x852cq80/tartelette-a-la-praline-rose-photo-principale-de-la-recette.webp" alt="Tartelette à la Praline" />
  <p>La Tartelette à la Praline est une petite pâtisserie très populaire à Lyon.</p>
  <p>Elle est faite avec une pâte sablée beurrée, garnie d’un mélange de sucre et de pralines roses, qui sont des amandes enrobées de sucre coloré en rose.</p>
  <p>Les pralines sont devenues très populaires à Lyon, mais elles auraient pu être inventées ailleurs.</p>
  <p>Un peu comme les "french fries", qui pourraient en réalité s’appeler les "belgian fries", puisqu’aujourd’hui elles sont bien plus populaires là-bas.</p>
  <p>Maintenant que tu te promènes dans le quartier du « Vieux Lyon », voyons si je peux te montrer quelques traboules !</p>
  <h3>Des traboules ?!</h3>
  <p>Les traboules sont un type de passage couvert unique à la ville de Lyon.</p>
  <p>Ce sont des passages étroits et couverts qui relient des immeubles et des cours intérieures, traversant souvent les blocs de bâtiments.</p>
  <p>Trabouler vient du latin "trans ambulare", qui signifie "passer à travers".
Particulièrement nombreuses dans le Vieux-Lyon, elles permettaient, au Moyen Age, de rejoindre rapidement les bateaux sur la Saône.</p>
  <p>Il existe des traboules plus récentes, celles de la Croix-Rousse, créées pour permettre aux tisseurs de Soie de transporter leur marchandise plus rapidement à travers la ville.</p>
  <p>Aujourd’hui, beaucoup de traboules sont encore utilisées et peuvent être explorées par les visiteurs de la ville.</p>
  <p>Certaines des traboules les plus célèbres de Lyon se trouvent dans le quartier du Vieux Lyon, où tu peux admirer de superbes exemples d’architecture Renaissance et des cours cachées.</p>
  <p>Fais simplement attention : certaines traboules sont privées et non ouvertes au public, alors respecte les panneaux ou barrières que tu pourrais rencontrer.</p>
  <p>Amuse-toi bien à explorer ces passages uniques et à découvrir les trésors cachés de Lyon !</p>
  <p>Normalement, je t’aurais envoyé voir mon ami Lucas, qui travaille à la librairie Diogène, mais malheureusement il est occupé ailleurs pour le moment.</p>
  <p>Alors à la place, je vais te laisser rejoindre le prochain lieu en répondant à la question suivante :</p>
  <p>Comment s’appelle mon ami ?</p>
  <Link to="https://media1.tenor.com/m/VUQaWMnKtgAAAAAd/no-let-me-think.gif"><button>Jean</button></Link>
  <Link to="https://media1.tenor.com/m/Ryw0q9D6ra0AAAAC/haha-gumichan.gif"><button>Pierre</button></Link>
  <Link to="/FRLyon6">
    <button>Lucas</button>
  </Link>
</div>
  );
}

export default StartPage;
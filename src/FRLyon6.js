import React from 'react';
import { Link } from 'react-router-dom';

function StartPage() {
  return (
<div>
  <h3>Sacré Lucas !</h3>
  <p>Malheureusement, il ne pourra pas t’aider, car il ne travaille plus là-bas...</p>
  <p>Si elle existe encore, on pouvait retrouver à la librairie Diogène des livres et grimoires très anciens.</p>
  <p>Mais aussi des collections de Bandes Dessinées, que les collectionneurs s'arrachent s'ils parviennent à mettre la main dessus...</p>
  <img src="https://teleportalyon.com/wp-content/uploads/2024/01/Traboules-Lyon-scaled.jpg" alt="Traboule Lyon" />
  <p>Viens visiter <Link to="https://maps.app.goo.gl/oLURsmTGBrZ2a6XC6">cette traboule-ci</Link>.</p>
  <p>Et sois calme, tu marches sous les maisons des gens.</p>
  <p>En venant en tant que visitoor, tu as le devoir de respecter les lieux et les gens que tu rencontreras.</p>
  <p>D'après Orelsan, c'est simple. Mais ce n'est pas <Link to="https://www.youtube.com/watch?v=2bjk26RwjyU">basique</Link> pour tout le monde.</p>
  <p>Une fois que tu as terminé, pour ton information, il y a aussi le musée du Cinéma et celui de la Soie pas loin.</p>
  <p>La soie était l’une des plus grandes industries de Lyon autrefois.</p>
  <p>Aujourd’hui, les temps ont changé.</p>
  <p>Les ouvriers qui travaillaient dans les manufactures de soie, étaient appelés les « Canuts ».</p>
  <p>Ils étaient connus pour être très rebelles et ont mené plusieurs révoltes au XIXe siècle.</p>
  <p>Ils réclamaient de meilleurs salaires et de meilleures conditions de travail.</p>
  <p>Nous avons fait de nombreux progrès, à l'échelle technologique, et pour preuve vous tenez entre vos mains un outil qui aurait été diabolisé au Moyen-Age.</p>
  <p>Par contre, on peut observer que certains sujets de société sont récurrents.</p>
  <p>Aujourd’hui, le mot « Canut » est encore utilisé pour désigner les habitants de Lyon.</p>
  <p>Dans n’importe quel bouchon, tu trouveras de la « Cervelle de Canut », une préparation à base de fromage blanc, d’échalotes, de ciboulette et parfois de vin blanc.</p>
  <p>Elle se déguste généralement tartinée sur du pain ou comme sauce pour les légumes.</p>
  <p>On peut la manger en apéritif sur du pain, ou, comme souvent en France, le fromage peut aussi être servi au dessert.</p>
  <p>Je n’ai plus d'inspiration pour la prochaine question, mais j'ai aussi étudié la physique à l'école.</p>
  <p>Quelle formule représente la théorie de la relativité d’Einstein ?</p>
  <Link to="https://media.tenor.com/geWyjrqNbdAAAAAM/cat-no.gif"><button>F = m.a</button></Link>
  <Link to="https://media1.tenor.com/m/lMbSkCq3HjQAAAAC/lara-croft-saying-no-tomb-raider.gif"><button>P.V = n.R.T</button></Link>
  <Link to="/FRLyon7">
    <button>E = m.c²</button>
  </Link>
</div>
  );
}

export default StartPage;
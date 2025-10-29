import React from 'react';
import { Link } from 'react-router-dom';

function StartPage() {
  return (
    <div>
      <h3>One more time!</h3>
  <p>Très bien, laisse-moi te replonger dans l’Histoire !</p>
  <p>Lyon était autrefois sous occupation romaine.</p>
  <p>À cette époque, elle s’appelait Lugdunum.</p>
  <p>C’est pourquoi, à différents endroits de la ville, tu peux encore voir les vestiges de cette civilisation.</p>
  <p>Je suis content que tu ne sois pas parti, car tout près d’ici, tu vas pouvoir découvrir l’ancien théâtre romain.</p>
  <p>Fais une petite marche jusqu’à <Link to="https://maps.app.goo.gl/u8YoPr8FQsem4kkS8">cet endroit</Link> et profite de la vue.</p>
  <p>Tout au long de l’année, de nombreux événements s’y déroulent, comme les Nuits de Fourvière.</p>
  <p>Un festival de musique qui fait vibrer tout Lyon.</p>
  <p>Parfois, il y a aussi des représentations, avec des spectacles où des gens sont déguisés en Romains.</p>
  <p>Ne manque pas le Festival Romain la prochaine fois !</p>
  <h3>La visite touche à sa fin</h3>
  <p>Ça me brise le cœur de te laisser ici.</p>
  <p>Mais j’espère que ce fut une expérience amusante pour toi !</p>
  <p>Profite d’une dernière promenade dans <Link to="https://maps.app.goo.gl/xyc461XHosSJvjGT8">le Jardin de la Roseraie</Link>.</p>
  <p>À très bientôt !</p>
  <Link to="/FR_Endtoor">
    <button>Merci, Artooro.</button>
  </Link>
</div>
  );
}

export default StartPage;
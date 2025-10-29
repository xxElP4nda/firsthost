import React from 'react';
import { Link } from 'react-router-dom';

function StartPage() {
  return (
<div>
  <h3>Et encore une bonne réponse !</h3>
  <p>Ok, un peu de culture scientifique générale n’a jamais fait de mal à personne.</p>
  <p>J’espère que tu as apprécié le « Vieux Lyon » et que tu es prêt à grimper.</p>
  <p>C’est le moment parfait pour une petite balade digestive, et pour gravir pas à pas les marches du succès.</p>
  <p>Tu sais, le succès est fait d’une multitude de petites victoires.</p>
  <p>Chacun avance à son rythme, mais à la fin du jeu, tu seras au sommet de la montagne.</p>
  <p>Tu vois où je veux en venir ?</p>
  <img src="https://www.philippeaubrun.fr/_media/img/large/dsc4933-dxo-1.jpg" alt="montée des Carmes"></img>
  <p>Très bien, Led Zeppelin. Il est temps de se retrouver à la <Link to="https://maps.app.goo.gl/DHZbD1rTEznhMQtv8">stairway to heaven</Link>.</p>
  <p>Pour ceux qui ne peuvent pas monter les escaliers, vous pouvez prendre <Link to="https://maps.app.goo.gl/vJSHgpgMMxy7Qc8Y8">la ficelle de Lyon</Link>, c’est ainsi qu’on appelle le funiculaire.
  Allez-y, prenez la ligne F2 en direction de Fourvière, et attendez vos compagnons.</p>
  <p>Pour les autres, commençons à grimper !</p>
  <p>Alors, combien de marches y a-t-il ? Continue de les compter. Mais regarde sur ta gauche. Il faudra bifurquer dès que tu aperçois d'autres marches vers le succès.</p>
  <p>Et continue de monter.</p>
  <p>Tu vas voir. L’une des structures les plus emblématiques de Lyon.</p>
  <p>Notre tour Eiffel !</p>
  <p>Tu l’avais deviné ?</p>
  <p>Bien sûr, ce n’est pas la vraie. Mais tu peux facilement tromper tes proches avec.</p>
  <p>Ce ne sera pas la première fois que ça arrive...</p>
  <p>Cependant ! Cette tour était accessible jusqu’en 1938. Peu de gens le savent, mais il y avait un restaurant à son sommet.</p>
  <p>D’abord possédé par Louis Gay, elle appartenait à sa femme après sa mort, puis fut vendue à la Radiodiffusion Française en 1953.</p>
  <p>Aujourd’hui, elle est toujours utilisée pour diffuser les signaux de radio et de télévision.</p>
  <p>Maintenant, laisse-moi t’emmener au point suivant.</p>
  <p>Et te proposer une autre devinette.</p>
  <p>La question est très simple.</p>
  <p>Si tu ne réponds pas correctement, tu vas te faire RickRoller.</p>
  <p>Quelle est la hauteur de la tour métallique ?</p>
  <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><button>100 m</button></Link>
  <Link to="/FR_Lyon8">
    <button>101 m</button></Link>
  <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><button>102 m</button></Link>
</div>

  );
}

export default StartPage;
import React from 'react';
import { Link } from 'react-router-dom';

function StartPage() {
  return (
    <div>
  <h3>Tu t’es fait RickRoller ?</h3>
  <p>J’espère que tu as aimé la chanson ! Et si ce n’est pas le cas… désolé.</p>
  <p>J’espère quand même que tu sais que je ne vais... </p>
  <p>Never gonna give you up! Never gonna let you down! Never gonna run around and… desert you !</p>
  <p>Bon, maintenant que tu es monté jusque-là, que tu as gravé chaque marche vers le succès, j’espère que tu es fier de toi.</p>
  <p>Parce que tu peux l’être totalement. Il faut être en forme pour y arriver ! Donc, sois-le!</p>
  <p>Alors, il est temps d’avoir ta récompense. Près de la Basilique, tu verras la skyline de Lyon.</p>
  <img src="https://www.usinenouvelle.com/mediatheque/0/0/1/000801100_896x598_c.jpg" alt="Skyline de Lyon"></img>
  <p>Une vue d’ensemble depuis l’endroit où nous avons commencé, si tu arrives à repérer la Place Bellecour.</p>
  <p>Devant toi, des bâtiments qui font désormais partie du paysage lyonnais.</p>
  <p>La Tour Part-Dieu, aussi appelée « le crayon », est très facile à reconnaître.
    Son sommet abrite aujourd’hui un hôtel (le Radisson Blu) et un restaurant (Le 360).</p>
  <p>À côté, tu verras la Tour Incity, le deuxième plus haut bâtiment de Lyon. Tu n’es pas prêt pour son surnom : on l’appelle « la gomme ».
    Tu vois le jeu de mots ? Un crayon et une gomme. Quand tu écris avec le crayon, tu peux utiliser la gomme pour corriger tes erreurs. Tu l’as maintenant !
    Et au-delà de cette imagination poétique, si tu regardes la tour la nuit, tu verras des couleurs : elles indiquent la qualité de l’air, du vert au rouge (bon à mauvais).</p>
  <p>La dernière, la plus haute sur la droite, s’appelle la Tour To-Lyon. C’est la plus récente.</p>
  <p>Elle abrite principalement des bureaux, mais aussi un hôtel et un restaurant/bar sur le toit appelé « Le Nuage ».</p>
  <p>Profite de la vue. Fais un selfie. Puis un autre. Tague <strong>@artooro.world</strong> !</p>
  <p>Admire encore une fois la vue, notre voyage touche doucement à sa fin.</p>
  <h3>Oh non, ne pleure pas !</h3>
  <p>J’ai passé un moment formidable à créer cette visite pour toi.</p>
  <p>J’espère que tu t’es amusé avec moi, que tu as apprécié les questions et les anecdotes tout au long de cette aventoor.</p>
  <p>Je t’invite maintenant à la partager avec tes amis, pour qu’eux aussi puissent s’amuser en étant guidés par un local.</p>
  <p>Je te conseille aussi de visiter la Basilique de Fourvière.</p>
  <p>Au fait, sais-tu ce qui différencie une cathédrale d’une basilique ?</p>
  <p>Dans une cathédrale siège un évêque. Une basilique, elle, a un lien fort avec l’histoire et le culte, et son titre est accordé par le Pape.</p>
  <h3>Tu en veux encore ?</h3>
  <Link to="/FR_Lyon9">
    <button>Hit me baby one more time (au sens figuré of course) !</button>
  </Link>
  <Link to="/FR_endtoor"><button>Non merci, je veux rentrer, mes pieds me font mal !</button></Link>
</div>
  );
}

export default StartPage;
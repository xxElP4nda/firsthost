import React from 'react';
import { Link } from 'react-router-dom';

function StartPage() {
  return (
<div>
  <h3>Je savais qu’on pouvait se faire confiance !</h3>
  <p>Laisse-moi te guider !</p>
  <p>Alors, tiens-toi devant ce grand cheval.</p>
  <p>Positionne-toi de manière à ce que, lorsque tu la statue du le cheval et de Sa Majesté Louis Gros Ego XIV, la queue du cheval soit à gauche.</p>
  <p>Parfait, maintenant tu dois traverser toute la Place Bellecour, en sortant par son coin supérieur droit, puis continuer en direction du Pont Bonaparte.</p>
  <img src="https://www.grandlyon.com/fileadmin/_processed_/9/5/csm_Actu_Pont-Bonaparte__-J%C3%A9r%C3%A9my-Cuenin-M%C3%A9tropole-de-Lyon_88a5b9bc9d.webp" alt="Pont Bonaparte" />
  <p>Magnifique vue là-bas, tu verras...</p>
  <h3>Napoléon Bonaparte et la Lo-Fi Girl !</h3>
  <p>Tu es maintenant sur le pont Bonaparte, en route vers la Place Saint-Jean.</p>
  <p>Oui, c'est le même Bonaparte que Napoléon Bonaparte. Le même type qui a dirigé un immense empire à travers l’Europe et qui s’est fait arrêter par les Russes.</p>
  <p>De solides Russes, dans des conditions hivernales. Que pouvait-il y faire?</p>
  <p>Au fait, savais-tu que Napoléon Bonaparte n’était pas si petit ? Il mesurait environ 1,70 m (5 pieds 7 pouces).</p>
  <p>Oups, je m’égare encore.</p>
  <h2>Bon, c’est bientôt l’heure du selfie !</h2>
  <p>Une fois que tu atteins le pont, regarde sur ta droite. Ce sont les fameuses « Pentes de la Croix-Rousse ».</p>
  <p>Magnifique, n’est-ce pas ? Et si tu connais la Lo-Fi Girl, ces paysages pourraient te rappeler quelque chose...</p>
  <p>Et pour ceux qui ne la connaissent pas encore, <Link to="https://www.youtube.com/watch?v=CFGLoQIhmow&t=219s">la voici</Link>.</p>
  <p>Elle a accompagné de nombreuses personnes à travers le monde à étudier et à se concentrer profondément sur différentes tâches.</p>
  <p>Maintenant, tu peux faire un selfie, ou demander à quelqu’un de te prendre en photo !</p>
  <p>Une fois que tu as fini de te prendre en photo un peu partout, n’hésite pas à publier la photo et à taguer <strong>@artooro.world</strong> sur ton Instagram.</p>
  <p>C'est un geste on ne peut plus altruiste de votre part. Vraiment. Ça nous aide à développer notre activité, et d'occasionnellement déguster une délicieuse Tartelette à la Praline.</p>
  <p>Continue de marcher. On en reparlera plus tard.</p>
  <p>Bon, maintenant que tu as traversé le pont, traverse la rue.</p>
  <p>Continue tout droit et tu devrais voir la Place Saint-Jean sur ta droite.</p>
  <p>Petite question piège : Comment dit-on "Soleil" en anglais ?</p>
  <Link to="https://media1.tenor.com/m/VUQaWMnKtgAAAAAd/no-let-me-think.gif"><button>Teletubbie baby</button></Link>
  <Link to="https://media1.tenor.com/m/Ryw0q9D6ra0AAAAC/haha-gumichan.gif"><button>Dark Vador</button></Link>
  <Link to="/FR_Lyon4">
    <button>Sun</button>
  </Link>
</div>
  );
}

export default StartPage;
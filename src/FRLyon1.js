import React from 'react';
import { Link } from 'react-router-dom';

function StartPage() {
  return (
    <div>
     <img src="https://media.lyon-france.com/1600x600/131373/333875.jpg" alt="Place Bellecour"></img>
     <h2>Bienvenue à la Place Bellecour !</h2> 
     <p>Juste pour être sûr que vous êtes au bon endroit, vérifiez si vous êtes <Link to="https://maps.app.goo.gl/mbh5ToiV7ixU6Sqn9">ici</Link> avant de commencer.</p> 
     <p>La Place Bellecour est l’un des lieux les plus emblématiques de Lyon.</p> 
     <p>Les habitants de Lyon, aussi appelés « Gones » dans le dialecte local, avaient l’habitude de se donner rendez-vous « sous la queue du cheval ».</p> 
     <p>Je vous laisse imaginer combien d’histoires d’amour ont commencé ici.</p> 
     <p>Assez de romantisme. Cette statue a été inaugurée en 1825.</p> 
     <p>La légende raconte qu’il y avait un trésor sous la statue du cheval.</p> 
     <p>Et apparemment, ce n’était pas qu’une légende. Car en 1966, on a découvert une caisse en plomb en dessous.</p> 
     <p>Une fois le coffre ouvert, seule de l’eau s'en est échappée. On pouvait lire la déception sur le visage des personnes présentes.</p> 
     <p>Jusqu’à ce qu’ils remarquent rapidement que le coffre avait un compartiment secret.</p> 
     <p>Et là… boom ! De vieilles médailles et des pièces d’or. Pas encore le trésor de Gol D. Roger, mais déjà quelqueo chose !</p> 
     <p>Bon, pour continuer, je vais vous poser une question. C'est dans votre intérêt de répondre correctement.</p> 
     <p>Quel est le nom du cavalier ?</p> 
     <Link to="/FRLyon2"> <button>Louis XIV, aussi connu sous le nom de Roi Soleil</button> </Link> 
     <button>Astérix chevauchant son cheval Pégasix</button> 
     <button>Louis Croix-Vé-Bâton</button>
    </div>
  );
}

export default StartPage;
import React from 'react';
import { Link } from 'react-router-dom';

function StartPage() {
  return (
    <div>
      <img src="https://media.istockphoto.com/id/921980974/fr/photo/sculpture-de-sun-sur-un-b%C3%A2timent-%C3%A0-lille-france.jpg?s=1024x1024&w=is&k=20&c=fkxGN_Qqhe3gvCplLJMa4JhteqqXyEt2u40gO2uWiG8=" alt="Soleil" />
      <p>Bien joué, ou peut-être que tu as simplement compris que cliquer sur les autres boutons ne servait à rien.</p>
      <p>Louis XIV était connu sous le nom de « Roi Soleil », et cela n’a absolument rien à voir avec un quelconque talent en astrophysique.</p>
      <p>« Roi Soleil » se traduit littéralement par « Sun King », et cela fait référence à l’ego surdimensionné du roi.</p>
      <p>Un peu l’Elon Musk de l’époque, mais à cheval — ce qui est plus écologique qu’une voiture.</p>
      <h3>Prochaine étape !</h3>
      <p>Tu viens de gagner le lien vers notre prochaine destination !</p>
      <p>Merci de te diriger vers la <Link to="https://maps.app.goo.gl/HzXAAmtXxwczoHUz5">Place Saint-Jean</Link> où nous continuerons notre aventure.</p>
      <p>Pour cela, suis Google Maps et, une fois arrivé, <Link to="/Lyon4">appuie ici</Link>.</p>
      <p>Ou laisse-moi te guider.</p>
      <p><Link to="/FRLyon3"><button>Je te suis !</button></Link>
      <Link to="/FRLyon4"><button>Je suis déjà sur la Place Saint-Jean</button></Link></p>
    </div>
  );
}

export default StartPage;
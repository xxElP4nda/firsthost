import React from 'react';
import { Link } from 'react-router-dom';

function StartPage() {
  return (
    <div>
      <img src="https://media.istockphoto.com/id/921980974/fr/photo/sculpture-de-sun-sur-un-b%C3%A2timent-%C3%A0-lille-france.jpg?s=1024x1024&w=is&k=20&c=fkxGN_Qqhe3gvCplLJMa4JhteqqXyEt2u40gO2uWiG8=" alt="Soleil" />
      <p>Well done, or maybe you just realized that pushing the other buttons was useless.</p>
      <p>Louis XIV was known as "Le Roi Soleil", and it does not have anything to do with his talent in astrophysics.</p>
      <p>"Roi Soleil", litterally translates into "Sun King", and it is related to the king's surdimensionated ego.</p>
      <p>Kind of the Elon Musk of those times, but on a horse, which is more sustainable than a car.</p>
      <h3>Next step!</h3>
      <p>You just won the link to our next destination!</p>
      <p>Please walk to <Link to="https://maps.app.goo.gl/HzXAAmtXxwczoHUz5">Place Saint-Jean</Link> where we will keep going with our adventoor.</p>
      <p>To do so, follow Google Maps and once you arrive <Link to="/Lyon4">press here</Link>.</p>
      <p>Or let me guide you through it.</p>
      <p><Link to="/Lyon3"><button>I'll follow your lead!</button></Link><Link to="/Lyon4"><button>I'm already in Place Saint-Jean</button></Link></p>
    </div>
  );
}

export default StartPage;
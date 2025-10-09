import React from 'react';
import { Link } from 'react-router-dom';

function StartPage() {
  return (
    <div>
    <img src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4npjtRQsMORG_BCgVLVkqCoBfKQa1Lt3C6z3jyWFcmKGoxkFBLUvyOIxp2mWPf7ywoYdy3uCSay8HPLjWtBFivHk0pqwdbbOp0O-fhhzOkuiU4veVZcVdDKccNfbhPgkwwK8Xq4Q=w1080-h624-n-k-no"></img>
      <h2>Welcome to Place Bellecour!</h2>
      <p>Just to be sure you are at the right place, check if you are <Link to="https://maps.app.goo.gl/mbh5ToiV7ixU6Sqn9">here</Link> before you start</p>
      <p>The Place Bellecour is one of the most iconic places of Lyon.</p>
      <p>Lyonese inhabitants, also called "Gones" in the local dialect, were used to set their meeting place "under the horse's tail".</p>
      <p>I let you imagine how many romances have started here.</p>
      <p>Enough with the romantism. This statue was inaugurated in 1825.</p>
      <p>Legend says that there was a treasure under the horse statue.</p>
      <p>And apparently it was not only a legend. Because in 1966, they discovered a lead case under it.</p>
      <p>Once the safe was opened, only water came out. Everybody around felt delulu.</p>
      <p>Until they quickly spotted that the safe had a secret compartment.</p>
      <p>And then. Boom. Some old medals and gold coins. Not yet Gol D. Roger, but still something!</p>
      <p>Well, to continue I will ask you a question. You better answer right.</p>
      <p>Can you tell the name of the Horse rider?</p>
      <Link to="/Lyon2">
        <button>Louis XIV as known as Le Roi Soleil</button>
      </Link>
        <button>Astérix riding his horse Pégasix</button>
        <button>The famous thief, Nicolas Sarkozy</button>
    </div>
  );
}

export default StartPage;
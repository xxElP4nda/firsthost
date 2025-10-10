import React from 'react';
import { Link } from 'react-router-dom';

function StartPage() {
  return (
    <div>
      <img src="https://placekitten.com/400/200" alt="Cute kitten" />
      <p>Well done, else you just realized that pushing the other buttons was useless.</p>
      <p>Louis XIV was known as "Le Roi Soleil", and it does not have anything to do with his talent in astrophysics.</p>
      <p>"Roi Soleil", which litterally translates into "Sun King", is related to the king's surdimensionated ego.</p>
      <p>Kind of the Elon Musk of these times, but without the Tesla.</p>
      <p>You just won the link to our next destination!</p>
      <p>Please walk to <Link to="https://maps.app.goo.gl/HzXAAmtXxwczoHUz5">Place Saint-Jean</Link> where we will take on our next adventoors.</p>
      <p>To do so, follow Google Maps.</p>
      <p>Or.</p>
      <p>Follow my lead, and get your head up from your phone!</p>
      <p>So you are standing in front of that big Horse.</p>
      <p>Move around so that when you look at him, and his fat-ass ego Majesty Louis XIV, the tail of the horse is on the left.</p>
      <p>Good, now you have to cross the whole Place Bellecour, exiting it from its upper right corner and continue towards the Pont Bonaparte.</p>
      <p>Beautiful view over there, you will see. </p>
      <p>You are now standing on Bonaparte's bridge towards Place Saint-Paul.</p>
      <p>Yeah, Bonaparte. Same guy that ruled a huge Empire all over Europe and got stopped by the Russians.</p>
      <p>Strong Russians in wintery conditions. What can you do?</p>
      <p>By the way, Napoléon Bonaparte, was not that small, he was about 1,70m.</p>
      <p>So 5ft, 7in. Can I comment the lovely measuring system?</p>
      <p>Sorry, I'm getting lost again.</p>
      <p>Once you reach the bridge, take a look on your right. These are knowns as "Les Pentes de Croix-Rousse".</p>
      <p>Beautiful isn't it? And if you are familiar with the LoFi Girl, these landscapes might remind you of something.</p>
      <p>God I love my job.</p>
      <p>Once you finished selfying yourself around, don't hesitate to post it and tag @artooro.world on your instagram.</p>
      <p>We appreciate it. Really. It helps me putting money on my bank account, so I can eat a delicious Tartelette aux Pralines.</p>
      <p>Tartelette aux Pralines. A sweet mix between butter and Pralines. Gets you diabetes just by watching it.</p>
      <p>Totally worth it.</p>
      <p>Ok, so now you've crossed the Bridge, crossed one street and then you should see the Place Saint-Jean on your right.</p>
      <p>Tricky question for you. What is the French word for "Sun"?</p>
      <button>Bonaparte</button>
      <button>Tartelette à la Praline</button>
      <Link to="/Lyon3">
        <button>Soleil</button>
      </Link>
    </div>
  );
}

export default StartPage;
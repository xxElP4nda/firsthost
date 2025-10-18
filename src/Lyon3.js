import React from 'react';
import { Link } from 'react-router-dom';

function StartPage() {
  return (
    <div>
      <h3>I knew we could trust each other!</h3>
      <p>Let me guide you through it!</p>
      <p>So you are standing in front of that big Horse.</p>
      <p>Move around so that when you look at him, and his fat-ass ego Majesty Louis XIV, the tail of the horse is on the left.</p>
      <p>Good, now you have to cross the whole Place Bellecour, exiting it from its upper right corner and continue towards the Pont Bonaparte.</p>
      <img src="https://www.grandlyon.com/fileadmin/_processed_/9/5/csm_Actu_Pont-Bonaparte__-J%C3%A9r%C3%A9my-Cuenin-M%C3%A9tropole-de-Lyon_88a5b9bc9d.webp" alt="Pont Bonaparte" />
      <p>Beautiful view over there, you will see... </p>
      <h3>Napoléon Bonaparte and the Lo-Fi Girl!</h3>
      <p>You are now standing on Bonaparte's bridge on your way to Place Saint-Jean.</p>
      <p>Yeah, Bonaparte as in Napoléon Bonaparte. The same guy who ruled a huge Empire all over Europe and got stopped by the Russians.</p>
      <p>Strong Russians in wintery conditions. What can you do?</p>
      <p>By the way, did you know that Napoléon Bonaparte, was not that small, he was about 1,70m (5ft, 7in).</p>
      <p>Oops, I'm getting lost again.</p>
      <h2>Alright, it's selfie time!</h2>
      <p>Once you reach the bridge, take a look on your right. These are knowns as "Les Pentes de Croix-Rousse".</p>
      <p>Beautiful isn't it? And if you are familiar with the Lo-Fi Girl, these landscapes might remind you of something.</p>
      <p>And for those who don't know her yet, <Link to="https://www.youtube.com/watch?v=CFGLoQIhmow&t=219s">there she is</Link>.</p>
      <p>She helped many people all around the world to study and focus deeply into different tasks.</p>
      <p>Now, you can take a selfie, or ask someone to take a picture for you!</p>
      <p>Once you finished selfying yourself around, don't hesitate to post it and tag @artooro.world on your instagram.</p>
      <p>We appreciate it. Really. It helps us putting money on the bank account, so we can make a morning Teambuilding around a delicious Tartelette à la Praline.</p>
      <p>Keep walking. We'll talk about it later.</p>
      <p>Ok, so now you've crossed the Bridge, cross the street. </p>
      <p>Keep straight and then you should see the Place Saint-Jean on your right.</p>
      <p>Tricky question for you. What is the French word for "Sun"?</p>
      <Link to="https://media1.tenor.com/m/VUQaWMnKtgAAAAAd/no-let-me-think.gif"><button>Bonaparte</button></Link>
      <Link to="https://media1.tenor.com/m/Ryw0q9D6ra0AAAAC/haha-gumichan.gif"><button>Tartelette à la Praline</button></Link>
      <Link to="/Lyon4">
        <button>Soleil</button>
      </Link>
    </div>
  );
}

export default StartPage;
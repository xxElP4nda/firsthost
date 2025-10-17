import React from 'react';
import { Link } from 'react-router-dom';

function StartPage() {
  return (
    <div>
      <h3>Did you get RickRolled?</h3>
      <p>Hope you enjoyed the song! And if you did not, well I am sorry.</p>
      <p>I hope you know that I am... </p>
      <p>Never gonna give you up! Never gonna let you down! Never gonna run around and... desert you ! </p>
      <p>Well, now that you have came up that far, that you've taken each single step towards success, I hope that you are proud of you.</p>
      <p>Because you can totally be. It requires to be in good shape to do so.</p>
      <p>So, it is time for a reward. Close to the Basilique, you will see the skyline of Lyon.</p>
      <p>A whole vision from where we started, if you can spot Place Bellecour.</p>
      <p>In front of you, some buildings that are now part of Lyon's landscape.</p>
      <p>The Tour Part-Dieu, as known as "le crayon", litterally the pencil, is very easy to spot.
        The top is now made of an hotel (Radisson Blu) and a restaurant (Le 360).</p>
      <p>Next to it, you will see the Incity Tower, the second highest building of Lyon. You are not prepared for its nickname. It is called... "la gomme", which translates to the eraser.
        You got it? A pencil, and an eraser. So when you write, with the pencil, you can use the eraser to correct your mistakes. You should have it now.
        Beside that insightful imagination, if you watch that tower at night, you will see some colors. These colors are meant to show you the air quality from green to red (good to bad).</p>
      <p>Last tallest one on the right, is called la Tour To-Lyon. It is the most recent one.</p>
      <p>It is mainly offices, but also a hotel and a rooftop restaurant/bar called "Le Nuage".</p>
      <p>Enjoy the view. Take a selfie. Take another one. Tag @artooro.world !</p>
      <p>Enjoy the view again, our trip is slowly coming to an end.</p>
      <h3>No baby, don't cry!</h3>
      <p>I spent a wonderful time creating this toor for you.</p>
      <p>Hopefully you had fun with me, enjoyed the questions and information you had during this journey.</p>
      <p>I now invite you to share it with your friends, so they can also have fun being guided by a local.</p>
      <p>Please visit the Basilique de Fourvière.</p>
      <p>Oh do you know what differentiates a Cathedral from a Basilic?</p>
      <p>In a Cathedral seats a Bishop. A Basilic has a strong bond to history and cult, and the title was given by the Pope.</p>
      <h3>Want more?</h3>
      <Link to="/Lyon9">
        <button>Please, one more time</button>
      </Link>
      <Link to="/endtoor"><button>No, thanks. I want to go home, my feet hurt!</button></Link>
    </div>
  );
}

export default StartPage;
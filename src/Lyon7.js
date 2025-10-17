import React from 'react';
import { Link } from 'react-router-dom';

function StartPage() {
  return (
    <div>
      <h3>And you got it right again!</h3>
      <p>Ok, a little bit of general scientific culture never hit anyone while he was on the ground.</p>
      <p>I hope you enjoyed the "Vieux Lyon" and that you are ready to go up.</p>
      <p>It is the perfect moment for a digestive walk, and taking small steps towards your success.</p>
      <p>You know, success is made of a lot of little victories.</p>
      <p>Everyone can take it at his own pace, but at the end of the game, you will be on top of the mountain.</p>
      <p>See where I am heading you to?</p>
      <img src="https://www.philippeaubrun.fr/_media/img/large/dsc4933-dxo-1.jpg" alt="montée des carmes"></img>
      <p>Alright, Led Zeppelin. It's time to meet at the <Link to="https://maps.app.goo.gl/DHZbD1rTEznhMQtv8">stairway to heaven</Link>.</p>
      <p>For those who can't climb stairs, you can take <Link to="https://maps.app.goo.gl/vJSHgpgMMxy7Qc8Y8">la ficelle de Lyon</Link>, which is how we call the funicular.
      Just go there and, take the F2 line towards Fourvière, and wait for your companions.</p>
      <p>For the ones who can, let's start climbing!</p>
      <p>So how many steps are there? Keep counting them. But look in front of you, at some point you will have to turn left.</p>
      <p>And keep climbing.</p>
      <p>You will see. One of the most iconical structures of Lyon.</p>
      <p>Our Eiffel Tower!</p>
      <p>You name it!</p>
      <p>Of course it is not the real one. However, you can confuse your relatives with it.</p>
      <p>It would not be the first time that it happens...</p>
      <p>However! That tower was accessible til 1938. Very few people knows it, but it had a restaurant at its top.</p>
      <p>First owned by Louis Gay, it belonged to his wife at his death and was then sold to the French Radio Telecomunications in 1953.</p>
      <p>Nowadays, it is still used for broadcasting radio and television signals.</p>
      <p>Now, let me bring you to the next point.</p>
      <p>The question is very simple.</p>
      <p>If you don't answer right, you will be RickRolled.</p>
      <p>How high is the metallic tower?</p>
      <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><button>100m</button></Link>
      <Link to="/Lyon8">
        <button>101m</button></Link>
      <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><button>102m</button></Link>
    </div>
  );
}

export default StartPage;
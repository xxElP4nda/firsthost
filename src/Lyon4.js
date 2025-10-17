import React from 'react';
import { Link } from 'react-router-dom';

function StartPage() {
  return (
    <div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Place_Saint-Jean_%C3%A0_Lyon.jpg" alt="Place Saint Jean-Baptiste" />
      <p>Welcome to the Place Saint-Jean!</p>
      <p>Here you can see the famous Cathédrale Saint-Jean-Baptiste de Lyon.</p>
      <p>This cathedral is known for its unique astronomical clock, which dates back to the 14th century.</p>
      <p>It's a beautiful example of Gothic architecture, and it's definitely worth a visit inside!</p>
      <p>Did you know that the cathedral has a mix of Romanesque and Gothic styles due to its long construction period?</p>
      <p>Take your time to explore the area, and don't forget to look up at the clock when you're inside!</p>
      <p>Once you're ready, head towards the Rue du Bœuf, a charming street filled with history, food smell and character.</p>
      <p>It's just a short walk from here, and you'll find some great spots for food and drinks along the way!</p>
      <p>Talking about food, you will see many "Bouchons" along the way.</p>
      <p>These are traditional Lyonnais restaurants where you can try local specialties like "Saucisson Lyonnais", "Oeuf meurette" and "Andouillette".</p>
      <p>Bon appétit!</p>
      <p>Question : What is red, can clog your arteries, gives you diabetes but is delicious?</p>
      <Link to="/Lyon5">
        <button>Tartelette à la Praline</button>
      </Link>
      <Link to="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExajdvb3pvd3MxZ3ppeGZidWdrMHlvcDg1b3RwN3Y3OGZlN3d3emRreiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6ozoD1ByqYv7ARIk/giphy.gif"><button>A bloody mary</button></Link>
      <Link to="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeW5zZzEwZTFsNWNpb2syYTBnOGt2M2MybWU4cDU0YXVzanVwbnFqaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1BQdjXovIqSLS/giphy.gif"><button>Iago from Aladdin</button></Link>
    </div>
  );
}

export default StartPage;
import React from 'react';
import { Link } from 'react-router-dom';

function StartPage() {
  return (
<div>
  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Place_Saint-Jean_%C3%A0_Lyon.jpg" alt="Place Saint Jean-Baptiste" />
  <h2>Bienvenue sur la Place Saint-Jean !</h2>
  <p>Ici, tu peux voir la célèbre Cathédrale Saint-Jean-Baptiste de Lyon.</p>
  <p>Cette cathédrale est connue pour son horloge astronomique unique, qui date du XIVe siècle.</p>
  <p>C’est un magnifique exemple d’architecture gothique, et cela vaut vraiment la peine d’y entrer pour la visiter !</p>
  <p>Savais-tu que la cathédrale mélange les styles roman et gothique à cause de sa longue période de construction ?</p>
  <p>Prends ton temps pour explorer les environs, et n’oublie pas de lever les yeux vers l’horloge lorsque tu seras à l’intérieur !</p>
  <p>Une fois prêt, dirige-toi vers la Rue du Bœuf, une charmante rue pleine d’histoire, de bonnes odeurs de cuisine et de caractère.</p>
  <p>C’est à seulement quelques pas d’ici, et tu trouveras de très bons endroits pour manger et boire sur le chemin !</p>
  <p>En parlant de nourriture, tu verras de nombreux « Bouchons » le long de la route.</p>
  <p>Ce sont des restaurants traditionnels lyonnais où tu peux goûter des spécialités locales comme le "Saucisson Lyonnais", l’"Œuf meurette" et le "Tablier de Sapeur".</p>
  <p>Bon appétit !</p>
  <p>Question : Qu’est-ce qui est rouge, peut boucher tes artères, te donne le diabète mais est totalement délicieux ?</p>
  <Link to="/FRLyon5">
    <button>La Tartelette à la Praline</button>
  </Link>
  <Link to="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExajdvb3pvd3MxZ3ppeGZidWdrMHlvcDg1b3RwN3Y3OGZlN3d3emRreiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6ozoD1ByqYv7ARIk/giphy.gif"><button>Un Bloody Mary</button></Link>
  <Link to="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeW5zZzEwZTFsNWNpb2syYTBnOGt2M2MybWU4cDU0YXVzanVwbnFqaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1BQdjXovIqSLS/giphy.gif"><button>Iago dans Aladdin</button></Link>
</div>
  );
}

export default StartPage;
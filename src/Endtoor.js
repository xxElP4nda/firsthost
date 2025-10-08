import React from 'react';
import { Link } from 'react-router-dom';

function StartPage() {
  return (
    <div>
      <h2>Congratulations, you just ended your toor!</h2>
      <img src="https://placekitten.com/400/200" alt="Cute kitten" />
      <p>I hope you enjoyed it as much as we did to prepare it!</p>
      <p>This project took a few years to be matured, and then get ready to launch. </p>
      <p>It was a pretty hard choice to quit the job and start the adventoor... </p>
      <p>We would really appreciate if you could give us a feedback!</p>
      <p>Will you help us improve?</p>
      <Link to="/endtoor">
        <button>Of course I am in!</button>
      </Link>
    </div>
  );
}

export default StartPage;
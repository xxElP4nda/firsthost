import React from 'react';
import { Link } from 'react-router-dom';

function StartPage() {
  return (
    <div>
      <h2>Congratulations, you just ended your toor!</h2>
      <img src="https://i0.wp.com/media2.giphy.com/media/x790itVk2bD9K/giphy.gif" alt="Victory" />
      <p>I hope you enjoyed it as much as we did to prepare it!</p>
      <p>This project took a few years to be matured, and then get ready to launch. </p>
      <p>It was a pretty hard choice to quit the job and start the adventoor... </p>
      <p>We would really appreciate if you could give us a feedback!</p>
      <p>Will you help us improve?</p>
      <Link to="https://forms.gle/SXwfLs122Q2pA4V39">
        <button>Of course I am in!</button>
      </Link>
      <Link to="https://www.instagram.com/artooro.world/"><button>No, but I'll follow you on Instagram</button></Link>
    </div>
  );
}

export default StartPage;
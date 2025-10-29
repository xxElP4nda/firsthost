import React from 'react';
import { Link } from 'react-router-dom';

function StartPage() {
  return (
    <div>
      <img src="https://placekitten.com/400/200" alt="Cute kitten" />
      <p>Welcome to the start page of your journey!</p>
      <p>Ready to continue?</p>
      <Link to="/Lyon14">
        <button>Go to next place</button>
      </Link>
    </div>
  );
}

export default StartPage;
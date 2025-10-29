import React from 'react';
import { Link } from 'react-router-dom';

function Lyon1() {
  return (
    <div>
      <img src="https://placekitten.com/400/200" alt="Cute kitten" />
      <p>Welcome to the start page of your journey!</p>
      <p>Ready to continue?</p>
      <Link to="/middle">
        <button>Go to next page</button>
      </Link>
    </div>
  );
}

export default Lyon1;
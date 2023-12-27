// Component/Routing.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Routing() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/home"><h2>Home</h2></Link>
          </li>
          <li>
            <Link to="/about"><h2>About</h2></Link>
          </li>
          <li>
            <Link to="/users"><h2>Users</h2></Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Routing;

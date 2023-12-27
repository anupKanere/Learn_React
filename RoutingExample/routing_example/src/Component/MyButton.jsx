import React from 'react';
import { Link } from 'react-router-dom';

function MyButton() {
  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '20px',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none', // To remove default link underline
  };

  return (
    <div>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <button style={buttonStyle}>Back</button>
      </Link>
    </div>
  );
}

export default MyButton;

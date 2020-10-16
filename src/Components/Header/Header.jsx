import React from 'react';
import './Header.scss';

function Header() {
  return (
    <div>
      <div className='header'>
        <div className='header-img'>
          <img src='../../Images/flyball.png' alt='flying ball' />
        </div>

        <div className='welcome'>
          <h1>Welcome to React</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            expedita?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;

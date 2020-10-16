import React from 'react';
import './Navigation.scss';

function Navigation() {
  return (
    <div>
      <div className='nav'>
        <div className='brand'>ReactWeb</div>
        <div className='nav-links'>
          <a href='#' className='link'>
            Home
          </a>
          <a href='#' className='link'>
            About
          </a>
          <a href='#' className='link'>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navigation;

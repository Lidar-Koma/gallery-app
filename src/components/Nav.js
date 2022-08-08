import React from 'react';
import {Link} from 'react-router-dom';

// Navbar for original links
const Nav = () => {
    return (
        <nav className="main-nav">
        <ul>
          <li><Link to='/search/mountains'>Mountains</Link></li>
          <li><Link to='/search/dogs'>Dogs</Link></li>
          <li><Link to='/search/computers'>Computers</Link></li>
        </ul>
      </nav>
    )
}

export default Nav;
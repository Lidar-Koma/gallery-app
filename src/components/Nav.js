import React from 'react';
import {Link} from 'react-router-dom';

// Navbar for original links
const Nav = () => {
    return (
        <nav className="main-nav">
        <ul>
          <li><Link to='/mountains'>Mountains</Link></li>
          <li><Link to='/dogs'>Dogs</Link></li>
          <li><Link to='/computers'>Computers</Link></li>
        </ul>
      </nav>
    )
}

export default Nav;
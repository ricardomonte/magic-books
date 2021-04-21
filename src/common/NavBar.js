import React from 'react';
import SvgUser from './svgUser';

const NavBar = () => (
  <nav className="navigation">
    <div className="logo-magic">
      <h1>Bookstore CMS</h1>
    </div>
    <div className="linkuser">
      <div className="links">
        <p>Books</p>
        <p>categories</p>
      </div>
      <div className="user-logo">
        <SvgUser />
      </div>
    </div>
  </nav>
);

export default NavBar;

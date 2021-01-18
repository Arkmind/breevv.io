import React from 'react';

import './style.css'

import Search from '../../../components/Search/Search'

function Navbar() {
  return (
    <nav className="flex justify-end">
        <Search></Search>
    </nav>
  );
}

export default Navbar;

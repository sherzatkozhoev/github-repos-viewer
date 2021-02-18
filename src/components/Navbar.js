import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand navbar-dark bg-dark bd-navbar">
    <div className="container flex-column flex-md-row px-3">
      <div className="navbar-brand mr-0 mr-md-2">Github repos viewer</div>

      <div className="navbar-nav-scroll ml-md-auto">
        <ul className="navbar-nav flex-row">
          <li className="nav-item">
            <NavLink to="/" exact className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">About</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Navbar;
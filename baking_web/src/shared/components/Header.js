import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <nav className="navbar is-warning">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma" width="112" height="28" />
        </a>
        <div className="navbar-burger burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start"></div>
        <div className="navbar-end">
          <div className="navbar-item has-dropdown is-hoverable">
            <span className="navbar-link">User Name</span>
            <div className="navbar-dropdown">
              <Link to="" className="navbar-item">Navbar</Link>
              <span className="navbar-item">Logout</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
);

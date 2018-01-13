import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout } from '../../auth/userActions';

class Header extends Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout();
  }

  render() {
    return (
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
                <Link to="/notes" className="navbar-item">My Notes</Link>
                <a className="navbar-item" onClick={this.handleLogout}>Logout</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default connect(null, { logout })(Header);

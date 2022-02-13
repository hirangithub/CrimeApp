import React, { Component } from 'react';
import { NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
//import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  render () {
    return (
      <ul className="navbar-nav">
          <NavItem>
              <NavLink tag={Link} className="selected" to="/">බල අපරාධ (GCR)</NavLink>
          </NavItem>
          <NavItem>
              <NavLink tag={Link} to="/MOR">සුළු අපරාධ (MOR)</NavLink>
          </NavItem>
          <NavItem>
              <NavLink tag={Link} to="/MOR">සුළු පැමණලි (MCR)</NavLink>
          </NavItem>
          <NavItem>
              <NavLink tag={Link} to="/MOR">දුෂණ වැටලීම් (VICE)</NavLink>
          </NavItem>
      </ul>
    );
  }
}
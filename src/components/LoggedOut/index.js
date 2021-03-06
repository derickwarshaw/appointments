// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
// Internals
import './index.css';

const LoggedOut = (props) => (
  <nav className="blue darken-4">
    <div className="nav-wrapper">
      <Link to="/" className="brand-logo apptly">&nbsp;&nbsp;Apptly</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/login">Log In!</Link></li>
      </ul>
    </div>
  </nav>
);

export default LoggedOut;

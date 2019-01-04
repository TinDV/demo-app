import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import {logo} from '../../../images/logo.svg';

class Nav extends Component {
  render() {
    return (
      <div id="menu">
        <div className="btn logo"><Link to="/"><img src="/images/logo.jpg" alt="logo" /></Link></div>
        <div className="btn"><Link to="/user-name">User</Link></div>
        <div className="btn"><Link to="/contact">Contact</Link></div>
      </div>
    );
  }
}

export default Nav;

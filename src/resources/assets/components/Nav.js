import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '/images/logo-demo.jpg';

class Nav extends Component {
  render() {
    return (
      // <div className="hello">Hi ! <Link to="/user-name">Click here</Link></div>
      <div id="menu">
        <div className="btn"><Link to="/"><img src={ logo } /></Link></div>
        <div className="btn"><Link to="/user-name">User</Link></div>
        <div className="btn"><Link to="/contact">Contact</Link></div>
      </div>
    );
  }
}

export default Nav;

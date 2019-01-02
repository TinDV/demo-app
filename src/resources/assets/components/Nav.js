import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div className="hello">Hi ! <Link to="/user-name">Click here</Link></div>
    );
  }
}

export default Nav;

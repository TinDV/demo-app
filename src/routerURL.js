import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import InputText from './Components/InputText';
import HomePage from './Components/HomePage';

class routerURL extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route path = "/user-name" component={InputText} />
            <Route path = "/home-page/:userName" component={HomePage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default routerURL;
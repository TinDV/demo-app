import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import InputText from './resources/assets/components/InputText';
import HomePage from './resources/assets/components/HomePage';

class routerURL extends Component {
  render() {
    return (
      <div>
          <div>
            <Route exact path = "/user-name" component={InputText} />
            <Route path = "/home-page/:userName" component={HomePage} />
          </div>
      </div>
    );
  }
}

export default routerURL;
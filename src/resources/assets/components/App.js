import React, { Component } from 'react';
import '../sass/main.scss';
import { BrowserRouter as Router} from 'react-router-dom';
import Nav from './Nav';
import RouterURL from '../../../routerURL';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <Nav />
            <RouterURL></RouterURL>
          </div>
        </div>
      </Router>
    );
  }

}

export default App;

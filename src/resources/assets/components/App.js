import React, { Component } from 'react';
import '../sass/main.scss';
import { BrowserRouter as Router} from 'react-router-dom';
import RouterURL from '../../../routerURL';
import Nav from './Nav';
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
